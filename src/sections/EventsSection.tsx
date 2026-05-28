import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { eventSlides } from '../data/portfolio'
import '../styles/swiper.css'

export function EventsSection() {
  return (
    <section id="events" className="bg-ink px-4 py-24 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl space-y-14">
        <Reveal>
          <SectionHeading
            eyebrow="Events"
            title="Moments that turn strategy into shared momentum."
            description="We use forums, showcases, and working sessions to align stakeholders around the portfolio narrative and the next decisions that matter."
            variant="light"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            className="events-swiper"
            spaceBetween={24}
            slidesPerView={1}
            loop
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3200, disableOnInteraction: false, pauseOnMouseEnter: true }}
            lazyPreloadPrevNext={2}
            breakpoints={{
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 2.35 },
            }}
          >
            {eventSlides.map((slide) => (
              <SwiperSlide key={slide.title}>
                <article className="h-full overflow-hidden rounded-[32px] border border-white/10 bg-white/6">
                  <div className="overflow-hidden">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="h-72 w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="space-y-3 p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-soft">
                      Event highlight
                    </p>
                    <h3 className="font-display text-3xl text-white">{slide.title}</h3>
                    <p className="text-base leading-7 text-white/72">{slide.caption}</p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  )
}
