import Link from 'next/link';
import { ArrowRightIcon } from './Icons';

export default function Badge({ tag = "NEW COMPONENT", label = "AERO SHARDS", href = "/docs" }) {
  const Content = (
    <div className="badge-pill">
      <span className="badge-tag">{tag}</span>
      <span>{label}</span>
      <ArrowRightIcon className="w-3.5 h-3.5" />
    </div>
  );

  if (href) {
    return <Link href={href}>{Content}</Link>;
  }

  return Content;
}
