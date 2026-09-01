import ToolCard from '@/components/ToolCard';
import { CodeIcon } from '@/components/Icons';

export const metadata = {
  title: 'Creative Tools — MJML Bits',
  description:
    'Free utilities to boost your creative email workflow and help you get the most out of MJML Bits in your projects.',
};

export default function ToolsPage() {
  const tools = [
    {
      title: 'Preview MJML Code',
      description:
        'Live interactive compiler and editor for MJML markup. Test components, toggle desktop & mobile viewports, inspect generated responsive HTML tables, and export inlined templates.',
      icon: CodeIcon,
      href: '/tools/preview-mjml',
    },
  ];

  return (
    <div className="container">
      <header className="tools-page-header">
        <h1 className="page-title">Creative Tools</h1>
        <p className="page-subtitle">
          Free utilities to boost your creative email workflow and help you get
          the most out of MJML Bits in your projects.
        </p>
      </header>

      <section className="tools-grid-single">
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
