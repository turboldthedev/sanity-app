import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure"; // Updated
import schemas from "./sanity/schemas";

export const config = defineConfig({
  projectId: process.env.SANITY_PROJECT_ID || "cobdwwy8",
  dataset: process.env.SANITY_DATASET || "production",
  title: "Sanity Project",
  apiVersion: "2025-02-25",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: { types: schemas },
});
