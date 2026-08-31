'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  GitHubIcon,
  SearchIcon,
  FilterIcon,
  SunIcon,
} from './Icons';

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
        {/* Left: Brand Logo + Nav Links */}
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
          <span className="nav-slash">/</span>
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

        {/* Right: Search, Actions, GitHub, CTA */}
        <div className="nav-right">
          <button className="search-button" type="button" aria-label="Search components">
            <SearchIcon className="w-3.5 h-3.5" />
            <span>Search...</span>
            <span className="search-kbd">⌘ /</span>
          </button>

          <button className="icon-btn" type="button" aria-label="Filter settings">
            <FilterIcon className="w-4 h-4" />
          </button>

          <button className="icon-btn" type="button" aria-label="Toggle theme">
            <SunIcon className="w-4 h-4" />
          </button>

          <a
            href="https://github.com/BrokenDecoder/mjml-bits"
            target="_blank"
            rel="noreferrer"
            className="github-badge"
            aria-label="GitHub Repository"
          >
            <GitHubIcon className="w-4 h-4" />
            <span>46.6K</span>
          </a>

          <Link href="/pro" className="btn-pro">
            Get MJML Bits Pro
          </Link>
        </div>
      </div>
    </header>
  );
}
