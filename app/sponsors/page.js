import SponsorCard from '@/components/SponsorCard';
import { ArrowRight, Gem, Boxes } from 'lucide-react';

export const metadata = {
  title: 'Sponsors — MJML Bits',
  description:
    'Your support keeps MJML Bits free and open-source for email developers everywhere.',
};

export default function SponsorsPage() {
  return (
    <div className="container">
      <header className="sponsors-page-header">
        <div>
          <h1 className="page-title">Sponsors</h1>
          <p className="page-subtitle">
            Your support keeps MJML Bits free and open-source for developers everywhere.
          </p>
        </div>

        <a
          href="https://github.com/sponsors/BrokenDecoder"
          target="_blank"
          rel="noreferrer"
          className="btn-primary"
          style={{ padding: '10px 20px', fontSize: '14px' }}
        >
          <span>Become a Sponsor</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </header>

      <section className="sponsors-grid">
        {/* Diamond Tier */}
        <SponsorCard
          tier="Diamond"
          name="Shadcnblocks.com"
          subtitle="2000+ extra Shadcn UI blocks"
          url="shadcnblocks.com"
          logoSvg={<Gem className="w-10 h-10" style={{ color: 'var(--purple-400)' }} />}
        />

        {/* Silver Tier */}
        <SponsorCard
          tier="Silver"
          name="shadcncraft"
          subtitle="shadcn blocks"
          url="shadcncraft.com"
          logoSvg={<Boxes className="w-8 h-8" style={{ color: '#cbd5e1' }} />}
        />
      </section>
    </div>
  );
}
