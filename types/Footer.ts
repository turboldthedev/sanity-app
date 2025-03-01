export interface FooterLink {
  _key: string;
  label: string;
  url: string;
}

export interface FooterColumn {
  _key: string;
  title: string;
  links: FooterLink[];
}

export interface Footer {
  _type: "footer";
  _id: string; // Document ID for a document type
  _key?: string; // Optional, as it might not be needed for a document
  columns: FooterColumn[];
  copyright: string;
  language: string;
}
