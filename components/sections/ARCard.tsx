"use client";

import { ScanLine, Box, Smartphone } from "lucide-react";
import AnimateInView from "@/components/ui/AnimateInView";
import SectionLabel from "@/components/ui/SectionLabel";

const AR_CARD_YOUTUBE_ID = "1WLDHKCBYWM";

const arCardFeatures = [
  {
    icon: ScanLine,
    title: "마커 기반 이미지 트래킹",
    description:
      "인쇄된 명함을 카메라로 비추면 정확하게 인식해 AR 콘텐츠를 실행합니다.",
  },
  {
    icon: Box,
    title: "3D 캐릭터 연출",
    description:
      "명함 위로 브랜드를 상징하는 3D 캐릭터가 떠올라 회전하며 시선을 사로잡습니다.",
  },
  {
    icon: Smartphone,
    title: "앱 설치 없이 웹으로",
    description:
      "별도 앱 설치 없이 웹 브라우저에서 바로 실행되는 가벼운 AR 경험입니다.",
  },
];

export default function ARCard() {
  return (
    <section
      id="ar-card"
      className="section-padding"
      aria-labelledby="ar-card-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <AnimateInView>
            <SectionLabel>AR Business Card</SectionLabel>
          </AnimateInView>
          <AnimateInView delay={0.1}>
            <h2
              id="ar-card-heading"
              className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)]"
            >
              명함 한 장이
              <br />
              <span className="gradient-text">브랜드 경험이 됩니다</span>
            </h2>
          </AnimateInView>
          <AnimateInView delay={0.2}>
            <p className="text-[var(--text-secondary)] max-w-lg text-center leading-relaxed">
              인쇄된 명함을 카메라로 비추면 3D 캐릭터가 나타나는 마커 기반 AR 명함입니다.
              첫 만남의 순간부터 브랜드를 기억에 남깁니다.
            </p>
          </AnimateInView>
        </div>

        {/* Card visual */}
        <AnimateInView delay={0.15}>
          <div className="relative max-w-sm mx-auto aspect-[9/16] rounded-3xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--surface)] mb-12">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${AR_CARD_YOUTUBE_ID}?autoplay=1&mute=1&loop=1&playlist=${AR_CARD_YOUTUBE_ID}&rel=0&modestbranding=1&playsinline=1`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="HO Media Archive AR 명함 데모 영상"
            />
          </div>
        </AnimateInView>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {arCardFeatures.map((f, i) => {
            const Icon = f.icon;
            return (
              <AnimateInView key={f.title} delay={0.2 + i * 0.1}>
                <div className="glass-card rounded-2xl p-6 flex flex-col gap-3 h-full">
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent-dim)] border border-[var(--border)] flex items-center justify-center">
                    <Icon size={18} className="text-[var(--accent)]" aria-hidden="true" />
                  </div>
                  <h3 className="text-[var(--text-primary)] font-semibold">{f.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </AnimateInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
