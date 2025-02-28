import { ContactUs } from "@/types/ContactUsPage";
import { LandingPage } from "@/types/LandingPage";
import { Navbar } from "@/types/Navbar";

import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: "cobdwwy8",
  dataset: "production",
  apiVersion: "2024-02-25",
  useCdn: false,
});
const builder = imageUrlBuilder(client);

function getAssetUrl(source: any): string {
  if (!source || (!source._ref && !source.asset)) {
    return "";
  }

  const ref = source._ref || source.asset._ref;

  if (ref.startsWith("image-")) {
    return builder.image(source).url() || "";
  } else if (ref.startsWith("file-")) {
    const match = ref.match(/^file-([^-]+)-([^-]+)$/);
    if (!match || match.length < 3) {
      return "";
    }

    const assetId = match[1];
    const extension = match[2];
    return `https://cdn.sanity.io/files/${client.config().projectId}/${client.config().dataset}/${assetId}.${extension}`;
  }

  return "";
}

function processAssets(data: any): any {
  if (!data) return data;

  if ((data._type === "image" || data._type === "file") && data.asset) {
    return { ...data, url: getAssetUrl(data) };
  }

  if (Array.isArray(data)) {
    return data.map((item) => processAssets(item));
  }

  if (typeof data === "object") {
    return Object.fromEntries(
      Object.entries(data).map(([key, value]) => [key, processAssets(value)])
    );
  }

  return data;
}

export async function getLandingPage(): Promise<LandingPage> {
  const data = await client.fetch(`
    *[_type == "landingPage"][0] {
      ...,
      pageSections[] {
        _type == "heroSection" => { ... },
        _type == "brandSection" => { ... },
        _type != "heroSection" && _type != "brandSection" => { ... },
        _type == "designSection" => {
          ...,
          video {
            ... 
          }
        }
      }
    }
  `);

  return processAssets(data);
}

export async function getNavbar(): Promise<Navbar> {
  const data = await client.fetch<Navbar>(
    `*[_type == "navbar"][0] {
      _type,
      _key,
      title,
      logo,
      navbarContents[] {
        _key,
        label,
        url
      }
    }`
  );

  return processAssets(data) as Navbar;
}

export async function getContactUs(): Promise<ContactUs> {
  const data = await client.fetch<ContactUs>(
    `*[_type == "contactUsPage"][0] {
      _id,
      _type,
      title,
      description,
      contactInfo {
        showroom {
          address,
          cityStateZip
        },
        phone,
        email,
        hours[] {
          _key,
          day,
          time
        }
      }
    }`
  );

  return processAssets(data) as ContactUs;
}
