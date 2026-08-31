'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Sun, Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Docs', href: '/docs' },
    { label: 'Tools', href: '/tools' },
    { label: 'Pro', href: '/pro' },
    { label: 'Sponsors', href: '/sponsors' },
  ];

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Desktop Layout */}
        <div className="nav-desktop">
          <Link href="/" className="nav-brand">
            <Image
              src="/logo-white-small.png"
              alt="MJML Bits"
              width={20}
              height={20}
              className="brand-icon"
              priority
            />
            <span>MJML Bits</span>
          </Link>

          <span className="nav-slash" aria-hidden="true">/</span>

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

        {/* Mobile Floating Pill Navbar */}
        <div className="nav-mobile-pill">
          <Link href="/" className="nav-brand">
            <Image
              src="/logo-white-small.png"
              alt="MJML Bits"
              width={20}
              height={20}
              className="brand-icon"
              priority
            />
            <span>MJML Bits</span>
          </Link>

          <div className="mobile-pill-actions">
            <button className="mobile-icon-btn" aria-label="Toggle theme" type="button">
              <Sun className="w-4 h-4" />
            </button>

            <Link href="/pro" className="mobile-get-pro-btn">
              Get Pro
            </Link>

            <button
              className="mobile-icon-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              type="button"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay">
          <div className="mobile-drawer">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`mobile-drawer-link ${isActive ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
