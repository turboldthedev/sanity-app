const BrandSection = {
  name: "brandSection",
  title: "Brand Section",
  type: "object",
  fields: [
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
