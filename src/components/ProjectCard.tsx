type ProjectCardProps = {
  title: string
  description: string
  category: string
  image: string
  technologies: string[]
}

export function ProjectCard({
  title,
  description,
  category,
  image,
  technologies,
}: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[32px] border border-line/70 bg-white/90 shadow-panel transition duration-300 hover:-translate-y-2 hover:border-brand/30 hover:shadow-float">
      <div className="overflow-hidden bg-mist">
        <img
          src={image}
          alt={title}
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
          {category}
        </p>
        <h3 className="mt-4 font-display text-2xl text-ink">{title}</h3>
        <p className="mt-4 flex-1 text-base leading-7 text-slate">{description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={`${title}-${technology}`}
              className="rounded-full border border-brand/15 bg-brand/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand"
            >
              {technology}
            </span>
          ))}
        </div>
        <button
          type="button"
          className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-ink px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-ink transition duration-300 hover:border-brand hover:bg-brand hover:text-white"
        >
          View Details
        </button>
      </div>
    </article>
  )
}
