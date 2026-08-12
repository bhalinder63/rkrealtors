import { useEffect, useState } from 'react'
import Reveal from './Reveal'
import CountUp from './CountUp'
import logo from '../assets/logo.png'
import { heroImages, stats } from '../data/content'

export default function Hero() {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    if (heroImages.length <= 1) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const id = setInterval(() => {
      setSlide((s) => (s + 1) % heroImages.length)
    }, 6500)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="home"
      className="relative grid min-h-[92vh] place-items-center px-6 pt-24 pb-20 text-center"
      style={{
        background: 'radial-gradient(120% 80% at 50% 0%, #1a1611 0%, #080807 62%)',
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        {heroImages.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="Luxury property exterior"
            className={`hero-kenburns absolute inset-0 h-full w-full object-cover transition-opacity duration-[1800ms] ease-in-out ${
              i === slide ? 'opacity-[0.62]' : 'opacity-0'
            }`}
          />
        ))}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(95% 75% at 50% 42%, rgba(8,8,7,0.48) 0%, rgba(8,8,7,0.78) 55%, #080807 100%)',
          }}
        />
      </div>
      <div
        className="hero-grid absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(216,178,95,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(216,178,95,0.045) 1px, transparent 1px)',
          backgroundSize: '88px 88px',
          maskImage: 'radial-gradient(70% 60% at 50% 40%, #000 0%, transparent 100%)',
        }}
      />

      <div className="relative flex max-w-[900px] flex-col items-center gap-6">
        <Reveal>
          <span className="relative grid h-[150px] w-[150px] place-items-center">
            <span className="logo-glow absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(240,232,216,0.95)_0%,rgba(240,232,216,0.58)_58%,rgba(240,232,216,0)_100%)]" />
            <img
              src={logo}
              alt="RK Realtors"
              className="relative h-[128px] w-[128px] object-contain drop-shadow-[0_16px_40px_rgba(199,154,60,0.35)]"
            />
          </span>
        </Reveal>

        <Reveal
          as="p"
          delay={80}
          className="m-0 text-xs tracking-[5px] text-[#a09879] uppercase"
        >
          New Chandigarh &nbsp;·&nbsp; Chandigarh &nbsp;·&nbsp; Mohali &nbsp;·&nbsp; Patiala
        </Reveal>

        <Reveal
          as="h1"
          delay={140}
          className="m-0 text-balance font-serif text-[clamp(40px,6.4vw,76px)] leading-[1.06] font-normal tracking-[-0.5px] text-cream-strong"
        >
          Find Your Perfect Property with{' '}
          <span className="text-shimmer bg-[linear-gradient(120deg,#f6e7bb,#d8b25f_35%,#a97f2a_50%,#d8b25f_65%,#f6e7bb)] bg-clip-text font-serif text-transparent italic">
            RK Realtors
          </span>
        </Reveal>

        <Reveal
          as="p"
          delay={200}
          className="m-0 max-w-[620px] text-pretty text-[17px] leading-[1.75] font-normal text-[#cec8bc] [text-shadow:0_2px_10px_rgba(0,0,0,0.5)]"
        >
          Trusted realtors across the Tricity and Patiala — plots, builder floors, flats, villas,
          farm houses and commercial spaces. Honest advice, verified inventory, complete
          paperwork support. Buy · Sell · Invest — smart investment, made simple.
        </Reveal>

        <Reveal
          delay={260}
          className="mt-2 flex flex-wrap justify-center gap-3.5"
        >
          <a
            href="#contact"
            className="rounded-full bg-[linear-gradient(145deg,#f6e7bb,#c79a3c_55%,#a4762a)] px-8.5 py-3.5 text-[13.5px] font-medium tracking-[2px] text-[#0a0908] uppercase shadow-[0_16px_40px_rgba(199,154,60,0.24)] transition-[transform,filter] duration-200 hover:-translate-y-0.5 hover:brightness-[1.09]"
          >
            Contact Us
          </a>
          <a
            href="#listings"
            className="rounded-full border border-gold/40 px-8.5 py-3.5 text-[13.5px] tracking-[2px] text-[#e2d7bd] uppercase transition-[transform,border-color,color] duration-200 hover:-translate-y-0.5 hover:border-gold hover:text-gold-light"
          >
            View Properties
          </a>
        </Reveal>

        <Reveal
          delay={320}
          className="mt-8.5 flex w-[min(680px,100%)] flex-wrap justify-center gap-11.5 border-t border-gold/15 pt-7.5"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-serif text-[34px] text-gold-light">
                <CountUp value={stat.value} />
              </span>
              <span className="text-[11.5px] tracking-[2.4px] text-muted-dim uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
