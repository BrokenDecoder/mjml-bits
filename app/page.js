import Link from 'next/link';
import { ArrowRightIcon } from '@/components/Icons';

export default function HomePage() {
  return (
    <section className="hero-section hero-centered">
      <div className="container">
        <div className="hero-content-center">
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
      </div>
    </section>
  );
}
