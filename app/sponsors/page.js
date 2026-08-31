import SponsorCard from '@/components/SponsorCard';
import { ArrowRightIcon } from '@/components/Icons';

export const metadata = {
  title: 'Sponsors — MJML Bits',
  description:
    'Your support keeps MJML Bits free and open-source for email developers everywhere.',
};

export default function SponsorsPage() {
  const diamondLogo = (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M12 8L24 4L36 8V20L24 44L12 20V8Z" fill="url(#diamond-grad)" fillOpacity="0.85" />
      <path d="M24 4V44M12 20H36" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.6" />
      <defs>
        <linearGradient id="diamond-grad" x1="12" y1="4" x2="36" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#c084fc" />
          <stop offset="1" stopColor="#7e22ce" />
        </linearGradient>
      </defs>
    </svg>
  );

  const silverLogo = (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="8" y="8" width="10" height="10" rx="2" fill="#cbd5e1" />
      <rect x="22" y="8" width="10" height="10" rx="2" fill="#94a3b8" />
      <rect x="8" y="22" width="10" height="10" rx="2" fill="#64748b" />
      <rect x="22" y="22" width="10" height="10" rx="2" fill="#cbd5e1" />
    </svg>
  );

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
          <ArrowRightIcon className="w-3.5 h-3.5" />
        </a>
      </header>

      <section className="sponsors-grid">
        {/* Diamond Tier */}
        <SponsorCard
          tier="Diamond"
          name="Shadcnblocks.com"
          subtitle="2000+ extra Shadcn UI blocks"
          url="shadcnblocks.com"
          logoSvg={diamondLogo}
        />

        {/* Silver Tier */}
        <SponsorCard
          tier="Silver"
          name="shadcncraft"
          subtitle="shadcn blocks"
          url="shadcncraft.com"
          logoSvg={silverLogo}
        />
      </section>
    </div>
  );
}
