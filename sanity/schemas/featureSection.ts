// schemas/featureSection.js
const FeatureSection = {
  name: "featureSection",
  title: "Feature Section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
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
            { name: "icon", title: "Icon", type: "image" },
            { name: "title", title: "Feature Title", type: "string" },
            { name: "description", title: "Feature Description", type: "text" },
          ],
        },
      ],
    },
  ],
};

export default FeatureSection;
