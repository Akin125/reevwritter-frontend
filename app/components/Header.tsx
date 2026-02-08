'use client';

import Link from 'next/link';
import { useState } from 'react';

interface HeaderProps {
  variant?: 'default' | 'minimal';
  showAuthButtons?: boolean;
  currentPage?: string;
}

export default function Header({
  variant = 'default',
  showAuthButtons = true,
  currentPage = ''
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/#features', label: 'Features', external: false },
    { href: '/pricing', label: 'Pricing', external: false },
    { href: '/user-guide', label: 'User Guide', external: false },
    { href: '/blog', label: 'Blog', external: false },
    { href: '/contact', label: 'Contact', external: false },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-lg px-3 sm:px-4 md:px-6 py-3 sm:py-4 dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 sm:gap-4">
        {/* Logo - Responsive sizing */}
        <Link href="/" className="flex-shrink-0">
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-zinc-900 dark:text-zinc-50 cursor-pointer hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">
            <span className="hidden sm:inline">Thesiora Writer</span>
            <span className="sm:hidden">Thesiora</span>
          </h1>
        </Link>

        {/* Desktop/Tablet Navigation - Hidden on mobile, visible on tablet and up */}
        <nav className="hidden md:flex gap-3 lg:gap-6 items-center flex-wrap">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs lg:text-sm font-medium transition-colors whitespace-nowrap ${
                currentPage === link.href
                  ? 'text-zinc-900 dark:text-zinc-50'
                  : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          {showAuthButtons && (
            <>
              <Link
                href="/login"
                className="text-xs lg:text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 whitespace-nowrap"
              >
                Login
              </Link>
              <Link
                href="/dashboard"
                className="rounded-full bg-zinc-900 px-4 lg:px-6 py-1.5 lg:py-2 text-xs lg:text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 whitespace-nowrap"
              >
                Get Started
              </Link>
            </>
          )}
        </nav>

        {/* Tablet/Mobile Menu Controls */}
        <div className="flex items-center gap-2 sm:gap-3 md:hidden">
          {showAuthButtons && (
            <Link
              href="/dashboard"
              className="rounded-full bg-zinc-900 px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-medium text-white dark:bg-zinc-50 dark:text-zinc-900 whitespace-nowrap"
            >
              <span className="hidden xs:inline">Get Started</span>
              <span className="xs:hidden">Start</span>
            </Link>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors touch-manipulation"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu Dropdown - Responsive spacing and touch targets */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 sm:mt-4 pb-3 sm:pb-4 border-t border-zinc-200 dark:border-zinc-800 pt-3 sm:pt-4 animate-fadeIn">
          <nav className="flex flex-col gap-1 max-w-7xl mx-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2 py-2.5 sm:py-3 text-sm sm:text-base font-medium transition-colors rounded-lg touch-manipulation ${
                  currentPage === link.href
                    ? 'text-zinc-900 dark:text-zinc-50 bg-zinc-100 dark:bg-zinc-800'
                    : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 hover:bg-zinc-50 dark:hover:bg-zinc-900'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {showAuthButtons && (
              <>
                <Link
                  href="/login"
                  className="px-2 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 hover:bg-zinc-50 dark:hover:bg-zinc-900 rounded-lg transition-colors touch-manipulation"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/dashboard"
                  className="mt-2 px-2 py-2.5 sm:py-3 text-sm sm:text-base font-medium bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-200 rounded-lg transition-colors text-center touch-manipulation"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

