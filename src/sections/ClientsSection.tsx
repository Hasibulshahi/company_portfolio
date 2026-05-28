import { ClientLogoCard } from '../components/ClientLogoCard'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { clients } from '../data/portfolio'

export function ClientsSection() {
  return (
    <section id="clients" className="bg-white/55 px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl space-y-14">
        <Reveal>
          <SectionHeading
            eyebrow="Clients"
            title="Trusted by operators, investors, and public institutions."
            description="We support organizations that need a partner fluent in business cases, stakeholder complexity, and the delivery detail that keeps transformation credible."
            align="center"
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {clients.map((client, index) => (
            <Reveal key={client.name} delay={index * 0.08}>
              <ClientLogoCard name={client.name} image={client.image} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
