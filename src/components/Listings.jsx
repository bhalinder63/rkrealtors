import Reveal from './Reveal'
import { listings } from '../data/content'

export default function Listings() {
  return (
    <section id="listings" className="px-6 py-25">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-5">
          <div className="flex flex-col gap-3">
            <span className="text-[11.5px] tracking-[4.5px] text-[#a08f63] uppercase">
              Featured
            </span>
            <h2 className="m-0 font-serif text-[clamp(32px,4vw,48px)] font-normal text-cream-soft">
              Current listings
            </h2>
          </div>
          <a
            href="#contact"
            className="border-b border-gold/40 pb-1 text-[13px] tracking-[2px] uppercase"
          >
            Request full inventory
          </a>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((l, i) => (
            <Reveal
              key={l.title}
              as="article"
              delay={i * 40}
              className="group flex flex-col overflow-hidden rounded-[18px] border border-gold/[0.16] bg-ink-card transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:border-gold/45 hover:shadow-[0_20px_45px_rgba(0,0,0,0.45)]"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-[#16130f]">
                <img
                  src={l.img}
                  alt={l.title}
                  className="block h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08]"
                  loading="lazy"
                />
                <span className="absolute top-3.5 left-3.5 rounded-full border border-gold/35 bg-ink/72 px-3.5 py-1.5 text-[10.5px] tracking-[2px] text-gold-light uppercase">
                  {l.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2.5 p-6">
                <h3 className="m-0 font-serif text-[25px] leading-[1.2] font-medium text-cream-soft">
                  {l.title}
                </h3>
                <p className="m-0 text-[13.5px] tracking-[1px] text-muted-dim uppercase">
                  {l.location}
                </p>
                <p className="mt-1 mb-0 text-[14.5px] leading-[1.6] font-normal text-muted-soft">
                  {l.meta}
                </p>
                <div className="mt-auto flex items-center justify-between gap-3.5 pt-5">
                  <span className="font-serif text-2xl text-gold-light">{l.price}</span>
                  <a
                    href="#contact"
                    className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-gold/40 px-5 text-xs tracking-[1.6px] text-[#e2d7bd] uppercase transition-[transform,background,color,border-color] duration-200 hover:-translate-y-0.5 hover:border-transparent hover:bg-[linear-gradient(145deg,#f6e7bb,#c79a3c)] hover:text-[#0a0908]"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
