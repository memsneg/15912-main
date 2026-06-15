import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
  },
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
