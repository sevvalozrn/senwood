import { useEffect, useState } from 'react'

interface LoadingScreenProps {
  onDone: () => void
}

export default function LoadingScreen({ onDone }: LoadingScreenProps) {
  const [hiding, setHiding] = useState(false)

  useEffect(() => {
    const startHide = () => {
      // Kısa bir gecikme sonra fade-out animasyonu başla
      setTimeout(() => {
        setHiding(true)
        // Animasyon bittikten sonra (600ms) parent'ı bilgilendir
        setTimeout(onDone, 600)
      }, 400)
    }

    if (document.readyState === 'complete') {
      startHide()
    } else {
      window.addEventListener('load', startHide, { once: true })
      return () => window.removeEventListener('load', startHide)
    }
  }, [onDone])

  return (
    <div
      className={`loading-screen${hiding ? ' loading-screen--hidden' : ''}`}
      aria-hidden="true"
    >
      {/* Logo */}
      <div className="loading-brand">
        <span className="loading-brand-text">
          ŞEN<span>WOOD</span>
          <span className="loading-brand-dot">.</span>
        </span>
      </div>

      {/* Spinner */}
      <div className="loading-spinner" />
    </div>
  )
}
