'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { label: 'Docs', href: '/docs' },
    { label: 'Tools', href: '/tools' },
    { label: 'Pro', href: '/pro' },
    { label: 'Sponsors', href: '/sponsors' },
  ];

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Brand Logo & Clean Nav Links */}
        <div className="nav-left">
          <Link href="/" className="nav-brand">
            <Image
              src="/logo-white-small.png"
              alt="MJML Bits"
              width={26}
              height={26}
              className="brand-icon"
              priority
            />
            <span>MJML Bits</span>
          </Link>

          <nav className="nav-links">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
