'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ChevronDownIcon,
  CopyIcon,
  CheckIcon,
  ArrowRightIcon,
} from '@/components/Icons';
import { docsData } from '@/lib/docsData';

export default function DocViewer({ initialSlug = 'introduction' }) {
  const [currentSlug, setCurrentSlug] = useState(initialSlug);
  const [copiedMd, setCopiedMd] = useState(false);
  const [sidebarFilter, setSidebarFilter] = useState('');
  const [hoveredSlug, setHoveredSlug] = useState(null);

  const doc = docsData[currentSlug] || docsData.introduction;

  const handleCopyMarkdown = () => {
    if (!doc.markdownContent) return;
    navigator.clipboard.writeText(doc.markdownContent);
    setCopiedMd(true);
    setTimeout(() => setCopiedMd(false), 2000);
  };

  const handleNavClick = (e, slug, href) => {
    if (window.history.pushState) {
      window.history.pushState(null, '', href);
    }
    setCurrentSlug(slug);
  };

  const navSections = [
    {
      title: 'Getting Started',
      items: [
        { label: 'Introduction', slug: 'introduction', href: '/docs' },
        { label: 'Installation', slug: 'installation', href: '/docs/installation' },
        { label: 'MJML Compatibility', slug: 'compatibility', href: '/docs/compatibility' },
        { label: 'Email Client Support', slug: 'client-support', href: '/docs/client-support' },
      ],
    },
    {
      title: 'Guides & Architecture',
      items: [
        { label: 'Architecture & Partials', slug: 'architecture', href: '/docs/architecture' },
        { label: 'Custom Styling & Attributes', slug: 'styling', href: '/docs/styling' },
        { label: 'Build & Inlining Pipeline', slug: 'pipeline', href: '/docs/pipeline' },
      ],
    },
  ];

  const filteredNavSections = navSections
    .map((section) => ({
      ...section,
      items: section.items.filter((item) =>
        item.label.toLowerCase().includes(sidebarFilter.toLowerCase())
      ),
    }))
    .filter((section) => section.items.length > 0);

  return (
    <div className="docs-layout">
      {/* ── Left Sidebar ── */}
      <aside className="docs-sidebar">
        <input
          type="text"
          placeholder="Filter documentation..."
          value={sidebarFilter}
          onChange={(e) => setSidebarFilter(e.target.value)}
          className="docs-search-input"
        />

        {filteredNavSections.map((section) => (
          <div key={section.title} className="docs-nav-group">
            <h4 className="docs-group-title">{section.title}</h4>
            <ul
              className="docs-nav-list"
              onMouseLeave={() => setHoveredSlug(null)}
            >
              {section.items.map((item) => {
                const isActive = currentSlug === item.slug;
                const isHovered = hoveredSlug === item.slug;

                return (
                  <li key={item.label} style={{ position: 'relative' }}>
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.slug, item.href)}
                      onMouseEnter={() => setHoveredSlug(item.slug)}
                      className={`docs-nav-item ${isActive ? 'active' : ''}`}
                    >
                      {/* Active Indicator Backdrop */}
                      {isActive && <div className="docs-nav-item-bg" />}

                      {/* Hover Floating Pill */}
                      {!isActive && isHovered && (
                        <div className="docs-nav-item-hover-pill" />
                      )}

                      <span style={{ position: 'relative', zIndex: 2 }}>
                        {item.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </aside>

      {/* ── Center Content ── */}
      <section className="docs-content" key={currentSlug}>
        <div className="docs-header-bar">
          <div>
            <div
              style={{
                fontSize: '12px',
                fontWeight: 600,
                color: 'var(--purple-400)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '6px',
              }}
            >
              {doc.category}
            </div>
            <h1 className="docs-title">{doc.title}</h1>
          </div>

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

        {doc.subtitle && (
          <p
            className="docs-body-text"
            style={{
              fontSize: '18px',
              color: 'var(--text-primary)',
              fontWeight: 500,
            }}
          >
            {doc.subtitle}
          </p>
        )}

        {doc.body &&
          doc.body.map((paragraph, index) => (
            <p key={index} className="docs-body-text">
              {paragraph}
            </p>
          ))}

        {/* 3 Step Workflow / Cards */}
        {doc.steps && doc.steps.length > 0 && (
          <div className="docs-steps-grid">
            {doc.steps.map((step) => (
              <div key={step.num} className="step-card">
                <div className="step-num">{step.num}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* Custom Content Sections / Code Blocks */}
        {doc.sections &&
          doc.sections.map((section, idx) => (
            <div
              key={idx}
              className="docs-mission-section"
              style={{ marginTop: '36px' }}
            >
              <h2 className="docs-mission-title">{section.title}</h2>
              {section.content && (
                <p className="docs-body-text">{section.content}</p>
              )}
              {section.code && (
                <pre
                  style={{
                    background: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '10px',
                    padding: '16px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '13px',
                    color: 'var(--purple-300)',
                    marginBottom: '20px',
                    overflowX: 'auto',
                    lineHeight: '1.6',
                  }}
                >
                  {section.code}
                </pre>
              )}
            </div>
          ))}
      </section>

      {/* ── Right Panel: Pro Promo & Sponsors ── */}
      <aside className="docs-right-panel">
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
              <div>
                <div>Shadcnblocks.com</div>
                <div
                  style={{
                    fontSize: '11px',
                    color: 'var(--text-muted)',
                    fontWeight: 400,
                  }}
                >
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
