export interface LandingPage {
  _id: string;
  _type: "landingPage";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  pageSections: Section[];
}

export type Section = HeroSection | FeatureSection | BrandSection;

export interface HeroSection {
  _type: "heroSection";
  _key: string;
  heading: string;
  subheading: string;
  backgroundImage: ImageAsset;
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
  brands: Brand[];
}

// Supporting Types
export interface ImageAsset {
  asset: { _ref: string; _type: "reference" };
}

export interface Feature {
  title: string;
  description: string;
  icon: ImageAsset;
}

export interface Brand {
  name: string;
  logo: ImageAsset;
}
