// types/ContactUs.ts or types/LandingPage.ts
export interface ContactUsHours {
  _key: string;
  day: string;
  time: string;
}

export interface ContactUsShowroom {
  address: string;
  cityStateZip: string;
}

export interface ContactUs {
  _type: "contactUsPage";
  _id: string; // Document ID for a document type
  _key?: string; // Optional, as it might not be needed for a document
  title: string;
  description: string;
  contactInfo: {
    showroom: ContactUsShowroom;
    phone: string;
    email: string;
    hours: ContactUsHours[];
  };
}
