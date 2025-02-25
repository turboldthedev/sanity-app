const HeroSection = {
  name: "heroSection",
  title: "Hero Section",
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
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
  ],
};
export default HeroSection;
