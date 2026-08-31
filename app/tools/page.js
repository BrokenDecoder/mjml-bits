import ToolCard from '@/components/ToolCard';
import { PaletteIcon, ShapesIcon, ImageIcon } from '@/components/Icons';

export const metadata = {
  title: 'Creative Tools — MJML Bits',
  description:
    'Free utilities to boost your creative email workflow and help you get the most out of MJML Bits in your projects.',
};

export default function ToolsPage() {
  const tools = [
    {
      title: 'Background Studio',
      description:
        'Explore animated backgrounds for your projects. Choose from various effects and customize as you like. Export as video, image, or code or share your creations as URLs.',
      icon: PaletteIcon,
      href: '#',
    },
    {
      title: 'Shape Magic',
      description:
        'Build smooth merged blob shapes with auto inner-rounded corners, gradients, shadows, outlines and presets. Export as SVG, PNG, JPG, React or CSS clip-path.',
      icon: ShapesIcon,
      href: '#',
    },
    {
      title: 'Texture Lab',
      description:
        'Apply effects to your images and export the results. Add noise, dithering, halftone, ASCII art, and more. Save your presets for sharing or future use.',
      icon: ImageIcon,
      href: '#',
    },
  ];

  return (
    <div className="container">
      <header className="tools-page-header">
        <h1 className="page-title">Creative Tools</h1>
        <p className="page-subtitle">
          Free utilities to boost your creative workflow and help you get the
          most out of MJML Bits in your projects.
        </p>
      </header>

      <section className="tools-grid">
        {tools.map((tool) => (
          <ToolCard
            key={tool.title}
            title={tool.title}
            description={tool.description}
            icon={tool.icon}
            href={tool.href}
          />
        ))}
      </section>
    </div>
  );
}
