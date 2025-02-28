export interface Navbar {
  _type: "navbar";
  _key?: string;
  title?: string;
  logo: {
    asset?: { _ref: string };
    url: string;
    alt: string;
  };
  navbarContents: Array<{
    _key: string;
    label: string;
    url: string;
  }>;
}
