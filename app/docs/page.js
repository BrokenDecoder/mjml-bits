'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  ChevronDownIcon,
  CopyIcon,
  CheckIcon,
  ArrowRightIcon,
  SearchIcon,
} from '@/components/Icons';

const COMPONENTS_DATA = [
  {
    id: 'aero-shards',
    name: 'Aero Shards',
    category: 'BACKGROUNDS',
    badge: 'NEW',
    previewType: 'gradient-dark',
    accentColor: '#818cf8',
  },
  {
    id: 'depth-carousel',
    name: 'Depth Carousel',
    category: 'COMPONENTS',
    badge: 'NEW',
    previewType: 'cards-stack',
    accentColor: '#a855f7',
  },
  {
    id: 'depth-text',
    name: 'Depth Text',
    category: 'TEXT ANIMATIONS',
    badge: 'NEW',
    previewType: 'text-3d',
    previewText: 'Elevate',
    accentColor: '#c084fc',
  },
  {
    id: 'drift-wall',
    name: 'Drift Wall',
    category: 'COMPONENTS',
    badge: 'NEW',
    previewType: 'masonry',
    accentColor: '#e879f9',
  },
  {
    id: 'ghost-fibers',
    name: 'Ghost Fibers',
    category: 'BACKGROUNDS',
    badge: 'NEW',
    previewType: 'fibers',
    accentColor: '#60a5fa',
  },
  {
    id: 'glow-cursor',
    name: 'Glow Cursor',
    category: 'ANIMATIONS',
    badge: 'NEW',
    previewType: 'cursor-trail',
    accentColor: '#38bdf8',
  },
  {
    id: 'dark-veil',
    name: 'Dark Veil',
    category: 'BACKGROUNDS',
    badge: 'NEW',
    previewType: 'veil',
    accentColor: '#9333ea',
  },
  {
    id: 'matrix-cards',
    name: 'Matrix Cards',
    category: 'COMPONENTS',
    badge: 'NEW',
    previewType: 'cards-floating',
    accentColor: '#a855f7',
  },
  {
    id: 'star-burst',
    name: 'Star Burst',
    category: 'ANIMATIONS',
    badge: 'NEW',
    previewType: 'sparks',
    accentColor: '#f472b6',
  },
  {
    id: 'comparison-slider',
    name: 'Comparison Slider',
    category: 'COMPONENTS',
    badge: 'PRO',
    previewType: 'slider',
    accentColor: '#c084fc',
  },
  {
    id: 'fold-text',
    name: 'Fold Text',
    category: 'TEXT ANIMATIONS',
    badge: 'NEW',
    previewType: 'text-3d',
    previewText: 'Fold 3D',
    accentColor: '#e879f9',
  },
  {
    id: 'color-bends',
    name: 'Color Bends',
    category: 'BACKGROUNDS',
    badge: 'NEW',
    previewType: 'veil',
    accentColor: '#818cf8',
  },
];

