"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import ShinyText from "@/components/ShinyText";

const Antigravity = dynamic(() => import("@/components/Antigravity"), {
  ssr: false,
});

export default function Home() {
  const blueColor = "var(--color-cerulean)";
  const blackColor = "var(--color-graphite)";
  const greenColor = "var(--color-malachite)";
  return (
    <div className="relative min-h-screen overflow-hidden" style={{
      background: "radial-gradient(ellipse at 0% 0%, #ffffff 0%, var(--color-sky-blue-light) 10%, var(--color-cerulean) 15%, #ffffff 70%, var(--color-yellow) 80%, var(--color-malachite) 100%)"
    }}>
      {/* Radial gradient background — colors controlled via Tailwind theme tokens */}
      <div
        className="pointer-events-none absolute inset-0"

      />

      {/* Antigravity particle animation */}
      <div className="absolute inset-0">
        <Antigravity
          count={600}
          magnetRadius={6}
          ringRadius={2}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={1.5}
          lerpSpeed={0.05}
          autoAnimate
          particleVariance={1.5}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="box"
          fieldStrength={10}
        />

      </div>

      {/* Logo centered */}
      <div className="pointer-events-none relative z-10 flex min-h-screen flex-col items-center justify-center">
        <Image
          src="/CosRwa_Logo.svg"
          alt="CosRwa Protocol"
          width={500}
          height={171}
          priority
          className="w-[min(500px,80vw)] drop-shadow-[0_0_40px_rgba(95,211,91,0.3)]"
        />
        <ShinyText
          text="Digital Licensing & Compliance"
          className="text-xl drop-shadow-[0_0_40px_rgba(95,211,91,0.3)] font-bold font-jura"
          color={blueColor}
          shineColor={greenColor}
          speed={3}
          spread={300}
        />
      </div>
    </div>
  );
}
