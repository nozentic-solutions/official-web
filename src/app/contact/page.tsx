import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { LinkedInIcon, XIcon, GitHubIcon, FacebookIcon, InstagramIcon } from '@/components/SocialIcons';
import { contactInfo, socialLinks } from '@/lib/data';
import { pageOpenGraph, pageTwitter } from '@/lib/seo';

const ICONS = { linkedin: LinkedInIcon, x: XIcon, github: GitHubIcon, facebook: FacebookIcon, instagram: InstagramIcon };

const TITLE = 'Contact Us — Start a Project';
const DESCRIPTION =
  'Get in touch with Nozentic. Email info@nozentic.com or send us your project details and we’ll reply within one business day.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: pageOpenGraph(TITLE, DESCRIPTION, '/contact'),
  twitter: pageTwitter(TITLE, DESCRIPTION),
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-[1360px] px-5 py-16 sm:px-8 sm:py-20 md:py-24">
      <div className="mb-4 font-mono text-[12.5px] font-bold tracking-wide text-ink/55 dark:text-paper/55">/ CONTACT</div>
      <h1 className="mb-10 max-w-[800px] text-[34px] font-bold tracking-tight sm:mb-14 sm:text-6xl">
        Tell us about your project.
      </h1>

      <div className="flex flex-wrap gap-px border-2 border-ink bg-ink dark:border-paper dark:bg-paper">
        <div className="min-w-[280px] flex-1 basis-[420px] bg-paper dark:bg-ink">
          <ContactForm />
        </div>
        <div className="flex min-w-[240px] flex-1 basis-[280px] flex-col gap-7 bg-ink p-7 text-paper sm:p-10">
          <div>
            <div className="mb-2 font-mono text-[11px] tracking-wide text-lime">EMAIL US</div>
            <a href={`mailto:${contactInfo.email}`} className="text-lg font-bold">
              {contactInfo.email}
            </a>
          </div>
          <div>
            <div className="mb-2 font-mono text-[11px] tracking-wide text-lime">CALL US</div>
            <a href={`tel:${contactInfo.phoneTel}`} className="text-lg font-bold">
              {contactInfo.phoneDisplay}
            </a>
          </div>
          <div>
            <div className="mb-2 font-mono text-[11px] tracking-wide text-lime">RESPONSE TIME</div>
            <div className="text-[15px] opacity-85">Within 1 business day, global timezone coverage</div>
          </div>
          <div>
            <div className="mb-2 font-mono text-[11px] tracking-wide text-lime">STATUS</div>
            <div className="text-[15px] opacity-85">Currently booking Q4 2026 projects</div>
          </div>
          <div className="mt-auto flex flex-wrap gap-4">
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
    </section>
  );
}
