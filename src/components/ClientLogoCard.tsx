type ClientLogoCardProps = {
  name: string
  image: string
}

export function ClientLogoCard({ name, image }: ClientLogoCardProps) {
  return (
    <div className="group rounded-[28px] border border-line/70 bg-white/80 p-8 shadow-panel transition duration-300 hover:-translate-y-2 hover:border-brand/30 hover:bg-white">
      <div className="flex min-h-24 items-center justify-center rounded-[22px] bg-mist/80 p-5 grayscale transition duration-300 group-hover:grayscale-0">
        <img src={image} alt={`${name} logo`} className="max-h-12 w-auto object-contain" loading="lazy" />
      </div>
      <p className="mt-5 text-sm font-semibold uppercase tracking-[0.24em] text-slate">
        {name}
      </p>
    </div>
  )
}
