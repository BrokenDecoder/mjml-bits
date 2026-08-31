'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  ChevronDownIcon,
  SearchIcon,
  ArrowRightIcon,
} from '@/components/Icons';
import { COMPONENTS_CATALOG, COMPONENT_CATEGORIES } from '@/lib/componentsData';

export default function ComponentsGallerySection() {
  const [componentSearch, setComponentSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredComponents = useMemo(() => {
    return COMPONENTS_CATALOG.filter((comp) => {
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
    <section className="components-gallery-section" style={{ padding: '24px 24px 120px', position: 'relative', zIndex: 2 }}>
      <div className="container" style={{ maxWidth: '1440px' }}>
        <div className="docs-layout" style={{ padding: 0 }}>
          {/* ── Left Sidebar (Pure Component Categories & Filter) ── */}
          <aside className="docs-sidebar">
            <input
              type="text"
              placeholder="Filter components..."
              value={componentSearch}
              onChange={(e) => setComponentSearch(e.target.value)}
              className="docs-search-input"
            />

            {COMPONENT_CATEGORIES.map((group) => {
              const matchingItems = group.items.filter((item) =>
                item.name.toLowerCase().includes(componentSearch.toLowerCase())
              );
              if (matchingItems.length === 0 && componentSearch) return null;

              return (
                <div key={group.category} className="docs-nav-group">
                  <h4 className="docs-group-title">{group.category}</h4>
                  <ul className="docs-nav-list">
                    {matchingItems.map((item) => (
                      <li key={item.id}>
                        <Link
                          href={`/components/${item.id}`}
                          className="docs-nav-item"
                        >
                          <span>{item.name}</span>
                          {item.badge && (
                            <span className="nav-badge-pill">{item.badge}</span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </aside>

          {/* ── Center Content: Browse All Component Cards ── */}
          <div className="docs-content">
            <div className="browse-all-container">
              {/* Header with Title and Search/Filters */}
              <div className="browse-all-header">
                <h2 className="browse-all-title">Browse All</h2>

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
                      <option value="BACKGROUNDS">Backgrounds</option>
                      <option value="COMPONENTS">Components</option>
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
                  <Link
                    key={item.id}
                    href={`/components/${item.id}`}
                    className="comp-grid-card"
                  >
                    {/* Card Preview Window */}
                    <div className="comp-preview-viewport">
                      {item.badge && (
                        <span className="comp-card-badge">{item.badge}</span>
                      )}

                      {/* Interactive Mock Preview */}
                      <div className="comp-preview-graphic">
                        {item.previewType === 'shader' && (
                          <div
                            className="comp-preview-veil"
                            style={{
                              background: 'radial-gradient(ellipse at 50% 50%, #de443b88 0%, #006bb455 50%, #0a0a0f 80%)',
                            }}
                          />
                        )}

                        {item.id === 'depth-text' && (
                          <span
                            className="comp-preview-text"
                            style={{
                              color: '#ffffff',
                              textShadow: '0 0 20px #c084fc, 0 0 40px #c084fc',
                            }}
                          >
                            Elevate
                          </span>
                        )}

                        {item.id === 'fold-text' && (
                          <span
                            className="comp-preview-text"
                            style={{
                              color: '#ffffff',
                              textShadow: '0 0 20px #e879f9, 0 0 40px #e879f9',
                            }}
                          >
                            Fold 3D
                          </span>
                        )}

                        {item.id === 'dark-veil' && (
                          <div
                            className="comp-preview-veil"
                            style={{
                              background: 'radial-gradient(ellipse at 50% 50%, rgba(168, 85, 247, 0.4) 0%, #0a0a0f 75%)',
                            }}
                          />
                        )}

                        {item.id === 'ghost-fibers' && (
                          <div
                            className="comp-preview-fibers"
                            style={{
                              background: 'radial-gradient(circle at 60% 40%, rgba(96, 165, 250, 0.5) 0%, transparent 60%), linear-gradient(135deg, #09090e 0%, #15102a 100%)',
                            }}
                          />
                        )}

                        {item.id === 'glow-cursor' && (
                          <div className="comp-preview-cursor-line">
                            <svg viewBox="0 0 200 80" className="cursor-svg">
                              <path
                                d="M 20 60 Q 90 0 170 30"
                                fill="none"
                                stroke="#38bdf8"
                                strokeWidth="3"
                                strokeLinecap="round"
                                style={{ filter: 'drop-shadow(0 0 8px #38bdf8)' }}
                              />
                            </svg>
                            <span className="cursor-subtext">Move Your Cursor</span>
                          </div>
                        )}

                        {item.id === 'depth-carousel' && (
                          <div className="comp-preview-stack">
                            <div className="stack-card card-back-2" />
                            <div className="stack-card card-back-1" />
                            <div className="stack-card card-front" />
                          </div>
                        )}

                        {item.id === 'drift-wall' && (
                          <div className="comp-preview-masonry">
                            <div className="masonry-tile tile-1" />
                            <div className="masonry-tile tile-2" />
                            <div className="masonry-tile tile-3" />
                          </div>
                        )}

                        {item.id === 'matrix-cards' && (
                          <div className="comp-preview-stack">
                            <div className="stack-card card-front" style={{ transform: 'rotate(5deg)' }} />
                            <div className="stack-card card-back-1" style={{ transform: 'rotate(-8deg)' }} />
                          </div>
                        )}

                        {item.id === 'star-burst' && (
                          <div
                            className="comp-preview-veil"
                            style={{
                              background: 'radial-gradient(circle at center, rgba(244, 114, 182, 0.4) 0%, transparent 70%)',
                            }}
                          />
                        )}

                        {item.id === 'aero-shards' && (
                          <div className="comp-preview-dark-gradient" />
                        )}

                        {item.id === 'color-bends' && (
                          <div
                            className="comp-preview-veil"
                            style={{
                              background: 'radial-gradient(ellipse at 50% 50%, rgba(129, 140, 248, 0.45) 0%, #0a0a0f 75%)',
                            }}
                          />
                        )}

                        {item.id === 'comparison-slider' && (
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
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right Panel: Pro Promo & Sponsors ── */}
          <aside className="docs-right-panel">
            <div className="pro-promo-card">
              <div className="pro-promo-banner">
                <span>MJML Bits</span>
                <span style={{ color: 'var(--purple-300)', marginLeft: '6px' }}>Pro</span>
              </div>

              <h3 className="pro-promo-title">Build the whole product with one library.</h3>
              <p className="pro-promo-desc">
                Components, page blocks, application UI, templates and AI skills, ready to launch.
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
      </div>
    </section>
  );
}
