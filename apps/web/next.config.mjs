const isProd = process.env.NODE_ENV === "production";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
// GitHub Pages 기본 규칙: 사용자/조직 페이지(jojojojo1322.github.io)는 basePath 없음,
// 프로젝트 페이지(jojojojo1322.github.io/portfolio)는 "/포트폴리오명"을 basePath로 사용.
const defaultBasePath = isProd
  ? repoName === `${process.env.GITHUB_REPOSITORY?.split("/")[0]}.github.io`
    ? ""
    : repoName
      ? `/${repoName}`
      : ""
  : "";
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  process.env.BASE_PATH ??
  defaultBasePath;
const assetPrefix =
  process.env.NEXT_PUBLIC_ASSET_PREFIX ??
  process.env.ASSET_PREFIX ??
  basePath;

/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: assetPrefix || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

