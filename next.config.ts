import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "cdn.sanity.io",
      "materialbank-eu-cdn.freetls.fastly.net",
      "hebbkx1anhila5yf.public.blob.vercel-storage.com",
    ],
  },
};

export default nextConfig;
