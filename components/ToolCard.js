import Link from 'next/link';
import { ArrowRightIcon } from './Icons';

export default function ToolCard({ title, description, icon: Icon, href = "#" }) {
  return (
    <div className="tool-card">
      <div className="tool-icon-wrapper">
        {Icon && <Icon className="w-8 h-8 tool-icon" />}
      </div>
      <div className="tool-content">
        <h3 className="tool-title">{title}</h3>
        <p className="tool-desc">{description}</p>
        <Link href={href} className="tool-link">
          <span>Open</span>
          <ArrowRightIcon className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
