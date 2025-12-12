const isProd = process.env.NODE_ENV === "production";
const repoBase = "/portfolio.github.io";

/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isProd ? repoBase : undefined,
  assetPrefix: isProd ? repoBase : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

