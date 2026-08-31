'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  CodeIcon,
  CopyIcon,
  CheckIcon,
  HeartIcon,
  ShareIcon,
  ChevronDownIcon,
  ArrowRightIcon,
} from '@/components/Icons';
import { COMPONENTS_CATALOG, COMPONENT_CATEGORIES } from '@/lib/componentsData';
import BalatroShader from '@/components/BalatroShader';
import DarkVeil from '@/components/DarkVeil';
import ComparisonSlider from '@/components/ComparisonSlider';
import FoldText from '@/components/FoldText';

export default function ComponentDetailPage() {
  const params = useParams();
  const slug = params?.slug || 'balatro';

  // Find component or fallback to balatro
  const comp =
    COMPONENTS_CATALOG.find((c) => c.id === slug) ||
    COMPONENTS_CATALOG[0];

  const [activeTab, setActiveTab] = useState('preview'); // 'preview' | 'code'
  const [copiedCode, setCopiedCode] = useState(false);
  const [sidebarFilter, setSidebarFilter] = useState('');

  // Interactive Live Customizer state
  const [color1, setColor1] = useState(comp.defaultProps?.color1 || '#de443b');
  const [color2, setColor2] = useState(comp.defaultProps?.color2 || '#006bb4');
  const [color3, setColor3] = useState(comp.defaultProps?.color3 || '#162325');
  const [pixelation, setPixelation] = useState(comp.defaultProps?.pixelation || 745);
  const [mouseInteraction, setMouseInteraction] = useState(true);
  const [rotate, setRotate] = useState(true);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text || comp.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="docs-layout" style={{ maxWidth: '1520px', padding: '24px 24px 80px' }}>
      {/* ── Left Sidebar (Categorized Real Components Only) ── */}
      <aside className="docs-sidebar">
        <input
          type="text"
          placeholder="Filter components..."
          value={sidebarFilter}
          onChange={(e) => setSidebarFilter(e.target.value)}
          className="docs-search-input"
        />

        {COMPONENT_CATEGORIES.map((group) => {
          const matchingItems = group.items.filter((item) =>
            item.name.toLowerCase().includes(sidebarFilter.toLowerCase())
          );
          if (matchingItems.length === 0 && sidebarFilter) return null;

          return (
            <div key={group.category} className="docs-nav-group">
              <h4 className="docs-group-title">{group.category}</h4>
              <ul className="docs-nav-list">
                {matchingItems.map((item) => {
                  const isSelected = item.id === slug;
                  return (
                    <li key={item.id}>
                      <Link
                        href={`/components/${item.id}`}
                        className={`docs-nav-item ${isSelected ? 'active' : ''}`}
                        style={{
                          color: isSelected ? 'var(--purple-300)' : '',
                          fontWeight: isSelected ? 700 : 500,
                        }}
                      >
                        <span>{item.name}</span>
                        {item.badge && (
                          <span className="nav-badge-pill">{item.badge}</span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </aside>

      {/* ── Center Content (Stage, Controls & Code View) ── */}
      <main className="docs-content">
        {/* Component Header with Title & Action Bar */}
        <div className="comp-detail-header">
          <h1 className="comp-detail-title">{comp.name}</h1>

          <div className="comp-detail-actions">
            {/* View Switcher: Preview / Code */}
            <div className="view-toggle-pill">
              <button
                type="button"
                onClick={() => setActiveTab('preview')}
                className={`view-toggle-btn ${activeTab === 'preview' ? 'active' : ''}`}
              >
                <span>👁 Preview</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('code')}
                className={`view-toggle-btn ${activeTab === 'code' ? 'active' : ''}`}
              >
                <span>&lt;&gt; Code</span>
              </button>
            </div>

            {/* Favorite & Share */}
            <button type="button" className="comp-action-icon-btn" aria-label="Favorite">
              <HeartIcon className="w-4 h-4" />
            </button>
            <button type="button" className="comp-action-icon-btn" aria-label="Share">
              <ShareIcon className="w-4 h-4" />
            </button>

            {/* Copy for AI dropdown */}
            <button
              type="button"
              onClick={() => handleCopy(comp.code)}
              className="copy-ai-btn"
            >
              <span>{copiedCode ? 'Copied!' : 'Copy for AI'}</span>
              <ChevronDownIcon className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Stage / Preview Canvas */}
        {activeTab === 'preview' ? (
          <div className="comp-stage-wrapper">
            <div className="comp-stage-canvas">
              {comp.id === 'balatro' ? (
                <BalatroShader
                  color1={color1}
                  color2={color2}
                  color3={color3}
                  pixelation={pixelation}
                  mouseInteraction={mouseInteraction}
                  rotate={rotate}
                />
              ) : comp.id === 'dark-veil' ? (
                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                  <DarkVeil />
                </div>
              ) : comp.id === 'comparison-slider' ? (
                <div style={{ padding: '30px' }}>
                  <ComparisonSlider />
                </div>
              ) : comp.id === 'fold-text' ? (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                  <FoldText text="Design Unfolds in 3D" fontSize={48} />
                </div>
              ) : (
                <div className="comp-fallback-stage">
                  <span className="comp-preview-text">{comp.name}</span>
                </div>
              )}
            </div>

            {/* Live Customizer Controls Panel */}
            <div className="customizer-panel">
              <div className="customizer-header">
                <span className="customizer-title">Customize</span>
                <Link href="/tools" className="open-bg-studio-link">
                  <span>Open in BG Studio</span>
                  <span>↗</span>
                </Link>
              </div>

              <div className="customizer-grid">
                {/* Color 1 */}
                <div className="customizer-field">
                  <label className="field-label">Color 1</label>
                  <div className="color-picker-box">
                    <input
                      type="color"
                      value={color1}
                      onChange={(e) => setColor1(e.target.value)}
                      className="color-swatch-input"
                    />
                    <span className="color-hex-val">{color1}</span>
                  </div>
                </div>

                {/* Color 3 */}
                <div className="customizer-field">
                  <label className="field-label">Color 3</label>
                  <div className="color-picker-box">
                    <input
                      type="color"
                      value={color3}
                      onChange={(e) => setColor3(e.target.value)}
                      className="color-swatch-input"
                    />
                    <span className="color-hex-val">{color3}</span>
                  </div>
                </div>

                {/* Color 2 */}
                <div className="customizer-field">
                  <label className="field-label">Color 2</label>
                  <div className="color-picker-box">
                    <input
                      type="color"
                      value={color2}
                      onChange={(e) => setColor2(e.target.value)}
                      className="color-swatch-input"
                    />
                    <span className="color-hex-val">{color2}</span>
                  </div>
                </div>

                {/* Pixelation Slider */}
                <div className="customizer-field">
                  <label className="field-label">Pixelation</label>
                  <div className="slider-control-box">
                    <input
                      type="range"
                      min="100"
                      max="1000"
                      value={pixelation}
                      onChange={(e) => setPixelation(Number(e.target.value))}
                      className="range-input"
                    />
                    <span className="slider-num-val">{pixelation}</span>
                  </div>
                </div>

                {/* Toggle: Mouse Interaction */}
                <div className="customizer-field customizer-toggle-field">
                  <label className="field-label">Enable Mouse Interaction</label>
                  <button
                    type="button"
                    onClick={() => setMouseInteraction(!mouseInteraction)}
                    className={`toggle-switch ${mouseInteraction ? 'active' : ''}`}
                  >
                    <span className="toggle-handle" />
                  </button>
                </div>

                {/* Toggle: Rotate */}
                <div className="customizer-field customizer-toggle-field">
                  <label className="field-label">Rotate</label>
                  <button
                    type="button"
                    onClick={() => setRotate(!rotate)}
                    className={`toggle-switch ${rotate ? 'active' : ''}`}
                  >
                    <span className="toggle-handle" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Code View */
          <div className="comp-code-stage">
            <div className="code-stage-header">
              <span className="code-tab-name">Usage &amp; Props</span>
              <button
                onClick={() => handleCopy(comp.code)}
                type="button"
                className="code-copy-btn"
              >
                {copiedCode ? <CheckIcon className="w-3.5 h-3.5" /> : <CopyIcon className="w-3.5 h-3.5" />}
                <span>{copiedCode ? 'Copied' : 'Copy Code'}</span>
              </button>
            </div>
            <pre className="code-block">
              <code>{comp.code}</code>
            </pre>

            <div className="code-stage-header" style={{ marginTop: '24px' }}>
              <span className="code-tab-name">MJML Email Partial</span>
              <button
                onClick={() => handleCopy(comp.mjmlCode)}
                type="button"
                className="code-copy-btn"
              >
                <span>Copy MJML</span>
              </button>
            </div>
            <pre className="code-block">
              <code>{comp.mjmlCode}</code>
            </pre>
          </div>
        )}
      </main>

      {/* ── Right Aside: Pro Promo & Sponsors ── */}
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
  );
}
