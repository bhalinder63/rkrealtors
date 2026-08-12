import logo from '../assets/logo.png'

export default function Logo({ withTagline = true }) {
  return (
    <a href="#home" className="group flex items-center gap-3 text-inherit">
      <span className="relative grid h-[56px] w-[56px] flex-none place-items-center transition-transform duration-300 group-hover:scale-[1.06]">
        <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(240,232,216,0.95)_0%,rgba(240,232,216,0.62)_60%,rgba(240,232,216,0)_100%)]" />
        <img src={logo} alt="RK Realtors" className="relative h-[50px] w-[50px] object-contain" />
      </span>
      <span className="flex flex-col leading-[1.05]">
        <span className="font-serif text-[26px] tracking-[1.5px] text-cream-headline">
          RK REALTORS
        </span>
        {withTagline && (
          <span className="text-[11px] tracking-[3.4px] text-muted uppercase">
            Buy · Sell · Invest
          </span>
        )}
      </span>
    </a>
  )
}
