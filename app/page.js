import Link from 'next/link';
import CodePreview from '@/components/CodePreview';
import { ArrowRightIcon } from '@/components/Icons';

export default function HomePage() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Hero Copy & Actions */}
          <div className="hero-left">
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
