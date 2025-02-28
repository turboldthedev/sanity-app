// schemas/featureSection.js
const FeatureSection = {
  name: "featureSection",
  title: "Feature Section",
  type: "object",
  fields: [
    {
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Feature Title", type: "string" },
            { name: "description", title: "Feature Description", type: "text" },
            {
              name: "buttons",
              title: "Buttons",
              type: "array", // Changed from "object" to "array" to allow one or more buttons
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "label",
                      title: "Button Label",
                      type: "string",
                      validation: (Rule: any) => Rule.required(),
                    },
                    {
                      name: "url",
                      title: "Button URL",
                      type: "string", // Optional: You can make this required or use a URL type if needed
                    },
                    {
                      name: "variant",
                      title: "Button Variant",
                      type: "string",
                      initialValue: "primary", // Default to "primary" based on your data
                      options: {
                        list: [
                          { title: "Primary", value: "primary" },
                          { title: "Outline", value: "outline" },
                        ],
                      },
                    },
                  ],
                  preview: {
                    select: {
                      title: "label",
                    },
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "sectionTitle",
    },
  },
};

export default FeatureSection;
