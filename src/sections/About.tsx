import {
  Armchair,
  Layers3,
  PanelsTopLeft,
  Trees,
  ArrowUpRight,
} from 'lucide-react'
import Container from '../components/layout/Container'

const specialties = [
  { title: 'İç Mekân Tasarımları', icon: Armchair },
  { title: 'Dış Mekân Ürünleri', icon: Trees },
  { title: 'Epoksi Tasarımlar', icon: Layers3 },
  { title: 'Çatı ve Ahşap Yapılar', icon: PanelsTopLeft },
]

export default function About() {
  return (
    <section id="about" className="about-section">
      <Container>
        <div className="about-topline">
          <span className="about-eyebrow">ŞENWOOD / HAKKIMIZDA</span>
        </div>

        <h2 className="about-heading">
          Doğanın dokusu,
          <span> ustalığın yorumu.</span>
        </h2>

        <div className="about-grid">
          <div className="about-description">
            <span className="about-small-label">BİZ KİMİZ?</span>

            <h3>
              Ahşaba şekil verir,
              <span> yaşam alanlarına değer katarız.</span>
            </h3>

            <p>
              ŞENWOOD olarak doğal ahşabın karakterini, geleneksel
              ustalık ve modern tasarım anlayışıyla buluşturuyoruz.
              Her projede malzemenin doğasına saygı duyarak estetik,
              işlevsel ve uzun ömürlü çözümler üretiyoruz.
            </p>

            <a href="#contact" className="about-link">
              Bizi daha yakından tanıyın
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="about-specialties">
            <span className="about-small-label">ÜRETİM ALANLARIMIZ</span>

            <div className="specialty-list">
              {specialties.map(({ title, icon: Icon }, index) => (
                <div className="specialty-item" key={title}>
                  <span className="specialty-number">
                    0{index + 1}
                  </span>

                  <Icon size={21} strokeWidth={1.5} />

                  <span className="specialty-title">{title}</span>

                  <ArrowUpRight
                    className="specialty-arrow"
                    size={16}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="about-image-wrap">
            <img
              src={`${import.meta.env.BASE_URL}images/about-workshop.jpg`}
              alt="ŞENWOOD ahşap işçiliği"
              className="about-image"
            />
            <div className="about-image-caption">
              <span>DOĞAL MALZEME</span>
              <span>ÖZENLİ İŞÇİLİK</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}