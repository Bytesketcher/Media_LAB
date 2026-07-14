import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BGMPlayer from "@/components/ui/BGMPlayer";

export const metadata: Metadata = {
  title: "HO Archive — Immersive Cultural Media",
  description:
    "다큐멘터리, 가상융합(VR·AR), AI를 통해 공공의 이야기를 몰입형 문화 경험으로 전환하는 크리에이티브 스튜디오. Archive the Present. Experience the Future.",
  keywords: ["다큐멘터리", "몰입형미디어", "XR콘텐츠", "VR콘텐츠", "AR콘텐츠", "가상융합콘텐츠", "AI다큐멘터리", "공공콘텐츠", "디지털아카이브", "박물관미디어", "전시영상", "문화유산"],
  openGraph: {
    title: "HO Archive — Immersive Cultural Media",
    description: "Archive the Present. Experience the Future. 공공의 이야기를 몰입형 문화 경험으로 만드는 크리에이티브 스튜디오",
    type: "website",
    locale: "ko_KR",
    siteName: "HO Archive",
  },
  twitter: {
    card: "summary_large_image",
    title: "HO Archive",
    description: "Immersive Cultural Media",
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
