import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io", "materialbank-eu-cdn.freetls.fastly.net"],
  },
};

export default nextConfig;
