"use client";

import { ReactNode } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.085,
        duration: 1.1,
        smoothWheel: true,
        syncTouch: true,
        syncTouchLerp: 0.075,
        touchMultiplier: 1,
        wheelMultiplier: 0.92,
      }}
    >
      {/* @ts-ignore - React 19 / 18 ReactNode type conflict bypass */}
      {children}
    </ReactLenis>
  );
}
