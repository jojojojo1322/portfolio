import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://jojojojo1322.github.io/portfolio.github.io";

export const metadata: Metadata = {
  title: "홍길동 | Frontend Engineer",
  description: "프론트엔드 원페이지 포트폴리오",
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

