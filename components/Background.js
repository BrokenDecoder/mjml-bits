'use client';

import DarkVeil from './DarkVeil';

export default function Background() {
  return (
    <div className="site-background-wrapper" aria-hidden="true">
      {/* WebGL Shader Background Canvas */}
      <div className="darkveil-container">
        <DarkVeil
          hueShift={-35}
          speed={0.35}
          warpAmount={0.2}
          noiseIntensity={0.02}
          scanlineIntensity={0.0}
          resolutionScale={1}
        />
      </div>

      {/* Dotted Grid Overlay */}
      <div className="bg-grid" />
    </div>
  );
}
