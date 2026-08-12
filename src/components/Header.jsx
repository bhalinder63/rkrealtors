import { useState } from 'react'
import Logo from './Logo'
import { navLinks, contact } from '../data/content'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-[3px] z-50 border-b border-gold/15 bg-ink/85 backdrop-blur-lg">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-6 py-3.5">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          <div className="flex gap-7 text-sm tracking-[1.2px] uppercase">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-[#cdc7ba] transition-colors hover:text-gold-light"
              >
                {link.label}
                <span className="pointer-events-none absolute left-0 -bottom-1 h-px w-full origin-left scale-x-0 bg-gold-light transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
            ))}
          </div>
          <a
            href={contact.ramandeepTel}
            className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-gold/55 px-5 text-[13px] tracking-[1.4px] whitespace-nowrap text-gold-light uppercase transition-[transform,background,color,border-color] duration-200 hover:-translate-y-0.5 hover:border-transparent hover:bg-[linear-gradient(145deg,#f3dfa8,#c79a3c)] hover:text-[#0a0908]"
          >
            Call Now
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-gold/30 text-gold-light lg:hidden"
        >
          <span className="relative block h-3.5 w-4.5">
            <span
              className={`absolute left-0 top-0 h-px w-4.5 bg-current transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`}
            />
            <span
              className={`absolute left-0 top-1.5 h-px w-4.5 bg-current transition-opacity ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`absolute left-0 top-3 h-px w-4.5 bg-current transition-transform ${open ? '-translate-y-[9px] -rotate-45' : ''}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-gold/15 bg-ink px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-5 text-sm tracking-[1.2px] uppercase">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[#cdc7ba] transition-colors hover:text-gold-light"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href={contact.ramandeepTel}
            className="mt-6 inline-flex min-h-[44px] w-full items-center justify-center rounded-full border border-gold/55 px-5 text-center text-[13px] tracking-[1.4px] text-gold-light uppercase transition-colors hover:border-transparent hover:bg-[linear-gradient(145deg,#f3dfa8,#c79a3c)] hover:text-[#0a0908]"
          >
            Call Now
          </a>
        </div>
      )}
    </header>
  )
}
