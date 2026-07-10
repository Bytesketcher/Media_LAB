import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Ground HO — Media & Cultural Design",
  description:
    "공공기관·지역·문화예술·기업을 위한 홍보영상, 유튜브, 생성형 AI 콘텐츠 전문 미디어 스튜디오",
  keywords: ["홍보영상", "미디어스튜디오", "AI콘텐츠", "유튜브제작", "영상제작", "기업영상"],
  openGraph: {
    title: "Ground HO — Media & Cultural Design",
    description: "공공기관·지역·문화예술·기업을 위한 홍보영상과 생성형 AI 콘텐츠 제작",
    type: "website",
    locale: "ko_KR",
    siteName: "Ground HO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ground HO",
    description: "Media & Cultural Design",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css" />
      </head>
      <body>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
