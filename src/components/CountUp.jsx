import { useEffect, useState } from 'react'
import useReveal from '../hooks/useReveal'

export default function CountUp({ value, duration = 1400 }) {
  const match = value.match(/^([\d.]+)(.*)$/)
  const number = match ? parseFloat(match[1]) : null
  const suffix = match ? match[2] : ''
  const [ref, visible] = useReveal()
  const [display, setDisplay] = useState(number === null ? value : '0' + suffix)

  useEffect(() => {
    if (!visible || number === null) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setDisplay(value)
      return
    }

    const isInt = Number.isInteger(number)
    const start = performance.now()
    let raf

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - (1 - t) ** 3
      const current = number * eased
      setDisplay((isInt ? Math.round(current) : current.toFixed(1)) + suffix)
      if (t < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [visible, number, suffix, duration, value])

  return <span ref={ref}>{display}</span>
}
