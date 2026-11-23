
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Clock,
} from 'lucide-react'
import Container from './Container'

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/sen.wood/', icon: 'instagram' },
  { label: 'Facebook', href: 'https://www.facebook.com/sen.wood16/', icon: 'facebook' },
]

const quickLinks = [
  { label: 'Ana Sayfa', href: '/senwood/#home' },
  { label: 'Hakkımızda', href: '/senwood/#about' },
  { label: 'Hizmetlerimiz', href: '/senwood/#services' },
  { label: 'İletişim', href: '/senwood/contact' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-main">
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              ŞEN<span>WOOD</span>
              <span className="footer-logo-dot">.</span>
            </a>

            <p className="footer-description">
              Ahşabın doğal dokusunu ustalık ve özgün tasarımla
              buluşturuyor, yaşam alanlarına değer katan ürünler
              üretiyoruz.
            </p>

            <div className="footer-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href || undefined}
                  aria-label={social.label}
                  className="footer-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon === 'instagram' && (
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7">
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
                    </svg>
                  )}

                  {social.icon === 'facebook' && (
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.8-.1-1.6-.2-2.4-.2-2.4 0-4.1 1.5-4.1 4.2V10H7.5v3h2.8v8h3.2Z" />
                    </svg>
                  )}

                  {social.icon === 'linkedin' && (
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M5.2 3.5a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM3.6 8.5h3.2V20H3.6V8.5Zm5.2 0h3.1v1.6h.1c.4-.8 1.5-2 3.2-2 3.4 0 4 2.2 4 5V20H16v-6.1c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V20H8.8V8.5Z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <h3>Keşfedin</h3>

            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>
                    <ArrowUpRight size={14} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column footer-contact">
            <h3>Bize Ulaşın</h3>

            <ul>
              <li>
                <MapPin size={17} />
                <span>Adres bilgisi eklenecek</span>
              </li>

              <li>
                <Phone size={17} />
                <a href="">Telefon numarası eklenecek</a>
              </li>

              <li>
                <Mail size={17} />
                <a href="">E-posta adresi eklenecek</a>
              </li>

              <li>
                <Clock size={17} />
                <span>Çalışma saatleri eklenecek</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} ŞENWOOD. Tüm hakları saklıdır.</span>

          <a href="#home" className="footer-back-top">
            Yukarı Dön
            <ArrowUpRight size={15} />
          </a>
        </div>
      </Container>
    </footer>
  )
}
