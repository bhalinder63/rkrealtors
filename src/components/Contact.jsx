import { useState } from 'react'
import Reveal from './Reveal'
import { contact, contactContent } from '../data/content'

const initialForm = { name: '', phone: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [sent, setSent] = useState(false)
  const {
    eyebrow,
    heading,
    paragraph,
    mapPlaceholderLine1,
    mapPlaceholderLine2,
    submitButtonText,
    whatsappNote,
    successHeading,
    successParagraph,
    successButtonText,
  } = contactContent

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const lines = [
      `New enquiry from the website:`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      form.message ? `Message: ${form.message}` : null,
    ].filter(Boolean)

    const waNumber = contact.whatsapp.replace('https://wa.me/', '')
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(lines.join('\n'))}`
    window.open(waUrl, '_blank', 'noopener,noreferrer')

    setSent(true)
    setForm(initialForm)
  }

  return (
    <section id="contact" className="px-6 py-25">
      <div className="mx-auto grid max-w-[1440px] gap-14 [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]">
        <Reveal className="flex flex-col gap-5">
          <span className="text-[11.5px] tracking-[4.5px] text-[#a08f63] uppercase">{eyebrow}</span>
          <h2 className="m-0 font-serif text-[clamp(32px,4vw,46px)] leading-[1.15] font-normal text-cream-soft">
            {heading}
          </h2>
          <p className="m-0 text-[15.5px] leading-[1.8] font-normal text-muted-soft">
            {paragraph}
          </p>

          <div className="mt-1.5 flex flex-col gap-0.5">
            <a
              href={contact.ramandeepTel}
              className="flex min-h-[44px] items-center justify-between gap-4 border-t border-gold/15 py-3.5 text-base text-[#ddd5c5] transition-colors hover:text-gold-pale"
            >
              <span className="text-[12.5px] tracking-[2.2px] text-muted-dim uppercase">
                Ramandeep Singh
              </span>
              {contact.ramandeepPhone}
            </a>
            <a
              href={contact.kamaldeepTel}
              className="flex min-h-[44px] items-center justify-between gap-4 border-t border-b border-gold/15 py-3.5 text-base text-[#ddd5c5] transition-colors hover:text-gold-pale"
            >
              <span className="text-[12.5px] tracking-[2.2px] text-muted-dim uppercase">
                Kamaldeep Singh
              </span>
              {contact.kamaldeepPhone}
            </a>
          </div>

          <div className="mt-2 grid h-[210px] place-items-center rounded-2xl border border-gold/20 bg-[repeating-linear-gradient(135deg,#141210_0_14px,#100e0c_14px_28px)]">
            <span className="text-center font-mono text-[11.5px] tracking-[1.4px] text-[#807b6c]">
              {mapPlaceholderLine1}
              <br />
              {mapPlaceholderLine2}
            </span>
          </div>
        </Reveal>

        <Reveal
          delay={100}
          className="rounded-[22px] border border-gold/20 bg-[linear-gradient(170deg,rgba(216,178,95,0.06),rgba(255,255,255,0.012))] p-8.5"
        >
          {sent ? (
            <div className="flex min-h-[380px] flex-col items-center justify-center gap-3.5 text-center">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-[linear-gradient(145deg,#f6e7bb,#c79a3c)] text-[#0a0908]">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <h3 className="m-0 font-serif text-[28px] text-cream-soft">{successHeading}</h3>
              <p className="m-0 text-[15px] font-normal text-muted-soft">
                {successParagraph}
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-2 inline-flex min-h-[44px] cursor-pointer items-center justify-center px-4 text-[13px] tracking-[1.6px] text-gold-light uppercase transition-colors hover:text-gold-pale"
              >
                {successButtonText}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label className="flex flex-col gap-2 text-[11.5px] tracking-[2.2px] text-muted-dim uppercase">
                Name <span className="text-gold-light normal-case">*</span>
                <input
                  required
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="rounded-[11px] border border-gold/[0.22] bg-black/35 px-4 py-3.5 text-[15px] tracking-normal text-cream normal-case focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40"
                />
              </label>
              <label className="flex flex-col gap-2 text-[11.5px] tracking-[2.2px] text-muted-dim uppercase">
                Phone <span className="text-gold-light normal-case">*</span>
                <input
                  required
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  className="rounded-[11px] border border-gold/[0.22] bg-black/35 px-4 py-3.5 text-[15px] tracking-normal text-cream normal-case focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40"
                />
              </label>
              <label className="flex flex-col gap-2 text-[11.5px] tracking-[2.2px] text-muted-dim uppercase">
                Email
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@email.com"
                  className="rounded-[11px] border border-gold/[0.22] bg-black/35 px-4 py-3.5 text-[15px] tracking-normal text-cream normal-case focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40"
                />
              </label>
              <label className="flex flex-col gap-2 text-[11.5px] tracking-[2.2px] text-muted-dim uppercase">
                Message
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Property type, budget, preferred location…"
                  className="resize-y rounded-[11px] border border-gold/[0.22] bg-black/35 px-4 py-3.5 font-sans text-[15px] tracking-normal text-cream normal-case focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40"
                />
              </label>
              <button
                type="submit"
                className="mt-1.5 min-h-[44px] cursor-pointer rounded-full bg-[linear-gradient(145deg,#f6e7bb,#c79a3c_55%,#a4762a)] py-4 text-[13px] font-medium tracking-[2.2px] text-[#0a0908] uppercase transition-[filter] hover:brightness-[1.09]"
              >
                {submitButtonText}
              </button>
              <p className="m-0 text-center text-[12.5px] text-muted-faint">
                {whatsappNote} {contact.ramandeepPhone}
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
