
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Container from '../components/layout/Container'

const features = [
  'Doğal Ahşap',
  'Özgün Tasarım',
  'Usta İşçilik',
]

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section"
      style={{
        backgroundImage: "url('public/images/hero-background.jpg')",
      }}
    >
      <div className="hero-overlay" />

      <Container>
        <div className="hero-content">

          <h1 className="hero-title">
            Ahşabın doğasından,
            <br />
            ustalığın
            <br />
            <span>izinden.</span>
          </h1>

          <p className="hero-description">
            Ahşabın doğal dokusunu geleneksel ustalık ve modern
            tasarım anlayışıyla buluşturuyor; yaşam alanlarına
            değer katan mobilyalar, dekoratif ürünler ve
            ahşap yapılar üretiyoruz.
          </p>

          <div className="hero-actions">
            <a href="#services" className="hero-button hero-button-primary">
              Ürünlerimizi Keşfedin
              <ArrowRight size={17} />
            </a>

            <a href="/contact" className="hero-button hero-button-secondary">
              Özel Üretim Talebi
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="hero-features">
            {features.map((feature, index) => (
              <div className="hero-feature" key={feature}>
                <span className="feature-dot" />
                {feature}

                {index !== features.length - 1 && (
                  <span className="feature-divider" />
                )}
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  )
}
