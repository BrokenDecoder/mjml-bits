'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import {
  CodeIcon,
  PlayIcon,
  CopyIcon,
  CheckIcon,
  DownloadIcon,
  SmartphoneIcon,
  MonitorIcon,
  RefreshIcon,
  FormatIcon,
} from '@/components/Icons';

function formatXml(xml) {
  let formatted = '';
  let indent = '';
  const tab = '  ';

  // Normalize lines and trim whitespace around tags
  const cleanXml = xml
    .replace(/>\s*</g, '><')
    .replace(/(\r\n|\n|\r)/gm, '')
    .trim();

  // Split by tag boundaries
  const tokens = cleanXml.split(/(<[^>]+>)/g).filter(Boolean);

  tokens.forEach((token) => {
    const isTag = token.startsWith('<');
    const isClosing = isTag && token.startsWith('</');
    const isSelfClosing = isTag && (token.endsWith('/>') || token.startsWith('<!--'));
    const isComment = isTag && token.startsWith('<!--');

    if (isClosing) {
      if (indent.length >= tab.length) {
        indent = indent.substring(tab.length);
      }
      formatted += `${indent}${token}\n`;
    } else if (isTag && !isSelfClosing && !isComment) {
      formatted += `${indent}${token}\n`;
      indent += tab;
    } else if (isTag) {
      formatted += `${indent}${token}\n`;
    } else {
      const text = token.trim();
      if (text) {
        formatted += `${indent}${text}\n`;
      }
    }
  });

  return formatted.trim();
}

const DEFAULT_MJML = `<mjml>
  <mj-head>
    <mj-title>Lucide Icons Email Example</mj-title>
    <mj-font name="Plus Jakarta Sans" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" />
    <mj-attributes>
      <mj-all font-family="Plus Jakarta Sans, Arial, sans-serif" />
      <mj-text font-size="14px" color="#94a3b8" line-height="1.6" />
    </mj-attributes>
  </mj-head>

  <mj-body background-color="#08080c">
    <!-- Brand Banner -->
    <mj-section padding="32px 20px 16px" background-color="#08080c">
      <mj-column>
        <mj-text align="center" font-size="22px" font-weight="800" color="#ffffff" letter-spacing="-0.02em">
          ✦ MJML <span style="color: #c084fc;">Bits</span>
        </mj-text>
      </mj-column>
    </mj-section>

    <!-- Main Hero Card -->
    <mj-section background-color="#121217" border-radius="16px" border="1px solid rgba(168, 85, 247, 0.3)" padding="36px 24px">
      <mj-column width="100%">
        <mj-text align="center" font-size="11px" font-weight="700" color="#c084fc" text-transform="uppercase" letter-spacing="0.1em">
          New Release Announcement
        </mj-text>
        <mj-text align="center" font-size="28px" font-weight="800" color="#ffffff" line-height="1.2" padding="10px 0 14px">
          Supercharge Your Responsive Emails
        </mj-text>
        <mj-text align="center" font-size="15px" color="#cbd5e1" padding="0 10px 24px">
          Craft modern email experiences with modular partials, dark mode compatibility, and zero layout collapse across 40+ email clients.
        </mj-text>
        <mj-button background-color="#9333ea" color="#ffffff" font-size="14px" font-weight="700" border-radius="8px" padding="12px 28px" href="https://github.com">
          Claim Early Access &rarr;
        </mj-button>
      </mj-column>
    </mj-section>

    <!-- 2-Column Feature Grid with Lucide Static Icons -->
    <mj-section background-color="#08080c" padding="20px 0">
      <mj-column width="48%" background-color="#181820" border-radius="12px" border="1px solid rgba(255,255,255,0.08)" padding="20px">
        <mj-image align="left" width="32px" src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/zap.svg" alt="Zap" />
        <mj-text font-size="16px" font-weight="700" color="#ffffff" padding-top="12px">
          Instant Partials
        </mj-text>
        <mj-text font-size="13px" color="#94a3b8" padding-top="6px" line-height="1.5">
          Pre-built headers, cards, pricing tables, and footers ready to drop in.
        </mj-text>
      </mj-column>

      <mj-column width="4%">
        <!-- Spacing column -->
      </mj-column>

      <mj-column width="48%" background-color="#181820" border-radius="12px" border="1px solid rgba(255,255,255,0.08)" padding="20px">
        <mj-image align="left" width="32px" src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/shield-check.svg" alt="Shield" />
        <mj-text font-size="16px" font-weight="700" color="#ffffff" padding-top="12px">
          Client-Proof
        </mj-text>
        <mj-text font-size="13px" color="#94a3b8" padding-top="6px" line-height="1.5">
          Automated VML shapes and ghost tables for Outlook 2016-2021 compatibility.
        </mj-text>
      </mj-column>
    </mj-section>

    <!-- Footer -->
    <mj-section padding="24px 20px" background-color="#08080c">
      <mj-column>
        <mj-text align="center" font-size="12px" color="#64748b">
          Sent with care by MJML Bits • Unsubscribe anytime
        </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>`;

