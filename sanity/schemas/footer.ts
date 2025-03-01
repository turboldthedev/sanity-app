// schemas/footer.js
const Footer = {
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description:
        "The title or name of the navbar (optional, for internal reference)",
    },
    {
      name: "columns",
      title: "Footer Columns",
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
              name: "links",
              title: "Links",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "label",
                      title: "Label",
                      type: "string",
                      validation: (Rule: any) => Rule.required(),
                    },
                    {
                      name: "url",
                      title: "URL",
                      type: "string",
                      validation: (Rule: any) => Rule.required(),
                    },
                  ],
                  preview: {
                    select: {
                      title: "label",
                      subtitle: "url",
                    },
                  },
                },
              ],
            },
          ],
          preview: {
            select: {
              title: "title",
            },
          },
        },
      ],
      validation: (Rule: any) => Rule.length(3), // Ensure exactly 3 columns (Explore, About, Support)
    },
    {
      name: "copyright",
      title: "Copyright Notice",
      type: "string",
      initialValue: "© 2024 Material Bank. All rights reserved.",
      description: "Copyright text for the footer",
    },
    {
      name: "language",
      title: "Language",
      type: "string",
      options: {
        list: [
          { title: "English", value: "English" },
          // Add more languages as needed (e.g., Spanish, French)
        ],
      },
      initialValue: "English",
      description: "Language selector text for the footer",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};

export default Footer;
