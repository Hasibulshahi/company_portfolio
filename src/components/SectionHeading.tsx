type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
  variant?: 'default' | 'light'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  variant = 'default',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''
  const tones =
    variant === 'light'
      ? {
          eyebrow: 'text-brand-soft',
          title: 'text-white',
          description: 'text-white/72',
        }
      : {
          eyebrow: 'text-brand',
          title: 'text-ink',
          description: 'text-slate',
        }

  return (
    <div className={`max-w-2xl space-y-4 ${alignment}`.trim()}>
      <p className={`text-sm font-semibold uppercase tracking-[0.32em] ${tones.eyebrow}`}>
        {eyebrow}
      </p>
      <h2 className={`font-display text-4xl sm:text-5xl ${tones.title}`}>{title}</h2>
      <p className={`text-base leading-8 sm:text-lg ${tones.description}`}>{description}</p>
    </div>
  )
}
