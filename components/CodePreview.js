'use client';

import { useState } from 'react';
import { ChevronDownIcon, CopyIcon, CheckIcon } from './Icons';

const THEMES = [
  { id: 'nebula', label: 'Nebula', color: '#A855F7' },
  { id: 'aurora', label: 'Aurora', color: '#34D399' },
  { id: 'ember', label: 'Ember', color: '#F97316' },
  { id: 'ice', label: 'Ice', color: '#38BDF8' },
];

export default function CodePreview() {
  const [activeTheme, setActiveTheme] = useState('nebula');
  const [copied, setCopied] = useState(false);

  const currentTheme = THEMES.find((t) => t.id === activeTheme) || THEMES[0];

  const handleCopy = () => {
    const codeString = `import { EmailCard } from '@mjml-bits/card';

function App() {
  return (
    <EmailCard
      color="${currentTheme.color}"
      speed={0.2}
      frequency={1.0}
      noise={0.15}
      bandwidth={0.14}
      rotation={90}
      fadeTop={0.75}
      iterations={1}
      intensity={1.3}
    />
  )
}`;
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-card">
      {/* Window Title Bar */}
      <div className="code-card-header">
        <div className="code-dots">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>

        <div className="code-dropdown">
          <span>EmailCard</span>
          <ChevronDownIcon className="w-3.5 h-3.5" />
        </div>

        <button
          onClick={handleCopy}
          className="icon-btn"
          style={{ width: '28px', height: '28px' }}
          title="Copy code"
          type="button"
          aria-label="Copy code"
        >
          {copied ? <CheckIcon className="w-3.5 h-3.5" style={{ color: '#34d399' }} /> : <CopyIcon className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Code Editor Body */}
      <pre className="code-body">
        <code>
          <span className="syn-kw">import</span> {'{ '}
          <span className="syn-fn">EmailCard</span> {'} '}
          <span className="syn-kw">from</span>{' '}
          <span className="syn-str">&apos;@mjml-bits/card&apos;</span>;{'\n\n'}
          <span className="syn-kw">function</span> <span className="syn-fn">App</span>() {'{\n'}
          {'  '}<span className="syn-kw">return</span> ({'\n'}
          {'    '}&lt;<span className="syn-tag">EmailCard</span>{'\n'}
          {'      '}<span className="syn-prop">color</span>=
          <span className="syn-val-color">
            <span
              className="color-preview-dot"
              style={{ backgroundColor: currentTheme.color }}
            />
            <span className="syn-str">&quot;{currentTheme.color}&quot;</span>
          </span>{'\n'}
          {'      '}<span className="syn-prop">speed</span>=&#123;
          <span className="syn-num">0.2</span>&#125;{'\n'}
          {'      '}<span className="syn-prop">frequency</span>=&#123;
          <span className="syn-num">1.0</span>&#125;{'\n'}
          {'      '}<span className="syn-prop">noise</span>=&#123;
          <span className="syn-num">0.15</span>&#125;{'\n'}
          {'      '}<span className="syn-prop">bandwidth</span>=&#123;
          <span className="syn-num">0.14</span>&#125;{'\n'}
          {'      '}<span className="syn-prop">rotation</span>=&#123;
          <span className="syn-num">90</span>&#125;{'\n'}
          {'      '}<span className="syn-prop">fadeTop</span>=&#123;
          <span className="syn-num">0.75</span>&#125;{'\n'}
          {'      '}<span className="syn-prop">iterations</span>=&#123;
          <span className="syn-num">1</span>&#125;{'\n'}
          {'      '}<span className="syn-prop">intensity</span>=&#123;
          <span className="syn-num">1.3</span>&#125;{'\n'}
          {'    '}/&gt;{'\n'}
          {'  '}){'\n'}
          {'}'}
        </code>
      </pre>

      {/* Footer Tabs */}
      <div className="code-footer">
        <div className="theme-tabs">
          {THEMES.map((theme) => (
            <button
              key={theme.id}
              onClick={() => setActiveTheme(theme.id)}
              className={`theme-tab ${activeTheme === theme.id ? 'active' : ''}`}
              type="button"
            >
              {theme.label}
            </button>
          ))}
        </div>

        <span className="editable-hint">↔ Every value is editable</span>
      </div>
    </div>
  );
}
