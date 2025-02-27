const BrandSection = {
  name: "brandSection",
  title: "Brand Section",
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
      name: "subheading",
      title: "Subheading",
      type: "text",
    },
    {
      name: "coverImage",
      title: "Cover Image",
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
      name: "brands",
      title: "Brands",
      type: "array",
      of: [
        {
          type: "object",
          fields: [{ name: "image", title: "Brand Logo", type: "image" }],
        },
      ],
    },
  ],
};

export default BrandSection;
