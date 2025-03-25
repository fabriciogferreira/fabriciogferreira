import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["olie.ai", "unifunec.edu.br", "enterscience.com.br"], // Adiciona o domínio externo para permitir a exibição da imagem
  },
};

export default withNextIntl(nextConfig);
