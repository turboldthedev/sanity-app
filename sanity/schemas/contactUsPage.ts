// schemas/contactUsSection.js
const ContactUsPage = {
  name: "contactUsPage",
  title: "Contact Us Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Page title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      description:
        "Brief description about the contact section (e.g., 'Have questions about our premium granite countertops or kitchen solutions? Our team is here to help you create the kitchen of your dreams.')",
    },
    {
      name: "contactInfo",
      title: "Contact Information",
      type: "object",
      fields: [
        {
          name: "showroom",
          title: "Showroom Address",
          type: "object",
          fields: [
            {
              name: "address",
              title: "Address",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "cityStateZip",
              title: "City, State, ZIP",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
        {
          name: "phone",
          title: "Phone Number",
          type: "string",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "email",
          title: "Email",
          type: "string",
          validation: (Rule: any) => Rule.required().email(),
        },
        {
          name: "hours",
          title: "Business Hours",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "day",
                  title: "Day",
                  type: "string",
                  options: {
                    list: [
                      { title: "Monday", value: "Monday" },
                      { title: "Tuesday", value: "Tuesday" },
                      { title: "Wednesday", value: "Wednesday" },
                      { title: "Thursday", value: "Thursday" },
                      { title: "Friday", value: "Friday" },
                      { title: "Saturday", value: "Saturday" },
                      { title: "Sunday", value: "Sunday" },
                    ],
                  },
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: "time",
                  title: "Hours",
                  type: "string",
                  validation: (Rule: any) => Rule.required(),
                },
              ],
            },
          ],
          description:
            "List of business hours for each day (e.g., 'Monday - Friday: 9am - 6pm', 'Saturday: 10am - 4pm', 'Sunday: Closed')",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};

export default ContactUsPage;
