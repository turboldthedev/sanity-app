// schemas/navbar.js
const Navbar = {
  name: "navbar",
  title: "Navbar",
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
      name: "logo",
      title: "Logo",
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
      description: "The logo image for the navbar",
    },
    {
      name: "navbarContents",
      title: "Navigation Items",
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
              description:
                "The destination URL for this navigation item (e.g., '/products', 'https://example.com')",
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
      description: "List of navigation links or items in the navbar",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "logo",
    },
    prepare(selection: { title: string; media: any }) {
      return {
        title: selection.title || "Navbar",
        media: selection.media,
      };
    },
  },
};

export default Navbar;
