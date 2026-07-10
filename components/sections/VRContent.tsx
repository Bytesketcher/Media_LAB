"use client";

import { Glasses, Box, Sparkles } from "lucide-react";
import AnimateInView from "@/components/ui/AnimateInView";
import SectionLabel from "@/components/ui/SectionLabel";

const vrFeatures = [
  {
    icon: Glasses,
    title: "VR 헤드셋 호환",
    description:
      "Meta Quest, Vision Pro 등 주요 VR 기기에서 매끄럽게 재생되는 콘텐츠를 제작합니다.",
  },
  {
    icon: Box,
    title: "360° 몰입형 촬영",
    description:
      "공간 전체를 담아내는 360도 촬영과 공간 음향으로 현장감을 극대화합니다.",
  },
  {
    icon: Sparkles,
    title: "인터랙티브 체험",
    description:
      "단순 시청을 넘어 사용자가 직접 탐험하고 상호작용하는 경험을 설계합니다.",
  },
];

export default function VRContent() {
  return (
    <section
      id="vr"
      className="section-padding"
      aria-labelledby="vr-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <AnimateInView>
            <SectionLabel>VR Contents</SectionLabel>
          </AnimateInView>
          <AnimateInView delay={0.1}>
            <h2
              id="vr-heading"
              className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)]"
            >
              새로운 차원의 몰입형 경험
            </h2>
          </AnimateInView>
          <AnimateInView delay={0.2}>
            <p className="text-[var(--text-secondary)] max-w-lg text-center leading-relaxed">
              평면 화면을 넘어 VR로 공간과 이야기를 직접 체험하게 합니다. 문화유산, 전시, 브랜드 공간을
              누구나 접근할 수 있는 몰입형 콘텐츠로 재구성합니다.
            </p>
          </AnimateInView>
        </div>

        {/* Media placeholder */}
        <AnimateInView delay={0.15}>
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--surface)] flex items-center justify-center mb-12">
            <div className="flex flex-col items-center gap-3 text-[var(--text-muted)]">
              <Glasses size={40} className="text-[var(--accent)]" aria-hidden="true" />
              <span className="text-sm">VR 콘텐츠 준비 중</span>
            </div>
          </div>
        </AnimateInView>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {vrFeatures.map((f, i) => {
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
