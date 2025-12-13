import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isProd = process.env.NODE_ENV === "production";
const defaultBasePath =
  isProd && repoName && repoName !== `${process.env.GITHUB_REPOSITORY?.split("/")[0]}.github.io`
    ? `/${repoName}`
    : "";
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  process.env.BASE_PATH ??
  defaultBasePath;
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  `https://jojojojo1322.github.io${basePath}`;

export const metadata: Metadata = {
  title: "조현재 | Frontend Developer",
  description:
    "스케줄·운항·글로벌 서비스에서 UI 일관성과 생산성을 끌어올린 프론트엔드 개발자 포트폴리오",
  metadataBase: new URL(siteUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.variable} bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}

