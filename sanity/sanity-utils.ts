import { LandingPage } from "@/types/LandingPage";
import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: "cobdwwy8",
  dataset: "production",
  apiVersion: "2024-02-25",
  useCdn: false, // Optional: Use Live API instead of CDN
});

export async function getProjects(): Promise<Project[]> {
  const query = groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
    }`;
  console.log("Query being sent:", query); // Log the query
  return client.fetch(query);
}

export async function getLandingPage(): Promise<LandingPage> {
  return client.fetch(`*[_type == "landingPage"][0]`);
}
