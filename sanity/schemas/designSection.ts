// schemas/designSection.js
const DesignSection = {
  name: "designSection",
  title: "Design Section",
  type: "object",
  fields: [
    {
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "video",
      title: "Video",
      type: "file", // Use 'file' for video uploads (e.g., MP4)
      options: {
        accept: "video/*", // Restrict to video files (e.g., MP4, MOV)
      },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Description or caption for the video",
          validation: (Rule: any) => Rule.required(),
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

export default DesignSection;
