import Link from 'next/link';
import {
  SparklesIcon,
  BlocksIcon,
  LayersIcon,
  MailIcon,
  ArrowRightIcon,
  CheckIcon,
} from '@/components/Icons';

export const metadata = {
  title: 'MJML Bits Pro — Premium Email Components & Templates',
  description:
    'Accelerate your campaign development with 200+ battle-tested email blocks, full newsletter templates, and AI coding skills.',
};

export default function ProPage() {
  const features = [
    {
      title: '300+ Production Blocks',
      description:
        'Battle-tested transactional receipts, pricing tiers, onboarding hero sections, product grids, and compliance footers.',
      icon: BlocksIcon,
    },
    {
      title: 'Full Template Kits',
      description:
        'End-to-end templates for SaaS onboarding, e-commerce abandonment, order tracking, digests, and event invites.',
      icon: MailIcon,
    },
    {
      title: 'AI Agent Skills & MCP',
      description:
        'Native skill definitions and MCP tooling to let AI agents build and validate responsive MJML directly in your IDE.',
      icon: SparklesIcon,
    },
    {
      title: 'Figma & Design Tokens',
      description:
        'Synced Figma design system library mapping 1-to-1 with MJML component parameters and responsive breakpoints.',
      icon: LayersIcon,
    },
  ];

  const tiers = [
    {
      name: 'Community',
      price: 'Free',
      period: 'Forever',
      description: 'Everything you need to craft high-converting responsive emails.',
      features: [
        '170+ Free MJML components',
        'Standard documentation',
        'MIT License',
        'Community Discord access',
      ],
      cta: 'Explore Free Docs',
      href: '/docs',
      isPopular: false,
    },
    {
      name: 'Pro Lifetime',
      price: '$99',
      period: 'one-time payment',
      description: 'Full access to all premium blocks, kits, and lifetime updates.',
      features: [
        'All 300+ Premium Email UI blocks',
        '11 Complete Campaign Kits',
        '20 AI Agent Skills & MCP tools',
        'Figma Design System source',
        'Commercial Unlimited License',
        'Lifetime updates & new releases',
      ],
      cta: 'Get Lifetime Access',
      href: '#',
      isPopular: true,
    },
  ];

  return (
    <div className="container" style={{ paddingBottom: '100px' }}>
      <header className="tools-page-header" style={{ textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
          <span className="badge-pill">
            <span className="badge-tag">PRO ACCESS</span>
            <span>LIFETIME DEAL AVAILABLE</span>
          </span>
        </div>

        <h1 className="page-title" style={{ maxWidth: '800px', margin: '0 auto 16px' }}>
          Build the whole product with{' '}
          <span className="text-gradient">one email library</span>
        </h1>

        <p className="page-subtitle" style={{ maxWidth: '640px', margin: '0 auto' }}>
          Everything you need to ship high-converting, bulletproof emails in minutes.
          Pre-tested across Outlook, Gmail, Apple Mail, and mobile clients.
        </p>
      </header>

      {/* Feature Grid */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          margin: '50px 0 70px',
        }}
      >
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <div key={f.title} className="tool-card">
              <div className="tool-icon-wrapper">
                <Icon className="w-6 h-6 tool-icon" />
              </div>
              <h3 className="tool-title">{f.title}</h3>
              <p className="tool-desc">{f.description}</p>
            </div>
          );
        })}
      </section>

      {/* Pricing Tiers */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        {tiers.map((tier) => (
          <div
            key={tier.name}
            style={{
              background: tier.isPopular
                ? 'linear-gradient(180deg, rgba(32, 18, 52, 0.95) 0%, rgba(18, 14, 28, 0.95) 100%)'
                : 'var(--bg-surface-card)',
              border: tier.isPopular
                ? '1px solid rgba(168, 85, 247, 0.5)'
                : '1px solid var(--border-subtle)',
              borderRadius: '16px',
              padding: '36px 32px',
              position: 'relative',
              boxShadow: tier.isPopular
                ? '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 35px rgba(168, 85, 247, 0.2)'
                : 'none',
            }}
          >
            {tier.isPopular && (
              <div
                style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '24px',
                  background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)',
                  color: '#ffffff',
                  fontSize: '11px',
                  fontWeight: '700',
                  padding: '3px 10px',
                  borderRadius: '9999px',
                  letterSpacing: '0.04em',
                }}
              >
                MOST POPULAR
              </div>
            )}

            <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#ffffff', marginBottom: '8px' }}>
              {tier.name}
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              {tier.description}
            </p>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '28px' }}>
              <span style={{ fontSize: '42px', fontWeight: '700', color: '#ffffff' }}>
                {tier.price}
              </span>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                / {tier.period}
              </span>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              {tier.features.map((feat) => (
                <li key={feat} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                  <CheckIcon className="w-4 h-4" style={{ color: 'var(--purple-400)', flexShrink: 0 }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <Link
              href={tier.href}
              className={tier.isPopular ? 'btn-primary' : 'btn-secondary'}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>{tier.cta}</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
