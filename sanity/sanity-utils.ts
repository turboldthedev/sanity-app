import { LandingPage } from "@/types/LandingPage";

import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: "cobdwwy8",
  dataset: "production",
  apiVersion: "2024-02-25",
  useCdn: false,
});
const builder = imageUrlBuilder(client);

// Function to get URL for both images and files
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
      return ""; // Fallback for malformed refs
    }

    const assetId = match[1]; // Extract the asset ID (e.g., 526df9df98ed4d727662fba65fa381ccbdaf977a)
    const extension = match[2]; // Extract the file extension (e.g., mp4)
    return `https://cdn.sanity.io/files/${client.config().projectId}/${client.config().dataset}/${assetId}.${extension}`;
  }

  return ""; // Fallback for invalid refs
}

// Function to process assets recursively
function processAssets(data: any): any {
  if (!data) return data;

  // If it's an image or file object with an asset, add the URL
  if ((data._type === "image" || data._type === "file") && data.asset) {
    return { ...data, url: getAssetUrl(data) };
  }

  // If it's an array, process each item
  if (Array.isArray(data)) {
    return data.map((item) => processAssets(item));
  }

  // If it's an object, process each property
  if (typeof data === "object") {
    return Object.fromEntries(
      Object.entries(data).map(([key, value]) => [key, processAssets(value)])
    );
  }

  // Return scalars (strings, numbers, etc.) as-is
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
