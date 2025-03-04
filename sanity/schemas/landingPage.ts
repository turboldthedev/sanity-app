const LandingPage = {
  name: "landingPage",
  title: "Landing Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Page Title",
      type: "string",
    },
    {
      name: "pageSections",
      title: "Page Sections",
      type: "array",
      of: [
        { type: "heroSection" },
        { type: "featureSection" },
        { type: "brandSection" },
        { type: "workflowSection" },
        { type: "designSection" },
        { type: "testimonialsSection" },
      ],
    },
  ],
};

export default LandingPage;
