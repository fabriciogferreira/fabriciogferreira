import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["olie.ai"], // Adiciona o domínio externo para permitir a exibição da imagem
  },
};

export default nextConfig;
