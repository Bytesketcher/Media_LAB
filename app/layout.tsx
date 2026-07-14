import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BGMPlayer from "@/components/ui/BGMPlayer";

export const metadata: Metadata = {
  title: "HO Media Archive — Immersive Content Production",
  description:
    "다큐멘터리, XR, AI, 인터랙티브 기술로 공공과 문화를 위한 콘텐츠를 기획하고 제작하는 크리에이티브 프로덕션. Stories That Move People.",
  keywords: ["다큐멘터리", "몰입형콘텐츠", "XR콘텐츠", "VR콘텐츠", "AR콘텐츠", "인터랙티브미디어", "AI콘텐츠", "공공콘텐츠", "디지털아카이브", "박물관미디어", "전시영상", "문화유산", "도시브랜딩"],
  openGraph: {
    title: "HO Media Archive — Immersive Content Production",
    description: "Stories That Move People. 공공과 문화를 위한 콘텐츠를 기획하고 제작하는 크리에이티브 프로덕션",
    type: "website",
    locale: "ko_KR",
    siteName: "HO Media Archive",
  },
  twitter: {
    card: "summary_large_image",
    title: "HO Media Archive",
    description: "Immersive Content Production",
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
        <meta name="naver-site-verification" content="e3adc1ea898e57e2ec428ce95286705c65a8d49c" />
        <meta name="google-site-verification" content="zHJ0z9Sou8HwruDQf8FkVdrUFl_RuajWidnJcguhG1w" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css" />
        <Script
          type="module"
          src="https://unpkg.com/@google/model-viewer@3.5.0/dist/model-viewer.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <BGMPlayer />
      </body>
    </html>
  );
}