export default function DocsPage() {
  const [copiedMd, setCopiedMd] = useState(false);
  const [sidebarFilter, setSidebarFilter] = useState('');
  const [componentSearch, setComponentSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeTab, setActiveTab] = useState('components'); // 'introduction' | 'components'

  const handleCopyMarkdown = () => {
    const md = `# MJML Bits — Introduction\n\nMJML Bits is an open-source collection of expressive email UI components for adding modern aesthetics and bulletproof responsiveness.\n`;
    navigator.clipboard.writeText(md);
    setCopiedMd(true);
    setTimeout(() => setCopiedMd(false), 2000);
  };

  const navSections = [
    {
      title: 'Get Started',
      items: [
        { label: 'Introduction', active: activeTab === 'introduction', onClick: () => setActiveTab('introduction') },
        { label: 'Components', active: activeTab === 'components', onClick: () => setActiveTab('components') },
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

  const filteredComponents = useMemo(() => {
    return COMPONENTS_DATA.filter((comp) => {
      const matchesSearch =
        comp.name.toLowerCase().includes(componentSearch.toLowerCase()) ||
        comp.category.toLowerCase().includes(componentSearch.toLowerCase());
      const matchesCategory =
        selectedCategory === 'All' ||
        comp.category.toLowerCase() === selectedCategory.toLowerCase();
      return matchesSearch && matchesCategory;
    });
  }, [componentSearch, selectedCategory]);

  return (
    <div className="docs-layout">
      {/* ── Left Sidebar ── */}
      <aside className="docs-sidebar">
        <input
          type="text"
          placeholder="Filter 171 components..."
          value={sidebarFilter}
          onChange={(e) => setSidebarFilter(e.target.value)}
          className="docs-search-input"
        />

        {navSections.map((section) => (
          <div key={section.title} className="docs-nav-group">
            <h4 className="docs-group-title">{section.title}</h4>
            <ul className="docs-nav-list">
              {section.items.map((item) => (
                <li key={item.label}>
                  {item.onClick ? (
                    <button
                      type="button"
                      onClick={item.onClick}
                      className={`docs-nav-item ${item.active ? 'active' : ''}`}
                      style={{ width: '100%', textAlign: 'left' }}
                    >
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="nav-badge-pill">{item.badge}</span>
                      )}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`docs-nav-item ${item.active ? 'active' : ''}`}
                    >
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="nav-badge-pill">{item.badge}</span>
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>

      {/* ── Center Content: Browse All Components Section ── */}
      <section className="docs-content">
        {activeTab === 'components' ? (
          <div className="browse-all-container">
            {/* Header with Title and Search/Filters */}
            <div className="browse-all-header">
              <h1 className="browse-all-title">Browse All</h1>

              <div className="browse-controls">
                <div className="browse-search-box">
                  <SearchIcon className="w-4 h-4 search-icon" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={componentSearch}
                    onChange={(e) => setComponentSearch(e.target.value)}
                    className="browse-search-input"
                  />
                </div>

                <div className="browse-select-box">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="browse-select"
                  >
                    <option value="All">All Components</option>
                    <option value="COMPONENTS">Components</option>
                    <option value="BACKGROUNDS">Backgrounds</option>
                    <option value="TEXT ANIMATIONS">Text Animations</option>
                    <option value="ANIMATIONS">Animations</option>
                  </select>
                  <ChevronDownIcon className="w-3.5 h-3.5 select-arrow" />
                </div>
              </div>
            </div>

            {/* 3-Column Component Grid matching Reference */}
            <div className="component-cards-grid">
              {filteredComponents.map((item) => (
                <div key={item.id} className="comp-grid-card">
                  {/* Card Preview Window */}
                  <div className="comp-preview-viewport">
                    {item.badge && (
                      <span className="comp-card-badge">{item.badge}</span>
                    )}

                    {/* Interactive Mock Preview */}
                    <div className="comp-preview-graphic">
                      {item.previewType === 'text-3d' && (
                        <span
                          className="comp-preview-text"
                          style={{
                            color: '#ffffff',
                            textShadow: `0 0 20px ${item.accentColor}, 0 0 40px ${item.accentColor}`,
                          }}
                        >
                          {item.previewText || item.name}
                        </span>
                      )}

                      {item.previewType === 'veil' && (
                        <div
                          className="comp-preview-veil"
                          style={{
                            background: `radial-gradient(ellipse at 50% 50%, ${item.accentColor}44 0%, #0a0a0f 75%)`,
                          }}
                        />
                      )}

                      {item.previewType === 'fibers' && (
                        <div
                          className="comp-preview-fibers"
                          style={{
                            background: `radial-gradient(circle at 60% 40%, ${item.accentColor}55 0%, transparent 60%), linear-gradient(135deg, #09090e 0%, #15102a 100%)`,
                          }}
                        />
                      )}

                      {item.previewType === 'cursor-trail' && (
                        <div className="comp-preview-cursor-line">
                          <svg viewBox="0 0 200 80" className="cursor-svg">
                            <path
                              d="M 20 60 Q 90 0 170 30"
                              fill="none"
                              stroke={item.accentColor}
                              strokeWidth="3"
                              strokeLinecap="round"
                              style={{ filter: `drop-shadow(0 0 8px ${item.accentColor})` }}
                            />
                          </svg>
                          <span className="cursor-subtext">Move Your Cursor</span>
                        </div>
                      )}

                      {item.previewType === 'cards-stack' && (
                        <div className="comp-preview-stack">
                          <div className="stack-card card-back-2" />
                          <div className="stack-card card-back-1" />
                          <div className="stack-card card-front" />
                        </div>
                      )}

                      {item.previewType === 'masonry' && (
                        <div className="comp-preview-masonry">
                          <div className="masonry-tile tile-1" />
                          <div className="masonry-tile tile-2" />
                          <div className="masonry-tile tile-3" />
                        </div>
                      )}

                      {item.previewType === 'cards-floating' && (
                        <div className="comp-preview-stack">
                          <div className="stack-card card-front" style={{ transform: 'rotate(5deg)' }} />
                          <div className="stack-card card-back-1" style={{ transform: 'rotate(-8deg)' }} />
                        </div>
                      )}

                      {item.previewType === 'sparks' && (
                        <div
                          className="comp-preview-veil"
                          style={{
                            background: `radial-gradient(circle at center, ${item.accentColor}44 0%, transparent 70%)`,
                          }}
                        />
                      )}

                      {item.previewType === 'gradient-dark' && (
                        <div className="comp-preview-dark-gradient" />
                      )}

                      {item.previewType === 'slider' && (
                        <div className="comp-preview-slider-mock">
                          <div className="slider-mock-divider" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Metadata Footer */}
                  <div className="comp-card-meta">
                    <h3 className="comp-name">{item.name}</h3>
                    <span className="comp-category">{item.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Introduction View */
          <div>
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

            <div className="docs-steps-grid">
              <div className="step-card">
                <div className="step-num">01</div>
                <h3 className="step-title">Choose a component</h3>
                <p className="step-desc">
                  Browse by category or search for the exact email block or layout you need.
                </p>
              </div>
              <div className="step-card">
                <div className="step-num">02</div>
                <h3 className="step-title">Make it yours</h3>
                <p className="step-desc">
                  Tune the preview and send settings, typography, and palette to your code.
                </p>
              </div>
              <div className="step-card">
                <div className="step-num">03</div>
                <h3 className="step-title">Add to your project</h3>
                <p className="step-desc">
                  Copy the source or install your chosen variant with the MJML toolchain.
                </p>
              </div>
            </div>

            <div className="docs-quick-links">
              <button
                onClick={() => setActiveTab('components')}
                className="btn-primary"
                style={{ padding: '8px 18px', fontSize: '13px' }}
              >
                <span>Browse components</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
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
