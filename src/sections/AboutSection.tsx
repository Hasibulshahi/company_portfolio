import { motion } from 'framer-motion'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl space-y-14">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="We design the conditions for confident growth."
            description="Our teams blend board-level strategy, delivery governance, and modern digital execution to help organizations move from fragmented initiatives to a coherent portfolio story."
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35 }}
              className="relative overflow-hidden rounded-[36px] border border-line/70 bg-white shadow-panel"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,138,93,0.28),transparent_36%),linear-gradient(160deg,#103d49_0%,#09111f_100%)]" />
              <div className="relative grid min-h-[480px] grid-rows-[auto_1fr] p-8 text-white sm:p-10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.32em] text-white/60">Mission</p>
                    <p className="mt-3 max-w-sm font-display text-3xl leading-tight">
                      Convert strategic ambition into delivery systems that endure.
                    </p>
                  </div>
                  <div className="h-16 w-16 rounded-full border border-white/15 bg-white/10" />
                </div>
                <div className="mt-10 flex items-end justify-between gap-6">
                  <div className="max-w-md rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                    <p className="text-sm uppercase tracking-[0.28em] text-white/55">Vision</p>
                    <p className="mt-4 text-lg leading-8 text-white/80">
                      A world where enterprise change feels intentional, measurable, and human-centered at every layer.
                    </p>
                  </div>
                  <div className="hidden rounded-[30px] border border-white/10 bg-white/5 p-5 text-right lg:block">
                    <p className="font-display text-5xl">360°</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.24em] text-white/60">Portfolio view</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </Reveal>

          <Reveal delay={0.15} className="space-y-6">
            <div className="rounded-[32px] border border-line/70 bg-white/85 p-8 shadow-panel">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
                Company overview
              </p>
              <p className="mt-5 text-base leading-8 text-slate sm:text-lg">
                Founded by transformation leaders from consulting, capital projects, and product delivery, Meridian Forge operates as a strategic portfolio studio for companies navigating inflection points.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[28px] border border-line/70 bg-mist/75 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand">How we work</p>
                <p className="mt-4 text-base leading-7 text-slate">
                  Tight executive alignment, disciplined program design, and systems-minded implementation.
                </p>
              </div>
              <div className="rounded-[28px] border border-line/70 bg-sand/70 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand">Why clients stay</p>
                <p className="mt-4 text-base leading-7 text-slate">
                  We build decision rhythm, delivery visibility, and teams that can sustain the work after launch.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
