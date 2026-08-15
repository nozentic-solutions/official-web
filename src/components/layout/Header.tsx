'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import { NozenticMark } from '@/components/NozenticMark';

const NAV = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT' },
  { href: '/services', label: 'SERVICES' },
  { href: '/startups', label: 'STARTUPS' },
  { href: '/contact', label: 'CONTACT' },
];

export default function Header() {
  const pathname = usePathname();
  const { dark, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper transition-colors duration-300 dark:border-paper dark:bg-ink">
      <div className="mx-auto flex max-w-[1360px] items-center justify-between px-5 py-[18px] sm:px-8">
        <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
          <NozenticMark color="currentColor" size={38} className="shrink-0" />
          <span className="flex flex-col leading-none">
            <span className="text-[19px] font-bold tracking-tight sm:text-[22px]">NOZENTIC</span>
            <span className="font-mono text-[8px] font-bold tracking-[0.22em] text-ink/50 dark:text-paper/50 sm:text-[9px]">
              SOLUTIONS
            </span>
          </span>
        </Link>

        <nav className="hidden items-center font-mono text-[12.5px] font-bold tracking-wide md:flex">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`border-l-2 border-ink px-[18px] py-2.5 dark:border-paper ${active ? 'bg-lime text-ink' : ''}`}
              >
                {item.label}
              </Link>
            );
          })}
          <button onClick={toggle} className="border-l-2 border-ink px-4 py-2.5 dark:border-paper">
            {dark ? 'LIGHT' : 'DARK'}
          </button>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <button onClick={toggle} className="border-2 border-ink px-3 py-2 font-mono text-xs font-bold dark:border-paper">
            {dark ? 'LIGHT' : 'DARK'}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            className="border-2 border-ink px-2 py-1 font-mono text-2xl leading-none dark:border-paper"
            aria-label="Toggle menu"
          >
            {open ? '×' : '≡'}
          </button>
        </div>
      </div>

      {open && (
        <div className="flex flex-col border-t-2 border-ink font-mono text-[15px] font-bold dark:border-paper md:hidden">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`border-b border-ink/15 px-6 py-4 dark:border-paper/15 ${active ? 'bg-lime text-ink' : ''}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
