"use client";

import AnimateInView from "@/components/ui/AnimateInView";
import SectionLabel from "@/components/ui/SectionLabel";

const models = [
  { name: "Pastel Prism Tower", file: "/models/pastel-prism-tower.glb" },
  { name: "Gingerbread Campus", file: "/models/gingerbread-campus.glb" },
  { name: "Glass Arch Tower", file: "/models/glass-arch-tower.glb" },
  { name: "Pastel Cityscape", file: "/models/pastel-cityscape.glb" },
  { name: "Little Detective", file: "/models/little-detective.glb" },
  { name: "Pastel City Building", file: "/models/pastel-city-building.glb" },
];

export default function ModelGallery() {
  return (
    <section
      id="model-gallery"
      className="section-padding"
      aria-labelledby="model-gallery-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <AnimateInView>
            <SectionLabel>3D Model Gallery</SectionLabel>
          </AnimateInView>
          <AnimateInView delay={0.1}>
            <h2
              id="model-gallery-heading"
              className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)]"
            >
              손끝으로 둘러보는
              <br />
              <span className="gradient-text">3D 콘텐츠</span>
            </h2>
          </AnimateInView>
          <AnimateInView delay={0.2}>
            <p className="text-[var(--text-secondary)] max-w-lg text-center leading-relaxed">
              드래그로 회전하고 확대해서 직접 살펴보세요. AR·VR 콘텐츠 제작에 활용되는
              3D 에셋 샘플입니다.
            </p>
          </AnimateInView>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model, i) => (
            <AnimateInView key={model.file} delay={i * 0.08}>
              <div className="glass-card rounded-2xl overflow-hidden flex flex-col h-full">
                <div className="relative aspect-square bg-[var(--surface)]">
                  <model-viewer
                    src={model.file}
                    alt={`${model.name} 3D 모델`}
                    camera-controls
                    auto-rotate
                    rotation-per-second="18deg"
                    shadow-intensity="1"
                    exposure="1"
                    loading="lazy"
                    reveal="auto"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-[var(--text-primary)] font-semibold text-sm">
                    {model.name}
                  </h3>
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}
