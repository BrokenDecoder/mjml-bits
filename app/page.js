import Link from 'next/link';
import Badge from '@/components/Badge';
import CodePreview from '@/components/CodePreview';
import { ArrowRightIcon, GitHubIcon } from '@/components/Icons';

export default function HomePage() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Hero Copy & Actions */}
          <div className="hero-left">
            <Badge tag="NEW COMPONENT" label="AERO SHARDS" href="/docs" />

            <h1 className="hero-title">
              MJML components for{' '}
              <span className="text-gradient">creative emails</span>
            </h1>

            <p className="hero-desc">
              Highly customizable email components &amp; backgrounds that drop
              into your project and instantly make it stand out
            </p>

            <div className="hero-actions">
              <Link href="/docs" className="btn-primary">
                <span>Browse Components</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>

              <a
                href="https://github.com/BrokenDecoder/mjml-bits"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>Star on GitHub</span>
                <span style={{ color: 'var(--text-muted)' }}>46.6K</span>
              </a>
            </div>

            <div className="hero-stats">
              170+ COMPONENTS &nbsp;·&nbsp; FREE FOREVER
            </div>
          </div>

          {/* Right Column: Interactive Code Preview */}
          <div className="hero-right">
            <CodePreview />
          </div>
        </div>
      </div>
    </section>
  );
}
