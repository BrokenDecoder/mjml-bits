export const COMPONENTS_CATALOG = [
  {
    id: 'balatro',
    name: 'Balatro',
    category: 'BACKGROUNDS',
    description: 'Hypnotic fluid vortex and flame shader background with customizable colors and spin.',
    badge: 'NEW',
    previewType: 'shader',
    defaultProps: {
      color1: '#de443b',
      color2: '#006bb4',
      color3: '#162325',
      pixelation: 745,
      mouseInteraction: true,
      rotate: true,
    },
    code: `import Balatro from '@/components/Balatro';

<div style={{ width: '100%', height: '500px', position: 'relative' }}>
  <Balatro 
    color1="#de443b"
    color2="#006bb4"
    color3="#162325"
    pixelation={745}
    mouseInteraction={true}
    rotate={true}
  />
</div>`,
    mjmlCode: `<mjml>
  <mj-body>
    <mj-section background-color="#0a0a0f" padding="40px 20px">
      <mj-column>
        <mj-text font-size="28px" color="#ffffff" font-weight="800" align="center">
          Balatro Dynamic Vortex
        </mj-text>
        <mj-button background-color="#de443b" color="#ffffff" border-radius="8px" href="#">
          Explore Campaign
        </mj-button>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>`,
  },
  {
    id: 'dark-veil',
    name: 'Dark Veil',
    category: 'BACKGROUNDS',
    description: 'Dynamic WebGL flowing veil shader with silky smooth violet highlights.',
    badge: 'NEW',
    defaultProps: {
      hueShift: 0,
      noiseIntensity: 0.1,
      speed: 0.5,
      scanlineIntensity: 0.2,
    },
    code: `import DarkVeil from '@/components/DarkVeil';

<div style={{ width: '100%', height: '500px', position: 'relative' }}>
  <DarkVeil speed={0.5} />
</div>`,
    mjmlCode: `<mjml>
  <mj-body>
    <mj-section background-color="#08080c" padding="50px 20px">
      <mj-column>
        <mj-text font-size="32px" color="#ffffff" font-weight="800" align="center">
          Dark Veil Experience
        </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>`,
  },
  {
    id: 'comparison-slider',
    name: 'Comparison Slider',
    category: 'COMPONENTS',
    description: 'Interactive before/after drag comparison card with dual-layer clip paths.',
    badge: 'PRO',
    defaultProps: {
      defaultPosition: 50,
      hoverMode: false,
    },
    code: `import ComparisonSlider from '@/components/ComparisonSlider';

<ComparisonSlider
  beforeLabel="Standard MJML"
  afterLabel="MJML Bits Design"
  defaultPosition={50}
/>`,
    mjmlCode: `<mjml>
  <mj-body>
    <mj-section background-color="#121217" border-radius="14px">
      <mj-column>
        <mj-text color="#ffffff" font-size="20px">Before & After Showcase</mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>`,
  },
  {
    id: 'fold-text',
    name: 'Fold Text',
    category: 'TEXT ANIMATIONS',
    description: '3D origami unfolding text typography with configurable hinge physics and perspective.',
    badge: 'NEW',
    defaultProps: {
      text: 'Design unfolds',
      splitBy: 'word',
      hinge: 'top',
      duration: 0.65,
    },
    code: `import FoldText from '@/components/FoldText';

<FoldText
  text="Launch with clarity"
  splitBy="word"
  hinge="top"
  trigger="scroll"
/>`,
    mjmlCode: `<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-text font-size="36px" font-weight="800" color="#ffffff">
          Design Unfolds
        </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>`,
  },
  {
    id: 'aero-shards',
    name: 'Aero Shards',
    category: 'BACKGROUNDS',
    badge: 'NEW',
    description: 'Atmospheric light beams and shard refractions.',
    code: `// Aero Shards background\n<AeroShards />`,
    mjmlCode: `<mjml><mj-body><mj-section><mj-column><mj-text>Aero Shards</mj-text></mj-column></mj-section></mj-body></mjml>`,
  },
  {
    id: 'depth-carousel',
    name: 'Depth Carousel',
    category: 'COMPONENTS',
    badge: 'NEW',
    description: 'Stacked 3D card carousel with momentum flicking.',
    code: `// Depth Carousel\n<DepthCarousel />`,
    mjmlCode: `<mjml><mj-body><mj-section><mj-column><mj-text>Depth Carousel</mj-text></mj-column></mj-section></mj-body></mjml>`,
  },
  {
    id: 'depth-text',
    name: 'Depth Text',
    category: 'TEXT ANIMATIONS',
    badge: 'NEW',
    description: 'Extruded isometric text with glowing backlight.',
    code: `// Depth Text\n<DepthText text="Elevate" />`,
    mjmlCode: `<mjml><mj-body><mj-section><mj-column><mj-text>Elevate</mj-text></mj-column></mj-section></mj-body></mjml>`,
  },
  {
    id: 'drift-wall',
    name: 'Drift Wall',
    category: 'COMPONENTS',
    badge: 'NEW',
    description: 'Smooth floating parallax masonry grid.',
    code: `// Drift Wall\n<DriftWall />`,
    mjmlCode: `<mjml><mj-body><mj-section><mj-column><mj-text>Drift Wall</mj-text></mj-column></mj-section></mj-body></mjml>`,
  },
  {
    id: 'ghost-fibers',
    name: 'Ghost Fibers',
    category: 'BACKGROUNDS',
    badge: 'NEW',
    description: 'Curving electric energy strands and luminous fiber optics.',
    code: `// Ghost Fibers\n<GhostFibers />`,
    mjmlCode: `<mjml><mj-body><mj-section><mj-column><mj-text>Ghost Fibers</mj-text></mj-column></mj-section></mj-body></mjml>`,
  },
  {
    id: 'glow-cursor',
    name: 'Glow Cursor',
    category: 'ANIMATIONS',
    badge: 'NEW',
    description: 'Dynamic light trail following pointer movement.',
    code: `// Glow Cursor\n<GlowCursor />`,
    mjmlCode: `<mjml><mj-body><mj-section><mj-column><mj-text>Glow Cursor</mj-text></mj-column></mj-section></mj-body></mjml>`,
  },
  {
    id: 'color-bends',
    name: 'Color Bends',
    category: 'BACKGROUNDS',
    badge: 'NEW',
    description: 'Animated iridescent color bands for hero email headers.',
    code: `// Color Bends\n<ColorBends />`,
    mjmlCode: `<mjml><mj-body><mj-section><mj-column><mj-text>Color Bends</mj-text></mj-column></mj-section></mj-body></mjml>`,
  },
  {
    id: 'matrix-cards',
    name: 'Matrix Cards',
    category: 'COMPONENTS',
    badge: 'NEW',
    description: 'Floating isometric cards for email feature showcases.',
    code: `// Matrix Cards\n<MatrixCards />`,
    mjmlCode: `<mjml><mj-body><mj-section><mj-column><mj-text>Matrix Cards</mj-text></mj-column></mj-section></mj-body></mjml>`,
  },
  {
    id: 'star-burst',
    name: 'Star Burst',
    category: 'ANIMATIONS',
    badge: 'NEW',
    description: 'Celebratory particle burst for welcome and milestone emails.',
    code: `// Star Burst\n<StarBurst />`,
    mjmlCode: `<mjml><mj-body><mj-section><mj-column><mj-text>Star Burst</mj-text></mj-column></mj-section></mj-body></mjml>`,
  },
];

