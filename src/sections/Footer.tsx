import { navigationItems } from '../data/portfolio'
import { SocialIconLink } from '../components/SocialIconLink'

type FooterProps = {
  onNavigate: (id: (typeof navigationItems)[number]['id']) => void
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-ink px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[32px] border border-white/10 bg-white/5 p-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand text-sm font-bold uppercase tracking-[0.28em] text-white">
              MF
            </span>
            <div>
              <p className="font-display text-2xl">Meridian Forge</p>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/55">
                Advisory Studio
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/68">
            Portfolio design and digital transformation for organizations that need clarity, pace, and durable execution.
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:items-end">
          <div className="flex flex-wrap gap-3 text-sm font-semibold text-white/78">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className="transition hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <SocialIconLink href="https://linkedin.com" label="LinkedIn" platform="linkedin" />
            <SocialIconLink href="https://x.com" label="X" platform="x" />
            <SocialIconLink href="https://github.com" label="GitHub" platform="github" />
          </div>
          <p className="text-sm text-white/55">
            © 2026 Meridian Forge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
