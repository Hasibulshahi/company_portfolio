import { useState } from 'react'
import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { projects } from '../data/portfolio'

const filters = ['All', 'Advisory', 'Digital', 'Infrastructure'] as const

type Filter = (typeof filters)[number]

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All')

  const visibleProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl space-y-12">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Projects"
              title="Selected programs shaping modern enterprise portfolios."
              description="A sample of the operating models, digital services, and transformation governance work we deliver with our clients."
            />
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => {
                const isActive = filter === activeFilter

                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.26em] transition duration-300 ${
                      isActive
                        ? 'bg-brand text-white'
                        : 'border border-line/80 bg-white text-ink hover:border-brand hover:text-brand'
                    }`}
                  >
                    {filter}
                  </button>
                )
              })}
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.06}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