// Clean categorized real component groupings for sidebar navigation
export const COMPONENT_CATEGORIES = [
  {
    category: 'BACKGROUNDS',
    items: [
      { id: 'balatro', name: 'Balatro', badge: 'New' },
      { id: 'dark-veil', name: 'Dark Veil', badge: 'New' },
      { id: 'aero-shards', name: 'Aero Shards', badge: 'New' },
      { id: 'ghost-fibers', name: 'Ghost Fibers', badge: 'New' },
      { id: 'color-bends', name: 'Color Bends', badge: 'New' },
    ],
  },
  {
    category: 'COMPONENTS',
    items: [
      { id: 'comparison-slider', name: 'Comparison Slider', badge: 'Pro' },
      { id: 'depth-carousel', name: 'Depth Carousel', badge: 'New' },
      { id: 'drift-wall', name: 'Drift Wall', badge: 'New' },
      { id: 'matrix-cards', name: 'Matrix Cards', badge: 'New' },
    ],
  },
  {
    category: 'TEXT ANIMATIONS',
    items: [
      { id: 'fold-text', name: 'Fold Text', badge: 'New' },
      { id: 'depth-text', name: 'Depth Text', badge: 'New' },
    ],
  },
  {
    category: 'ANIMATIONS',
    items: [
      { id: 'glow-cursor', name: 'Glow Cursor', badge: 'New' },
      { id: 'star-burst', name: 'Star Burst', badge: 'New' },
    ],
  },
];