export default function MjmlPreviewStudio() {
  const [mjmlInput, setMjmlInput] = useState(DEFAULT_MJML);
  const [compiledHtml, setCompiledHtml] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [copiedCode, setCopiedCode] = useState(false);
  const [viewMode, setViewMode] = useState('desktop'); // 'desktop' | 'mobile'
  const [activeTab, setActiveTab] = useState('visual'); // 'visual' | 'html'
  const [isFormatted, setIsFormatted] = useState(false);

  const lineCount = useMemo(() => {
    return mjmlInput.split('\n').length;
  }, [mjmlInput]);

  const compileMjml = useCallback(async (codeToCompile) => {
    setIsLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch('/api/mjml-compile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mjml: codeToCompile }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Compilation failed');
      }

      setCompiledHtml(data.html);
    } catch (err) {
      setErrorMsg(err.message || 'Error compiling MJML');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    compileMjml(DEFAULT_MJML);
  }, [compileMjml]);

  const handleCopyHtml = () => {
    if (!compiledHtml) return;
    navigator.clipboard.writeText(compiledHtml);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleDownloadHtml = () => {
    if (!compiledHtml) return;
    const blob = new Blob([compiledHtml], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'mjml-compiled-email.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleFormatCode = () => {
    try {
      const formatted = formatXml(mjmlInput);
      setMjmlInput(formatted);
      compileMjml(formatted);
      setIsFormatted(true);
      setTimeout(() => setIsFormatted(false), 1800);
    } catch {
      // Keep as-is if unparseable
    }
  };

  const handleReset = () => {
    setMjmlInput(DEFAULT_MJML);
    compileMjml(DEFAULT_MJML);
  };

  return (
    <div className="preview-tool-wrapper">
      {/* ── Studio Top Header ── */}
      <header className="preview-tool-header">
        <div className="preview-tool-header-left">
          <Link href="/tools" className="preview-tool-back-link">
            &larr; Tools
          </Link>
          <span className="nav-slash" aria-hidden="true">/</span>
          <h1 className="preview-tool-title">Preview MJML Code</h1>
          <span className="tool-badge-live">LIVE COMPILER</span>
        </div>

        <div className="preview-tool-header-right">
          {/* Viewport switcher */}
          <div className="preview-viewport-toggle">
            <button
              type="button"
              className={`viewport-btn ${viewMode === 'desktop' ? 'active' : ''}`}
              onClick={() => setViewMode('desktop')}
              title="Desktop View (100% width)"
            >
              <MonitorIcon className="w-4 h-4" />
              <span>Desktop</span>
            </button>
            <button
              type="button"
              className={`viewport-btn ${viewMode === 'mobile' ? 'active' : ''}`}
              onClick={() => setViewMode('mobile')}
              title="Mobile View (375px width)"
            >
              <SmartphoneIcon className="w-4 h-4" />
              <span>Mobile (375px)</span>
            </button>
          </div>

          {/* Format / Beautify action */}
          <button
            type="button"
            className="btn-tool-secondary"
            onClick={handleFormatCode}
            title="Auto-format and indent XML code"
          >
            <FormatIcon className="w-3.5 h-3.5" />
            <span>{isFormatted ? 'Formatted!' : 'Format Code'}</span>
          </button>

          {/* Action buttons */}
          <button
            type="button"
            className="btn-tool-secondary"
            onClick={handleReset}
            title="Reset to default code"
          >
            <RefreshIcon className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>

          <button
            type="button"
            className="btn-tool-secondary"
            onClick={handleCopyHtml}
            disabled={!compiledHtml}
          >
            {copiedCode ? (
              <CheckIcon className="w-3.5 h-3.5" style={{ color: '#34d399' }} />
            ) : (
              <CopyIcon className="w-3.5 h-3.5" />
            )}
            <span>{copiedCode ? 'Copied HTML' : 'Copy HTML'}</span>
          </button>

          <button
            type="button"
            className="btn-tool-primary"
            onClick={handleDownloadHtml}
            disabled={!compiledHtml}
          >
            <DownloadIcon className="w-3.5 h-3.5" />
            <span>Export HTML</span>
          </button>
        </div>
      </header>

      {/* ── Studio Split Workspace ── */}
      <main className="preview-tool-workspace">
        {/* Left Column: Code Editor */}
        <section className="preview-editor-panel">
          <div className="panel-top-bar">
            <div className="panel-tag">
              <CodeIcon className="w-3.5 h-3.5" />
              <span>MJML Source (XML)</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                type="button"
                className="btn-tool-mini"
                onClick={handleFormatCode}
                title="Format & Indent XML"
              >
                <FormatIcon className="w-3 h-3" />
                <span>Format</span>
              </button>

              <button
                type="button"
                className="btn-run-compile"
                onClick={() => compileMjml(mjmlInput)}
                disabled={isLoading}
              >
                <PlayIcon className="w-3 h-3" />
                <span>{isLoading ? 'Compiling...' : 'Run / Recompile'}</span>
              </button>
            </div>
          </div>

          <div
            className="editor-textarea-container"
            data-lenis-prevent
            onWheel={(e) => e.stopPropagation()}
          >
            {/* Gutter Line Numbers */}
            <div className="editor-gutter">
              {Array.from({ length: Math.max(lineCount, 1) }).map((_, i) => (
                <div key={i} className="gutter-line-num">
                  {i + 1}
                </div>
              ))}
            </div>

            <textarea
              value={mjmlInput}
              onChange={(e) => {
                setMjmlInput(e.target.value);
                compileMjml(e.target.value);
              }}
              spellCheck={false}
              data-lenis-prevent
              onWheel={(e) => e.stopPropagation()}
              className="editor-textarea"
              placeholder="Paste or write your <mjml> tags here..."
            />
          </div>

          {errorMsg && (
            <div className="editor-error-banner">
              <strong>Compilation Error:</strong> {errorMsg}
            </div>
          )}
        </section>

        {/* Right Column: Live Render / Output */}
        <section className="preview-render-panel">
          <div className="panel-top-bar">
            <div className="render-tabs">
              <button
                type="button"
                className={`render-tab-btn ${activeTab === 'visual' ? 'active' : ''}`}
                onClick={() => setActiveTab('visual')}
              >
                Live Preview
              </button>
              <button
                type="button"
                className={`render-tab-btn ${activeTab === 'html' ? 'active' : ''}`}
                onClick={() => setActiveTab('html')}
              >
                Compiled HTML
              </button>
            </div>

            <span className="render-status-pill">
              {isLoading ? 'Transpiling...' : 'Ready'}
            </span>
          </div>

          <div className="render-viewport-container">
            {activeTab === 'visual' ? (
              <div className={`iframe-holder ${viewMode === 'mobile' ? 'mobile-frame' : 'desktop-frame'}`}>
                {compiledHtml ? (
                  <iframe
                    srcDoc={compiledHtml}
                    title="MJML Live Output"
                    sandbox="allow-same-origin"
                    className="email-live-iframe"
                  />
                ) : (
                  <div className="render-loading-state">
                    <span>Rendering preview...</span>
                  </div>
                )}
              </div>
            ) : (
              <div className="compiled-html-viewer">
                <pre>{compiledHtml || 'No compiled HTML available.'}</pre>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
