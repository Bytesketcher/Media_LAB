import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BGMPlayer from "@/components/ui/BGMPlayer";

export const metadata: Metadata = {
  title: "Production YUNON — Media & Cultural Design",
  description:
    "AR·VR 가상융합 콘텐츠 홍보 영상 제작을 중심으로, 공공기관·지역·문화예술·기업을 위한 홍보영상, 유튜브, 생성형 AI 콘텐츠를 제작하는 미디어 스튜디오",
  keywords: ["AR콘텐츠", "VR콘텐츠", "가상융합콘텐츠", "홍보영상", "미디어스튜디오", "AI콘텐츠", "유튜브제작", "영상제작", "기업영상"],
  openGraph: {
    title: "Production YUNON — Media & Cultural Design",
    description: "AR·VR 가상융합 콘텐츠 홍보 영상 제작을 중심으로 한 미디어 프로덕션",
    type: "website",
    locale: "ko_KR",
    siteName: "Production YUNON",
  },
  twitter: {
    card: "summary_large_image",
    title: "Production YUNON",
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
