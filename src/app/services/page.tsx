import type { Metadata } from 'next';
import Link from 'next/link';
import { servicesDetailed } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Services — Web, Software, Apps & Managed IT',
  description:
    'Explore Nozentic\u2019s services: web design & development, custom software, app development, and managed IT (MSP) for global teams.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-[1360px] px-5 py-16 sm:px-8 sm:py-20 md:py-24">
        <div className="mb-4 font-mono text-[12.5px] font-bold tracking-wide text-ink/55 dark:text-paper/55">/ SERVICES</div>
        <h1 className="max-w-[820px] text-[34px] font-bold tracking-tight sm:text-6xl md:text-7xl">
          Four disciplines. One accountable team.
        </h1>
      </section>

      <section className="border-t-2 border-ink dark:border-paper">
        {servicesDetailed.map((svc) => (
          <div
            key={svc.index}
            className="mx-auto flex max-w-[1360px] flex-wrap gap-8 border-b-2 border-ink px-5 py-10 dark:border-paper sm:gap-12 sm:px-8 sm:py-16"
          >
            <div className="w-[120px] shrink-0 font-mono text-[13px] font-bold text-ink/55 dark:text-paper/55">{svc.index}</div>
            <div className="min-w-[260px] flex-1 basis-[320px]">
              <h2 className="mb-3.5 text-2xl font-bold tracking-tight sm:text-[32px]">{svc.title}</h2>
              <p className="max-w-[480px] text-[15.5px] leading-relaxed text-ink/60 dark:text-paper/60">{svc.desc}</p>
            </div>
            <div className="min-w-[220px] flex-1 basis-[260px]">
              {svc.features.map((f) => (
                <div key={f} className="flex items-center gap-2.5 border-b border-ink/15 py-2.5 text-sm dark:border-paper/15">
                  <span className="h-1.5 w-1.5 bg-lime" />
                  {f}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-[1360px] px-5 py-16 text-center sm:px-8 sm:py-20">
        <h2 className="mb-7 text-2xl font-bold tracking-tight sm:text-4xl">Not sure which service fits?</h2>
        <Link href="/contact" className="inline-block bg-ink px-7 py-4 font-mono text-[15px] font-bold text-paper dark:bg-paper dark:text-ink">
          TALK TO US →
        </Link>
      </section>
    </>
  );
}
