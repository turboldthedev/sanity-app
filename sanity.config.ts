import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure"; // Updated
import schemas from "./sanity/schemas";

export const config = defineConfig({
  projectId: "cobdwwy8",
  dataset: "production",
  title: "Sanity Project",
  apiVersion: "2025-02-25",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: { types: schemas },
});
