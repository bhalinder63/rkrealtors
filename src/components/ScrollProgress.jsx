import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const barRef = useRef(null)
  const ticking = useRef(false)

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? scrollTop / docHeight : 0
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`
      }
      ticking.current = false
    }

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true
        requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-black/25">
      <div
        ref={barRef}
        className="h-full w-full origin-left bg-[linear-gradient(90deg,#f6e7bb,#d8b25f_50%,#a97f2a)]"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  )
}
