import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6'

type Platform = 'github' | 'instagram' | 'linkedin' | 'x'

type SocialIconLinkProps = {
  href: string
  label: string
  platform: Platform
}

const iconMap = {
  github: FaGithub,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  x: FaXTwitter,
} satisfies Record<Platform, typeof FaGithub>

export function SocialIconLink({ href, label, platform }: SocialIconLinkProps) {
  const Icon = iconMap[platform]

  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/70 text-ink transition duration-300 hover:-translate-y-1 hover:border-brand hover:text-brand"
      target="_blank"
      rel="noreferrer"
    >
      <Icon className="text-base" />
    </a>
  )
}
