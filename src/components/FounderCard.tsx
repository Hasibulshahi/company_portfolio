import { SocialIconLink } from './SocialIconLink'

type FounderCardProps = {
  name: string
  role: string
  bio: string
  image: string
  socialLinks: Array<{
    href: string
    label: string
    platform: 'github' | 'instagram' | 'linkedin' | 'x'
  }>
}

export function FounderCard({
  name,
  role,
  bio,
  image,
  socialLinks,
}: FounderCardProps) {
  return (
    <article className="group rounded-[32px] border border-line/70 bg-white/85 p-6 shadow-panel transition duration-300 hover:-translate-y-2 hover:border-brand/30 hover:shadow-float">
      <div className="overflow-hidden rounded-[28px] bg-sand">
        <img
          src={image}
          alt={name}
          className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="mt-6 space-y-4">
        <div>
          <h3 className="font-display text-2xl text-ink">{name}</h3>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.28em] text-brand">
            {role}
          </p>
        </div>
        <p className="text-base leading-7 text-slate">{bio}</p>
        <div className="flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <SocialIconLink
              key={`${name}-${link.platform}`}
              href={link.href}
              label={link.label}
              platform={link.platform}
            />
          ))}
        </div>
      </div>
    </article>
  )
}
