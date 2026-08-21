import Reveal from './Reveal'
import { services } from '../data/content'

export default function Services() {
  const { eyebrow, title, subtitle, items } = services

  return (
    <section
      id="services"
      className="px-6 py-25"
      style={{ background: 'linear-gradient(180deg, #0c0b09, #080807)' }}
    >
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="mx-auto mb-14 flex max-w-[520px] flex-col gap-3.5 text-center">
          <span className="text-[11.5px] tracking-[4.5px] text-[#a08f63] uppercase">
            {eyebrow}
          </span>
          <h2 className="m-0 font-serif text-[clamp(32px,4vw,48px)] font-normal text-cream-soft">
            {title}
          </h2>
          <p className="m-0 text-[15.5px] leading-[1.7] font-normal text-muted">
            {subtitle}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s, i) => (
            <Reveal
              key={s.mark}
              delay={i * 40}
              className="group flex min-h-[190px] flex-col gap-3.5 rounded-[18px] border border-gold/[0.16] bg-[linear-gradient(165deg,rgba(255,255,255,0.028),rgba(255,255,255,0))] px-6.5 py-7.5 transition-[transform,background,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:border-gold/50 hover:bg-[linear-gradient(165deg,rgba(216,178,95,0.09),rgba(255,255,255,0))] hover:shadow-[0_20px_45px_rgba(0,0,0,0.4)]"
            >
              <span className="grid h-11.5 w-11.5 place-items-center rounded-xl border border-gold/30 bg-gold/[0.12] font-serif text-xl text-gold-light transition-transform duration-300 group-hover:scale-110">
                {s.mark}
              </span>
              <h3 className="m-0 font-serif text-[23px] font-medium text-cream-soft">
                {s.title}
              </h3>
              <p className="m-0 text-[14.5px] leading-[1.65] font-normal text-muted">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
