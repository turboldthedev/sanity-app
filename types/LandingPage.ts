export interface LandingPage {
  _id: string;
  _type: "landingPage";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  pageSections: Section[];
}

export type Section =
  | HeroSection
  | FeatureSection
  | BrandSection
  | WorkflowSection
  | DesignSection
  | TestimonialsSection;

export interface HeroButton {
  _key: string; // Unique key for React mapping
  label: string;
  url?: string; // Optional, as it might not always be provided
  variant?: "primary" | "outline" | "secondary"; // Adjust variants based on your UI framework
}

export interface HeroSection {
  _type: "heroSection";
  _key: string; // Optional, but useful for mapping in React
  heading: string;
  subheading: string;
  backgroundColor: string;
  buttons: HeroButton[]; // Array of buttons
  backgroundImage: {
    alt: string;
    url: string;
  };
}
export interface FeatureSection {
  _type: "featureSection";
  _key: string;
  title: string;
  features: Feature[];
}

export interface BrandSection {
  _type: "brandSection";
  _key: string;
  heading: string;
  subheading: string;
  coverImage: {
    alt: string;
    asset: any;
    url: string;
    _type: string; //
  };
  brands: Brand[];
}

// Supporting Types

export interface FeatureButton {
  _key: string; // Unique key for React mapping
  label: string;
  url?: string; // Optional, as it might not always be provided
  variant?: "primary" | "secondary" | "outline"; // Adjust variants based on your UI framework
}

export interface Feature {
  _key: string;
  title: string;
  description: string;
  buttons?: FeatureButton[]; // Optional array of buttons for each feature
}

export interface Brand {
  name: string;
  image: {
    url: string;
    _type: string;
    asset: any;
  };
}

export interface WorkflowColumn {
  title: string;
  features: string[];
  image: {
    asset?: { _ref: string };
    url: string;
    alt: string;
  };
}

export interface WorkflowSection {
  _type: "workflowSection";
  _key: string;
  heading: string;
  columns: WorkflowColumn[];
}

export interface DesignSection {
  _type: "designSection";
  _key: string;
  heading: string;
  video: {
    asset?: { _ref: string };
    url: string; // URL for the video file (processed by Sanity)
    alt: string;
  };
}

export interface Testimonial {
  _key: string;
  name: string;
  title: string;
  quote: string;
  image: {
    asset?: { _ref: string };
    url: string;
    alt: string;
  };
}

export interface TestimonialsSection {
  _type: "testimonialsSection";
  _key: string;
  heading: string;
  subtitle?: string;
  testimonials: Testimonial[];
}