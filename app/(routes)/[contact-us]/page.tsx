import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { getContactUs } from "@/sanity/sanity-utils";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with our team for any questions about our premium granite kitchen products.",
};

export default async function ContactPage() {
  const contactUs = await getContactUs();
  console.log(contactUs, "contactUs data");

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 pt-48 pb-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-6">
            {contactUs.title}
          </h1>
          {contactUs.description && (
            <p className="text-muted-foreground mb-8 max-w-md">
              {contactUs.description}
            </p>
          )}

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium">Our Showroom</h3>
                <p className="text-muted-foreground">
                  {contactUs.contactInfo.showroom.address}
                  <br />
                  {contactUs.contactInfo.showroom.cityStateZip}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-muted-foreground">
                  {contactUs.contactInfo.phone}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground">
                  <a
                    href={`mailto:${contactUs.contactInfo.email}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {contactUs.contactInfo.email}
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium">Hours</h3>
                <ul className="text-muted-foreground">
                  {contactUs.contactInfo.hours
                    .sort((a, b) => {
                      const daysOrder = [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                        "Sunday",
                      ];
                      return (
                        daysOrder.indexOf(a.day) - daysOrder.indexOf(b.day)
                      );
                    })
                    .map((hour) => (
                      <li key={hour._key}>
                        {hour.day}: {hour.time}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl shadow-sm p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
