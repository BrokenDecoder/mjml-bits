'use client';

import DarkVeil from './DarkVeil';

export default function Background() {
  return (
    <div className="site-background-wrapper" aria-hidden="true">
      {/* WebGL Shader Background Canvas */}
      <div className="darkveil-container">
        <DarkVeil
          hueShift={-35}
          speed={0.4}
          warpAmount={0.2}
          noiseIntensity={0.03}
          scanlineIntensity={0.05}
          scanlineFrequency={2.0}
          resolutionScale={0.75}
        />
      </div>

      {/* Subtle radial vignette to focus attention on content */}
      <div className="bg-vignette" />

      {/* Dotted Grid Overlay */}
      <div className="bg-grid" />
    </div>
  );
}
