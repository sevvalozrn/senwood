
import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Container from './Container'

const navigation = [
  { label: 'Hakkımızda', href: '/#about' },
  { label: 'Ürünler', href: '/#services' },
  { label: 'Özel Üretim', href: '#contact' },
  { label: 'İletişim', href: '/contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <Container>
        <nav className="header-nav" aria-label="Ana navigasyon">

          <a href="/" className="brand" onClick={closeMenu}>
            <a href="/" className="footer-logo">
              ŞEN<span>WOOD</span>
              <span className="footer-logo-dot">.</span>
            </a>
          </a>

          <div className="desktop-navigation">
            {navigation.map((item) => (
              <a
                key={item.href + item.label}
                href={item.href}
                className="nav-link"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </nav>

        {menuOpen && (
          <div className="mobile-navigation">
            {navigation.map((item) => (
              <a
                key={item.href + item.label}
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
                <ArrowUpRight size={15} />
              </a>
            ))}

          </div>
        )}
      </Container>
    </header>
  )
}
