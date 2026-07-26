import type { Metadata } from 'next';
import Link from 'next/link';
import { startupTiers, sprintSteps } from '@/lib/data';

export const metadata: Metadata = {
  title: 'For Startups — MVP Sprints & Startup Packages',
  description:
    'Fixed-scope MVP sprints for early-stage teams. Launch a working product in weeks with Nozentic\u2019s startup packages.',
  alternates: { canonical: '/startups' },
};

export default function StartupsPage() {
  return (
    <>
      <section className="bg-ink text-paper dark:bg-paper dark:text-ink">
        <div className="mx-auto max-w-[1360px] px-5 py-16 sm:px-8 sm:py-20 md:py-24">
          <div className="mb-4 font-mono text-[12.5px] font-bold tracking-wide text-lime">/ FOR STARTUPS</div>
          <h1 className="mb-5 max-w-[840px] text-[34px] font-bold tracking-tight sm:text-6xl md:text-7xl">
            Launch fast. Scale without rebuilding.
          </h1>
          <p className="max-w-[560px] text-[16.5px] leading-relaxed opacity-75">
            Fixed-scope MVP sprints for early-stage teams — real engineers, a working product in weeks, and a clear
            path to your next raise.
          </p>
        </div>
      </section>

      <section className="grid border-t-2 border-ink dark:border-paper sm:grid-cols-3">
        {startupTiers.map((tier) => (
          <div
            key={tier.name}
            className={`flex flex-col border-b-2 border-r-2 border-ink px-6 py-9 dark:border-paper sm:px-8 sm:py-11 ${
              tier.highlight ? 'bg-lime text-ink' : ''
            }`}
          >
            <div className="mb-3.5 font-mono text-xs font-bold tracking-wide">{tier.tag}</div>
            <h3 className="mb-2 text-2xl font-bold">{tier.name}</h3>
            <div className="mb-[22px] text-[15px] opacity-75">{tier.timeline}</div>
            <div className="flex-1">
              {tier.features.map((f) => (
                <div key={f} className="flex gap-2.5 border-t border-current/20 py-2.5 text-sm">
                  <span>—</span>
                  {f}
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className={`mt-6 inline-block px-5 py-3.5 text-center font-mono text-sm font-bold ${
                tier.highlight ? 'bg-ink text-paper' : 'bg-ink text-paper dark:bg-paper dark:text-ink'
              }`}
            >
              GET STARTED →
            </Link>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-[1360px] px-5 py-16 sm:px-8 sm:py-20 md:py-24">
        <h2 className="mb-8 text-2xl font-bold tracking-tight sm:mb-11 sm:text-4xl">How the sprint works</h2>
        <div className="grid gap-px border-2 border-ink bg-ink dark:border-paper dark:bg-paper sm:grid-cols-2 lg:grid-cols-4">
          {sprintSteps.map((st) => (
            <div key={st.index} className="bg-paper px-5 py-6 dark:bg-ink">
              <div className="mb-2.5 font-mono text-xs text-ink/55 dark:text-paper/55">{st.index}</div>
              <div className="mb-2 text-base font-bold">{st.title}</div>
              <div className="text-[13.5px] leading-relaxed text-ink/60 dark:text-paper/60">{st.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
