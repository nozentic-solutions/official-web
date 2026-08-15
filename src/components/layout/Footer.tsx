import Link from 'next/link';
import { NozenticMark } from '@/components/NozenticMark';
import { LinkedInIcon, XIcon, GitHubIcon, FacebookIcon, InstagramIcon } from '@/components/SocialIcons';
import { contactInfo, socialLinks } from '@/lib/data';

const ICONS = { linkedin: LinkedInIcon, x: XIcon, github: GitHubIcon, facebook: FacebookIcon, instagram: InstagramIcon };

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-ink text-paper dark:border-paper">
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-9 px-5 pb-10 pt-16 sm:px-8 sm:pt-20 md:grid-cols-4 md:gap-14">
        <div className="col-span-full flex flex-wrap items-end justify-between gap-6 border-b border-paper/15 pb-9 sm:pb-12">
          <div className="max-w-[520px]">
            <div className="mb-[14px] text-[26px] font-bold tracking-tight sm:text-4xl">
              Let&apos;s build something that ships.
            </div>
            <p className="text-[15px] leading-relaxed text-paper/65">
              A global software studio designing and engineering web, apps and infrastructure for ambitious teams.
            </p>
          </div>
          <Link href="/contact" className="shrink-0 bg-lime px-7 py-4 font-mono text-[14.5px] font-bold tracking-wide text-ink">
            START A PROJECT →
          </Link>
        </div>

        <div>
          <div className="flex items-center gap-2.5">
            <NozenticMark color="currentColor" size={36} className="shrink-0" />
            <span className="flex flex-col leading-none">
              <span className="text-[19px] font-bold tracking-tight">NOZENTIC</span>
              <span className="font-mono text-[8.5px] font-bold tracking-[0.22em] text-paper/50">SOLUTIONS</span>
            </span>
          </div>
          <div className="mt-[14px] font-mono text-[11px] tracking-wide text-paper/50">EST. 2026 · COLOMBO, SRI LANKA</div>
        </div>

        <div>
          <div className="mb-[18px] font-mono text-[11px] tracking-wide text-paper/55">COMPANY</div>
          <div className="flex flex-col gap-3 text-[14.5px] text-paper/90">
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/startups">For Startups</Link>
          </div>
        </div>

        <div>
          <div className="mb-[18px] font-mono text-[11px] tracking-wide text-paper/55">SERVICES</div>
          <div className="flex flex-col gap-3 text-[14.5px] text-paper/90">
            <span>Web Design</span>
            <span>Custom Software</span>
            <span>App Development</span>
            <span>Managed IT</span>
          </div>
        </div>

        <div className="col-span-full grid grid-cols-1 gap-6 border-t border-paper/15 pt-9 sm:grid-cols-3 sm:pt-10">
          <div>
            <div className="mb-[10px] font-mono text-[11px] tracking-wide text-lime">EMAIL</div>
            <a href={`mailto:${contactInfo.email}`} className="text-[15.5px] font-semibold">
              {contactInfo.email}
            </a>
          </div>
          <div>
            <div className="mb-[10px] font-mono text-[11px] tracking-wide text-lime">PHONE</div>
            <a href={`tel:${contactInfo.phoneTel}`} className="text-[15.5px] font-semibold">
              {contactInfo.phoneDisplay}
            </a>
          </div>
          <div>
            <div className="mb-[10px] font-mono text-[11px] tracking-wide text-lime">FOLLOW</div>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((s) => {
                const Icon = ICONS[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="text-paper/90 hover:text-lime"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1360px] flex-wrap justify-between gap-2 border-t border-paper/15 px-5 py-5 font-mono text-[11.5px] text-paper/55 sm:px-8">
        <span>© 2026 Nozentic. All rights reserved.</span>
        <span>nozentic.com</span>
      </div>
    </footer>
  );
}
