import Reveal from './Reveal'
import { team } from '../data/content'

export default function Team() {
  return (
    <section
      id="team"
      className="px-6 py-25"
      style={{ background: 'linear-gradient(180deg, #0c0b09, #080807)' }}
    >
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="mb-13 flex flex-col gap-3.5 text-center">
          <span className="text-[11.5px] tracking-[4.5px] text-[#a08f63] uppercase">
            The Team
          </span>
          <h2 className="m-0 font-serif text-[clamp(32px,4vw,48px)] font-normal text-cream-soft">
            Speak to us directly
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {team.map((t) => (
            <Reveal
              key={t.name}
              className="group flex items-center gap-5.5 rounded-[20px] border border-gold/[0.18] bg-[linear-gradient(165deg,rgba(216,178,95,0.055),transparent)] p-7.5 transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-[0_20px_45px_rgba(0,0,0,0.4)]"
            >
              <div className="grid h-24 w-24 flex-none place-items-center overflow-hidden rounded-full border border-gold/35 bg-[#17140f] transition-transform duration-300 group-hover:scale-105">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gold/40"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" />
                </svg>
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="m-0 font-serif text-[27px] font-medium text-cream-soft">
                  {t.name}
                </h3>
                <span className="text-[11.5px] tracking-[2.6px] text-muted-dim uppercase">
                  {t.role}
                </span>
                <a
                  href={t.tel}
                  className="mt-1.5 text-[17px] tracking-[0.6px] text-gold-light transition-colors hover:text-gold-pale"
                >
                  {t.phone}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
