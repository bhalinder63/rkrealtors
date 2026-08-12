import Reveal from './Reveal'
import { aboutImg } from '../data/content'

const features = [
  { title: 'Verified Listings', desc: 'Title-checked inventory' },
  { title: 'End-to-End', desc: 'Loan, papers, registry' },
]

export default function About() {
  return (
    <section id="about" className="border-t border-gold/10 px-6 py-28">
      <Reveal className="mx-auto grid max-w-[1440px] items-center gap-16 [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]">
        <div className="flex flex-col gap-5.5">
          <span className="text-[11.5px] tracking-[4.5px] text-[#a08f63] uppercase">
            About the Firm
          </span>
          <h2 className="m-0 font-serif text-[clamp(32px,4vw,48px)] leading-[1.14] font-normal text-cream-soft">
            A full-service property desk built on <span className="text-gold-light italic">trust</span>.
          </h2>
          <p className="m-0 text-pretty text-base leading-[1.85] font-normal text-muted-soft">
            RK Realtors is a property consultancy dealing in every category of real estate across
            New Chandigarh, Chandigarh, Mohali and Patiala — from residential plots and builder
            floors to commercial units, villas, farm houses and agricultural land. We work in our
            own backyard, which means we know each sector, rate trend and society by name.
          </p>
          <p className="m-0 text-pretty text-base leading-[1.85] font-normal text-muted-soft">
            Every client is handled personally by Ramandeep or Kamaldeep Singh — from the first
            site visit to registry and possession. No call centres, no hidden brokerage, no
            rushed decisions.
          </p>
          <div className="mt-2.5 grid gap-4.5 [grid-template-columns:repeat(auto-fit,minmax(150px,1fr))]">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-[14px] border border-gold/[0.18] bg-[linear-gradient(160deg,rgba(216,178,95,0.06),transparent)] px-5 py-4.5"
              >
                <div className="font-serif text-[19px] text-[#eddfbe]">{f.title}</div>
                <div className="mt-1 text-[13px] text-muted-dim">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] border border-gold/[0.22] bg-[#141210]">
          <img
            src={aboutImg}
            alt="Modern residence interior"
            className="block h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,7,0.1),rgba(8,8,7,0.55))]" />
        </div>
      </Reveal>
    </section>
  )
}
