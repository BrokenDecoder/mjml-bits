'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ChevronDownIcon,
  CopyIcon,
  CheckIcon,
  ArrowRightIcon,
} from '@/components/Icons';

export default function DocsPage() {
  const [copiedMd, setCopiedMd] = useState(false);
  const [searchFilter, setSearchFilter] = useState('');

  const handleCopyMarkdown = () => {
    const md = `# MJML Bits — Introduction

MJML Bits is an open-source collection of expressive email UI components for adding modern aesthetics and bulletproof responsiveness.

## Quick Start
1. Choose a component from the catalog.
2. Customize attributes and props in the live preview.
3. Copy or integrate the MJML / HTML template directly into your workflow.

## Mission Principles
- **Free For All**: You own the code.
- **Client-Proof**: Tested across Outlook, Gmail, Apple Mail, Yahoo.
- **Fully Modular**: Pure standalone email partials.
`;
    navigator.clipboard.writeText(md);
    setCopiedMd(true);
    setTimeout(() => setCopiedMd(false), 2000);
  };

  const navSections = [
    {
      title: 'Get Started',
      items: [
        { label: 'Introduction', active: true, href: '/docs' },
        { label: 'Installation', href: '/docs' },
        { label: 'MCP', href: '/docs' },
        { label: 'Index', href: '/docs' },
        { label: 'Favorites', href: '/docs' },
      ],
    },
    {
      title: 'Explore Pro',
      items: [
        { label: 'Components', href: '/pro' },
        { label: 'Blocks', href: '/pro' },
        { label: 'App UI', href: '/pro' },
        { label: 'Templates', badge: '1 Free', href: '/pro' },
        { label: 'Skills', badge: '1 Free', href: '/pro' },
      ],
    },
    {
      title: 'Tools',
      items: [
        { label: 'Background Studio', href: '/tools' },
        { label: 'Shape Magic', href: '/tools' },
        { label: 'Texture Lab', href: '/tools' },
      ],
    },
    {
      title: 'Text & Visuals',
      items: [
        { label: 'Text Loop', badge: 'New', href: '/docs' },
        { label: 'Masked Heading', href: '/docs' },
        { label: 'Particle Text', badge: 'New', href: '/docs' },
        { label: 'Split Flap Text', badge: 'New', href: '/docs' },
        { label: 'Warp Text', badge: 'New', href: '/docs' },
        { label: 'Stroke Text', href: '/docs' },
      ],
    },
  ];

  return (
    <div className="docs-layout">
      {/* ── Left Sidebar ── */}
      <aside className="docs-sidebar">
        <input
          type="text"
          placeholder="Filter 171 components..."
          value={searchFilter}
          onChange={(e) => setSearchFilter(e.target.value)}
          className="docs-search-input"
        />

        {navSections.map((section) => (
          <div key={section.title} className="docs-nav-group">
            <h4 className="docs-group-title">{section.title}</h4>
            <ul className="docs-nav-list">
              {section.items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`docs-nav-item ${item.active ? 'active' : ''}`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="nav-badge-pill">{item.badge}</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>

      {/* ── Center Content ── */}
      <section className="docs-content">
        <div className="docs-header-bar">
          <h1 className="docs-title">Introduction</h1>
          <button
            onClick={handleCopyMarkdown}
            type="button"
            className="copy-md-btn"
          >
            {copiedMd ? (
              <CheckIcon className="w-3.5 h-3.5" style={{ color: '#34d399' }} />
            ) : (
              <CopyIcon className="w-3.5 h-3.5" />
            )}
            <span>{copiedMd ? 'Copied' : 'Copy as Markdown'}</span>
            <ChevronDownIcon className="w-3 h-3" />
          </button>
        </div>

        <p className="docs-body-text">
          MJML Bits is an open-source collection of expressive email components
          for adding motion, modern aesthetic polish, and bulletproof
          cross-client reliability without adopting a restrictive design system.
        </p>

        <p className="docs-body-text">
          Pick an email component, tune it in the live preview, then copy or
          install the exact variant for your stack. MJML Bits makes email design
          effortless, and works great with AI.
        </p>

        {/* 3 Step Cards */}
        <div className="docs-steps-grid">
          <div className="step-card">
            <div className="step-num">01</div>
            <h3 className="step-title">Choose a component</h3>
            <p className="step-desc">
              Browse by category or search for the exact email block or layout
              you need.
            </p>
          </div>

          <div className="step-card">
            <div className="step-num">02</div>
            <h3 className="step-title">Make it yours</h3>
            <p className="step-desc">
              Tune the preview and send settings, typography, and palette to
              your code.
            </p>
          </div>

          <div className="step-card">
            <div className="step-num">03</div>
            <h3 className="step-title">Add to your project</h3>
            <p className="step-desc">
              Copy the source or install your chosen variant with the MJML
              toolchain.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="docs-quick-links">
          <Link href="/docs" className="btn-primary" style={{ padding: '8px 18px', fontSize: '13px' }}>
            <span>Browse components</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </Link>

          <Link href="/docs" style={{ fontSize: '13.5px', color: 'var(--text-secondary)' }}>
            Installation guide
          </Link>
        </div>

        {/* Mission Section */}
        <div className="docs-mission-section">
          <h2 className="docs-mission-title">Mission</h2>
          <p className="docs-body-text">
            The goal of MJML Bits is simple — provide flexible, visually stunning,
            and most importantly, free components that take responsive email
            templates to the next level.
          </p>

          <p className="docs-body-text">
            To make that happen, the project is committed to the following
            principles:
          </p>

          <ul className="docs-principles-list">
            <li className="principle-item">
              <span className="principle-dot" />
              <div>
                <span className="principle-title">Free For All:</span> You own
                the code, and it&apos;s free to use in your commercial or personal
                campaigns.
              </div>
            </li>
            <li className="principle-item">
              <span className="principle-dot" />
              <div>
                <span className="principle-title">Prop-First Approach:</span>{' '}
                Easy customization through thoughtfully exposed component
                attributes.
              </div>
            </li>
            <li className="principle-item">
              <span className="principle-dot" />
              <div>
                <span className="principle-title">Fully Modular:</span> Install
                strictly what you need, standalone MJML partials with zero
                unnecessary overhead.
              </div>
            </li>
            <li className="principle-item">
              <span className="principle-dot" />
              <div>
                <span className="principle-title">Free Choice:</span> MJML XML,
                React Email, or pre-rendered HTML with inlined styles — the code
                is all here.
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* ── Right Panel: Pro Promo & Sponsors ── */}
      <aside className="docs-right-panel">
        {/* Pro Promo Card */}
        <div className="pro-promo-card">
          <div className="pro-promo-banner">
            <span>MJML Bits</span>
            <span style={{ color: 'var(--purple-300)', marginLeft: '6px' }}>
              Pro
            </span>
          </div>

          <h3 className="pro-promo-title">
            Build the whole product with one library.
          </h3>
          <p className="pro-promo-desc">
            Components, page blocks, application UI, templates and AI skills,
            ready to launch.
          </p>

          <div className="pro-promo-stats">
            134 Components · 238 Blocks
            <br />
            300 Email UI · 11 Templates · 20 Agent Skills
          </div>

          <Link href="/pro" className="btn-pro-full">
            Explore MJML Bits Pro
          </Link>
        </div>

        {/* Sponsors Widget */}
        <div className="sponsors-side-widget">
          <div className="side-widget-header">
            <h4 className="side-widget-title">Sponsors</h4>
            <span className="side-widget-reach">500K+ devs monthly</span>
          </div>

          <div className="side-sponsor-item">
            <div className="side-sponsor-tier">Diamond</div>
            <a
              href="https://shadcnblocks.com"
              target="_blank"
              rel="noreferrer"
              className="side-sponsor-box"
            >
              <div className="cube-shape" style={{ width: '18px', height: '18px' }} />
              <div>
                <div>Shadcnblocks.com</div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 400 }}>
                  2000+ extra Shadcn UI blocks
                </div>
              </div>
            </a>
          </div>

          <div className="side-sponsor-item">
            <div className="side-sponsor-tier">Silver</div>
            <a
              href="https://shadcncraft.com"
              target="_blank"
              rel="noreferrer"
              className="side-sponsor-box"
            >
              <div>shadcncraft</div>
            </a>
          </div>

          <Link href="/sponsors" className="side-sponsor-link">
            <span>Become a sponsor</span>
            <ArrowRightIcon className="w-3 h-3" />
          </Link>
        </div>
      </aside>
    </div>
  );
}
