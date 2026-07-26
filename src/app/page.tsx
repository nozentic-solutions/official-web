import type { Metadata } from 'next';
import Link from 'next/link';
import { quickStats, services, reachStats, regions, testimonials } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Nozentic — Global Software Studio',
  description:
    'Web design, custom software, app development and managed IT services for teams across 30+ countries. Founded 2026.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative mx-auto max-w-[1360px] overflow-hidden px-5 pt-14 sm:px-8 sm:pt-20 md:pt-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(10,10,10,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(10,10,10,.08) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        <div className="relative mb-6 flex flex-wrap gap-3 font-mono text-[11px] font-bold tracking-wide sm:mb-8 sm:gap-6 sm:text-[13px]">
          <span>(01) WEB</span><span>(02) SOFTWARE</span><span>(03) APPS</span><span>(04) MSP</span>
        </div>
        <h1 className="relative text-[42px] font-bold leading-[.94] tracking-tighter sm:text-7xl md:text-8xl lg:text-[118px]">
          SOFTWARE<br />WITHOUT<br />
          <span className="inline-block bg-lime px-2.5 text-ink">BORDERS.</span>
        </h1>
        <p className="relative mt-7 max-w-[600px] text-[15px] leading-relaxed text-ink/60 dark:text-paper/60 sm:mt-9 sm:text-lg">
          Nozentic is a global product studio — we design, build and run web platforms, custom software, mobile apps
          and managed IT infrastructure for teams on every continent.
        </p>
        <div className="relative mt-8 flex flex-wrap gap-4 sm:mt-10">
          <Link href="/contact" className="bg-ink px-7 py-4 font-mono text-[15px] font-bold text-paper dark:bg-paper dark:text-ink">
            START A PROJECT →
          </Link>
          <Link href="/services" className="border-2 border-ink px-7 py-4 font-mono text-[15px] font-bold dark:border-paper">
            EXPLORE SERVICES
          </Link>
        </div>
        <div className="relative mt-10 flex h-[52px] items-center overflow-hidden border-y-2 border-ink dark:border-paper sm:mt-14">
          <div className="marquee-track flex whitespace-nowrap font-mono text-[13px] font-bold tracking-wide">
            <span>EST. 2026&nbsp;&nbsp;•&nbsp;&nbsp;GLOBAL DELIVERY&nbsp;&nbsp;•&nbsp;&nbsp;WEB DESIGN&nbsp;&nbsp;•&nbsp;&nbsp;CUSTOM SOFTWARE&nbsp;&nbsp;•&nbsp;&nbsp;APP DEVELOPMENT&nbsp;&nbsp;•&nbsp;&nbsp;MANAGED IT&nbsp;&nbsp;•&nbsp;&nbsp;</span>
            <span>EST. 2026&nbsp;&nbsp;•&nbsp;&nbsp;GLOBAL DELIVERY&nbsp;&nbsp;•&nbsp;&nbsp;WEB DESIGN&nbsp;&nbsp;•&nbsp;&nbsp;CUSTOM SOFTWARE&nbsp;&nbsp;•&nbsp;&nbsp;APP DEVELOPMENT&nbsp;&nbsp;•&nbsp;&nbsp;MANAGED IT&nbsp;&nbsp;•&nbsp;&nbsp;</span>
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="mx-auto flex max-w-[1360px] flex-wrap gap-10 px-5 py-16 sm:px-8 sm:py-20 md:py-24">
        <div className="min-w-[280px] flex-1 basis-[420px]">
          <div className="mb-4 font-mono text-[12.5px] font-bold tracking-wide text-ink/55 dark:text-paper/55">/ ABOUT NOZENTIC</div>
          <h2 className="mb-5 text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl md:text-[44px]">
            A young studio built by engineers who&apos;ve shipped at scale — now shipping for you.
          </h2>
          <p className="mb-6 max-w-[520px] text-[16px] leading-relaxed text-ink/60 dark:text-paper/60">
            Founded in 2026, Nozentic partners with startups and enterprises to design interfaces, engineer software,
            ship apps and run the infrastructure behind them — one accountable team, from first sketch to production.
          </p>
          <Link href="/about" className="border-b-2 border-ink pb-1 font-mono text-[13px] font-bold dark:border-paper">
            MORE ABOUT US →
          </Link>
        </div>
        <div className="grid min-w-[260px] flex-1 basis-[320px] grid-cols-2 gap-px border-2 border-ink bg-ink dark:border-paper dark:bg-paper">
          {quickStats.map((s) => (
            <div key={s.label} className="flex flex-col justify-center gap-1.5 bg-paper px-[18px] py-[22px] dark:bg-ink">
              <div className="text-2xl font-bold tracking-tight sm:text-[34px]">{s.value}</div>
              <div className="font-mono text-[11px] tracking-wide text-ink/55 dark:text-paper/55">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="border-t-2 border-ink dark:border-paper">
        <div className="mx-auto max-w-[1360px] px-5 pb-7 pt-16 sm:px-8 sm:pt-20 md:pt-24">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4 sm:mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-[44px]">What we do</h2>
            <Link href="/services" className="border-b-2 border-ink pb-1 font-mono text-[13px] font-bold dark:border-paper">
              ALL SERVICES →
            </Link>
          </div>
        </div>
        <div className="grid border-t-2 border-ink dark:border-paper sm:grid-cols-2 lg:grid-cols-4">
          {services.map((svc) => (
            <Link
              key={svc.index}
              href="/services"
              className="flex min-h-[260px] flex-col justify-between border-b-2 border-r-2 border-ink px-6 py-8 dark:border-paper sm:px-9 sm:py-10"
            >
              <div>
                <div className="mb-4 font-mono text-xs font-bold text-ink/55 dark:text-paper/55">{svc.index}</div>
                <div className="mb-5 h-10 w-10 bg-lime" />
                <h3 className="mb-2.5 text-xl font-bold tracking-tight">{svc.title}</h3>
                <p className="text-sm leading-relaxed text-ink/60 dark:text-paper/60">{svc.desc}</p>
              </div>
              <div className="mt-5 font-mono text-xs font-bold">EXPLORE →</div>
            </Link>
          ))}
        </div>
      </section>

      {/* GLOBAL REACH */}
      <section className="border-t-2 border-ink bg-ink text-paper dark:border-paper">
        <div className="mx-auto flex max-w-[1360px] flex-wrap gap-10 px-5 py-16 sm:px-8 sm:py-20 md:py-24">
          <div className="min-w-[280px] flex-1 basis-[380px]">
            <div className="mb-4 font-mono text-[12.5px] font-bold tracking-wide text-lime">/ GLOBAL REACH</div>
            <h2 className="mb-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-[44px]">One team. Every timezone.</h2>
            <p className="mb-7 max-w-[480px] text-[16px] leading-relaxed text-paper/70">
              We run distributed delivery pods so clients get overlapping working hours no matter where they&apos;re
              based — from São Paulo to Singapore.
            </p>
            <div className="grid grid-cols-3 gap-5">
              {reachStats.map((r) => (
                <div key={r.label}>
                  <div className="text-2xl font-bold text-lime sm:text-[30px]">{r.value}</div>
                  <div className="mt-1 font-mono text-[11px] tracking-wide text-paper/65">{r.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[280px] min-w-[280px] flex-1 basis-[380px] border-2 border-paper/20">
            <div
              className="absolute inset-0"
              style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,.14) 1px, transparent 1px)', backgroundSize: '26px 26px' }}
            />
            {regions.map((reg) => (
              <div
                key={reg.name}
                className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
                style={{ left: `${reg.x}%`, top: `${reg.y}%` }}
              >
                <div className="h-2.5 w-2.5 rounded-full bg-lime shadow-[0_0_12px_#C6FF00]" />
                <div className="whitespace-nowrap font-mono text-[10.5px] text-paper/80">{reg.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-[1360px] px-5 py-16 sm:px-8 sm:py-20 md:py-24">
        <h2 className="mb-8 text-3xl font-bold tracking-tight sm:mb-12 sm:text-4xl md:text-[44px]">What clients say</h2>
        <div className="grid gap-px border-2 border-ink bg-ink dark:border-paper dark:bg-paper sm:grid-cols-3">
          {testimonials.map((tm) => (
            <div key={tm.name} className="flex min-h-[220px] flex-col justify-between bg-paper p-7 dark:bg-ink sm:p-8">
              <p className="mb-6 text-[16px] leading-relaxed">&ldquo;{tm.quote}&rdquo;</p>
              <div>
                <div className="text-[14.5px] font-bold">{tm.name}</div>
                <div className="mt-1 font-mono text-[11.5px] text-ink/55 dark:text-paper/55">{tm.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOR STARTUPS TEASER */}
      <section className="border-t-2 border-ink bg-lime text-ink dark:border-paper">
        <div className="mx-auto flex max-w-[1360px] flex-wrap items-center justify-between gap-6 px-5 py-12 sm:px-8 sm:py-16">
          <div className="max-w-[640px]">
            <div className="mb-3 font-mono text-[12.5px] font-bold tracking-wide">/ FOR FOUNDERS</div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Building a startup? We ship your MVP in weeks, not quarters.
            </h2>
          </div>
          <Link href="/startups" className="whitespace-nowrap bg-ink px-7 py-4 font-mono text-[15px] font-bold text-paper">
            STARTUP PACKAGES →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1360px] px-5 py-20 text-center sm:px-8 sm:py-28 md:py-32">
        <div className="mb-4 font-mono text-[12.5px] font-bold tracking-wide text-ink/55 dark:text-paper/55">/ LET&apos;S TALK</div>
        <h2 className="mx-auto mb-8 max-w-[820px] text-[32px] font-bold tracking-tight sm:text-5xl md:text-6xl">
          Got a project? Let&apos;s build something that ships.
        </h2>
        <Link href="/contact" className="inline-block bg-ink px-8 py-[18px] font-mono text-base font-bold text-paper dark:bg-paper dark:text-ink">
          START A PROJECT →
        </Link>
      </section>
    </>
  );
}
