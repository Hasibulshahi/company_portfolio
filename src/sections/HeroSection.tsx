import { motion } from 'framer-motion'
import { companyStats } from '../data/portfolio'
import { Reveal } from '../components/Reveal'

type HeroSectionProps = {
  onNavigate: (id: 'projects' | 'contact') => void
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-36 sm:px-6 lg:px-8 lg:pb-28 lg:pt-40">
      <div className="absolute inset-x-0 top-0 h-full bg-mesh" />
      <div className="absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />
      <div className="absolute right-10 top-24 h-32 w-32 rounded-full bg-brand-warm/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <Reveal className="space-y-8">
          <p className="text-sm font-semibold uppercase tracking-[0.34em] text-brand">
            Corporate portfolio, rebuilt for confidence
          </p>
          <div className="space-y-6">
            <h1 className="max-w-4xl font-display text-5xl leading-[0.94] text-ink sm:text-6xl xl:text-7xl">
              Strategy, delivery, and design for high-stakes transformation.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate sm:text-xl">
              Meridian Forge partners with executive teams to shape resilient portfolios,
              modernize digital services, and turn complex change programs into visible momentum.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => onNavigate('projects')}
              className="rounded-full bg-brand px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white transition duration-300 hover:-translate-y-1 hover:bg-brand-deep"
            >
              Explore Projects
            </button>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="rounded-full border border-ink/20 bg-white/70 px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-ink transition duration-300 hover:-translate-y-1 hover:border-brand hover:text-brand"
            >
              Contact Us
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative rounded-[36px] border border-white/60 bg-white/70 p-6 shadow-float backdrop-blur-xl">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="rounded-[30px] bg-ink px-6 py-7 text-white"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-white/55">
                    Portfolio signal
                  </p>
                  <p className="mt-3 font-display text-3xl">Executive clarity at operating speed</p>
                </div>
                <div className="h-14 w-14 rounded-full border border-white/20 bg-white/5" />
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {companyStats.map((stat) => (
                  <div key={stat.label} className="rounded-[22px] border border-white/10 bg-white/5 p-5">
                    <p className="font-display text-3xl text-sand">{stat.value}</p>
                    <p className="mt-3 text-sm leading-6 text-white/70">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
