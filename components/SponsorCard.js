import { ArrowRightIcon, DiamondIcon, TrophyIcon } from './Icons';

export default function SponsorCard({
  tier = "Diamond",
  name,
  subtitle,
  url,
  logoSvg,
}) {
  const isDiamond = tier.toLowerCase() === "diamond";

  return (
    <div className="sponsor-block">
      {/* Tier Badge */}
      <div className={`sponsor-tier-badge ${isDiamond ? 'tier-diamond' : 'tier-silver'}`}>
        {isDiamond ? <DiamondIcon className="w-3.5 h-3.5" /> : <TrophyIcon className="w-3.5 h-3.5" />}
        <span>{tier}</span>
      </div>

      {/* Main Sponsor Card */}
      <a
        href={url.startsWith('http') ? url : `https://${url}`}
        target="_blank"
        rel="noreferrer"
        className={`sponsor-card ${isDiamond ? 'sponsor-card-large' : 'sponsor-card-medium'}`}
      >
        <div className="sponsor-card-body">
          <div className="sponsor-logo-box">
            {logoSvg ? (
              logoSvg
            ) : (
              <div className="sponsor-default-logo">
                <div className="cube-shape" />
              </div>
            )}
          </div>
          <div className="sponsor-info">
            <h3 className="sponsor-name">{name}</h3>
            <p className="sponsor-subtitle">{subtitle}</p>
          </div>
        </div>

        <div className="sponsor-card-footer">
          <span>{url}</span>
          <ArrowRightIcon className="w-3.5 h-3.5" />
        </div>
      </a>
    </div>
  );
}
