// schemas/workflowSection.js
const WorkflowSection = {
  name: "workflowSection",
  title: "Workflow Section",
  type: "object",
  fields: [
    {
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
    },
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "columns",
      title: "Columns",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Column Title",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "features",
              title: "Features",
              type: "array",
              of: [
                {
                  type: "string",
                  validation: (Rule: any) => Rule.required(),
                },
              ],
              description: "List of features with checkmarks (one per line)",
            },
            {
              name: "image",
              title: "Column Image",
              type: "image",
              options: { hotspot: true },
              fields: [
                {
                  name: "alt",
                  title: "Alt Text",
                  type: "string",
                  validation: (Rule: any) => Rule.required(),
                },
              ],
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.length(2), // Ensure exactly 2 columns
    },
  ],
  preview: {
    select: {
      title: "sectionTitle",
    },
  },
};

export default WorkflowSection;
