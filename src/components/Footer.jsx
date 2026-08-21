import Logo from './Logo'
import { navLinks, contact, footer } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()
  const { description, quickLinksLabel, reachUsLabel, instagramLabel, tagline } = footer

  return (
    <footer className="border-t border-gold/15 bg-ink-soft px-6 pt-16 pb-8.5">
      <div className="mx-auto grid max-w-[1440px] gap-11 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
        <div className="flex max-w-[320px] flex-col gap-4">
          <Logo withTagline={false} />
          <p className="m-0 text-[14.5px] leading-[1.7] font-normal text-muted-dim">
            {description}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-[11.5px] tracking-[3px] text-[#a08f63] uppercase">
            {quickLinksLabel}
          </span>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14.5px] text-body transition-colors hover:text-gold-light"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-[11.5px] tracking-[3px] text-[#a08f63] uppercase">{reachUsLabel}</span>
          <a
            href={contact.ramandeepTel}
            className="text-[14.5px] text-body transition-colors hover:text-gold-light"
          >
            Ramandeep — {contact.ramandeepPhone}
          </a>
          <a
            href={contact.kamaldeepTel}
            className="text-[14.5px] text-body transition-colors hover:text-gold-light"
          >
            Kamaldeep — {contact.kamaldeepPhone}
          </a>
          <div className="mt-2 flex gap-2.5">
            <a
              href={contact.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-gold/30 px-4.5 text-xs tracking-[1.6px] text-gold uppercase transition-colors hover:bg-gold/[0.14]"
            >
              {instagramLabel}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-11 flex max-w-[1440px] flex-wrap justify-between gap-2.5 border-t border-gold/[0.12] pt-5.5 text-[12.5px] text-muted-faint">
        <span>© {year} RK Realtors. All rights reserved.</span>
        <span>{tagline}</span>
      </div>
    </footer>
  )
}
