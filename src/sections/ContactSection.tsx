import { useForm } from 'react-hook-form'
import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { SocialIconLink } from '../components/SocialIconLink'
import { contactDetails } from '../data/portfolio'

type ContactFormValues = {
  name: string
  email: string
  message: string
}

export function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ContactFormValues>()

  const onSubmit = () => {
    reset()
  }

  return (
    <section id="contact" className="bg-mist/70 px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal className="space-y-8">
          <SectionHeading
            eyebrow="Contact"
            title="Plan the next move with a team that can carry it through."
            description="Tell us where your organization needs sharper visibility, stronger delivery confidence, or a clearer portfolio story."
          />

          <div className="space-y-5 rounded-[32px] border border-line/70 bg-white/90 p-8 shadow-panel">
            <div className="flex items-start gap-4">
              <FaLocationDot className="mt-1 text-brand" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">Address</p>
                <p className="mt-2 text-base leading-7 text-slate">{contactDetails.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaEnvelope className="mt-1 text-brand" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">Email</p>
                <a href={`mailto:${contactDetails.email}`} className="mt-2 block text-base leading-7 text-slate transition hover:text-brand">
                  {contactDetails.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaPhone className="mt-1 text-brand" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">Phone</p>
                <a href={`tel:${contactDetails.phone}`} className="mt-2 block text-base leading-7 text-slate transition hover:text-brand">
                  {contactDetails.phone}
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <SocialIconLink href="https://linkedin.com" label="LinkedIn" platform="linkedin" />
              <SocialIconLink href="https://x.com" label="X" platform="x" />
              <SocialIconLink href="https://instagram.com" label="Instagram" platform="instagram" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-[36px] border border-line/70 bg-white/95 p-8 shadow-panel sm:p-10">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div>
                <label htmlFor="name" className="mb-3 block text-sm font-semibold uppercase tracking-[0.22em] text-ink">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full rounded-2xl border border-line bg-mist/45 px-5 py-4 text-base text-ink outline-none transition focus:border-brand"
                  placeholder="Enter your name"
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name ? <p className="mt-2 text-sm text-red-600">{errors.name.message}</p> : null}
              </div>
              <div>
                <label htmlFor="email" className="mb-3 block text-sm font-semibold uppercase tracking-[0.22em] text-ink">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-2xl border border-line bg-mist/45 px-5 py-4 text-base text-ink outline-none transition focus:border-brand"
                  placeholder="name@company.com"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Enter a valid email address',
                    },
                  })}
                />
                {errors.email ? <p className="mt-2 text-sm text-red-600">{errors.email.message}</p> : null}
              </div>
              <div>
                <label htmlFor="message" className="mb-3 block text-sm font-semibold uppercase tracking-[0.22em] text-ink">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full rounded-2xl border border-line bg-mist/45 px-5 py-4 text-base text-ink outline-none transition focus:border-brand"
                  placeholder="Briefly describe your portfolio, program, or transformation challenge."
                  {...register('message', {
                    required: 'Message is required',
                    minLength: {
                      value: 20,
                      message: 'Message must be at least 20 characters',
                    },
                  })}
                />
                {errors.message ? <p className="mt-2 text-sm text-red-600">{errors.message.message}</p> : null}
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="rounded-full bg-brand px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white transition duration-300 hover:-translate-y-1 hover:bg-brand-deep"
                >
                  Submit
                </button>
                {isSubmitSuccessful ? (
                  <p className="text-sm font-medium text-brand">
                    Thanks. Your message is ready for backend integration.
                  </p>
                ) : (
                  <p className="text-sm text-slate">Validated with React Hook Form.</p>
                )}
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
