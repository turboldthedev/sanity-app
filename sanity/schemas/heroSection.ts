const HeroSection = {
  name: "heroSection",
  title: "Hero Section",
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
      validation: (Rule: any) => Rule.required(),
    },

    {
      name: "subheading",
      title: "Subheading",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "backgroundColor",
      title: "Background Color",
      type: "string",
    },
    {
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
        },
      ],
    },
    {
      name: "buttons",
      title: "Buttons",
      type: "array",
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
              type: "string", // Optional: For styling (e.g., "primary", "outline") if your UI framework supports it
              initialValue: "outline", // Default to "outline" as shown in the image
              options: {
                list: [
                  { title: "Primary", value: "primary" },
                  { title: "Outline", value: "outline" },
                ],
              },
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

export default HeroSection;
