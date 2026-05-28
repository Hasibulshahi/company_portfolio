import { FounderCard } from '../components/FounderCard'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { founders } from '../data/portfolio'

export function FoundersSection() {
  return (
    <section id="founders" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl space-y-14">
        <Reveal>
          <SectionHeading
            eyebrow="Founders"
            title="Leadership rooted in strategy, delivery, and partnership."
            description="Our founders bring complementary expertise across capital allocation, digital transformation, and long-horizon client stewardship."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {founders.map((founder, index) => (
            <Reveal key={founder.name} delay={index * 0.08}>
              <FounderCard {...founder} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
