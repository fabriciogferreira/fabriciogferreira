import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "olie.ai",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "unifunec.edu.br",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "enterscience.com.br",
        pathname: "/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
