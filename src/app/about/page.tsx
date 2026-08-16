import type { Metadata } from 'next';
import { values, howWeWork, quickStats } from '@/lib/data';
import { pageOpenGraph, pageTwitter } from '@/lib/seo';

const TITLE = 'Our Story & How We Work';
const DESCRIPTION =
  'Nozentic is a global software studio founded in 2026, built by engineers and designers who ship accountable, craft-led software.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/about' },
  openGraph: pageOpenGraph(TITLE, DESCRIPTION, '/about'),
  twitter: pageTwitter(TITLE, DESCRIPTION),
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-[1360px] px-5 py-16 sm:px-8 sm:py-20 md:py-24">
        <div className="mb-4 font-mono text-[12.5px] font-bold tracking-wide text-ink/55 dark:text-paper/55">/ ABOUT</div>
        <h1 className="mb-6 max-w-[900px] text-[34px] font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
          Engineers and designers, building an accountable studio for the next decade of software.
        </h1>
        <p className="max-w-[640px] text-[17px] leading-relaxed text-ink/60 dark:text-paper/60">
          Nozentic launched in 2026 to fix a pattern we kept seeing: agencies that design without engineering
          discipline, and dev shops that ship without design taste. We do both, under one roof, with one team owning
          the outcome end to end.
        </p>
      </section>

      <section className="border-t-2 border-ink dark:border-paper">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8">
          <div className="grid border-l-2 border-ink dark:border-paper sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.index} className="border-b-2 border-r-2 border-ink px-6 py-8 dark:border-paper sm:px-8 sm:py-10">
                <div className="mb-3.5 font-mono text-xs text-ink/55 dark:text-paper/55">{v.index}</div>
                <h3 className="mb-2.5 text-xl font-bold tracking-tight">{v.title}</h3>
                <p className="text-sm leading-relaxed text-ink/60 dark:text-paper/60">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-5 py-16 sm:px-8 sm:py-20 md:py-24">
        <h2 className="mb-8 text-3xl font-bold tracking-tight sm:mb-11 sm:text-4xl">How we work</h2>
        <div className="grid gap-px border-2 border-ink bg-ink dark:border-paper dark:bg-paper sm:grid-cols-2 lg:grid-cols-4">
          {howWeWork.map((w) => (
            <div key={w.index} className="bg-paper px-[22px] py-7 dark:bg-ink">
              <div className="mb-3.5 font-mono text-xs text-ink/55 dark:text-paper/55">{w.index}</div>
              <div className="text-base font-bold">{w.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-ink/60 dark:text-paper/60">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t-2 border-ink bg-ink text-paper dark:border-paper">
        <div className="mx-auto grid max-w-[1360px] grid-cols-2 gap-6 px-5 py-12 text-center sm:px-8 sm:py-16 md:grid-cols-4">
          {quickStats.map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-lime sm:text-4xl">{s.value}</div>
              <div className="mt-1.5 font-mono text-[11px] tracking-wide text-paper/70">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
