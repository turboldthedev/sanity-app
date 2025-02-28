// schemas/testimonialsSection.js
const TestimonialsSection = {
  name: "testimonialsSection",
  title: "Testimonials Section",
  type: "object",
  fields: [
    {
      name: "title",
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
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      description:
        "Description or additional text below the title (e.g., community info)",
    },
    {
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "title",
              title: "Title/Position",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "quote",
              title: "Quote",
              type: "text",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "image",
              title: "Profile Image",
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
      validation: (Rule: any) => Rule.min(1), // Ensure at least one testimonial
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};

export default TestimonialsSection;
