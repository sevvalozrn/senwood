
import { useEffect, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ZoomIn,
  X,
} from 'lucide-react'
import Container from '../components/layout/Container'

const services = [
  {
    number: '01',
    title: 'İç Mekân',
    subtitle: 'Mobilya & Yaşam Alanları',
    description:
      'Yaşam alanlarına özel tasarlanan masa, sehpa, raf ve mobilyalarla doğal ahşabın sıcaklığını iç mekânlara taşıyoruz.',
    images: [
      '/images/services/interior-1.jpg',
      '/images/services/interior-2.jpg',
      '/images/services/interior-3.jpg',
      '/images/services/interior-4.jpg',
      '/images/services/interior-5.jpg',
      '/images/services/interior-6.jpg',
      '/images/services/interior-7.jpg',
      '/images/services/interior-8.jpg',
    ],
  },
  {
    number: '02',
    title: 'Dış Mekân',
    subtitle: 'Bahçe & Ahşap Yapılar',
    description:
      'Bahçeler ve açık alanlar için kamelya, sundurma, oturma grupları ve özel ahşap yapılar üretiyoruz.',
    images: [
      '/images/services/exterior-1.jpg',
      '/images/services/exterior-2.jpg',
      '/images/services/exterior-3.jpg',
      '/images/services/exterior-4.jpg',
      '/images/services/exterior-5.jpg',
      '/images/services/exterior-6.jpg',
      '/images/services/exterior-7.jpg',
    ],
  },
  {
    number: '03',
    title: 'Epoksi',
    subtitle: 'Özgün Tasarımlar',
    description:
      'Ahşabın doğal dokusunu epoksinin özgün görünümüyle birleştirerek karakter sahibi tasarımlar ortaya çıkarıyoruz.',
    images: [
      '/images/services/epoxy-1.jpg',
      '/images/services/epoxy-2.jpg',
      '/images/services/epoxy-3.jpg',
    ],
  },
  {
    number: '04',
    title: 'Çatı Sistemleri',
    subtitle: 'Ahşap Uygulamalar',
    description:
      'Yapının mimarisine ve kullanım ihtiyacına uygun ahşap çatı ve yapısal uygulamalar gerçekleştiriyoruz.',
    images: [
      '/images/services/roof-1.jpg',
      '/images/services/roof-2.jpg',
      '/images/services/roof-3.jpg',
      '/images/services/roof-4.jpg',
    ],
  },
]

type SelectedImage = {
  serviceIndex: number
  imageIndex: number
}

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0)

  const [imageIndexes, setImageIndexes] = useState(
    services.map(() => 0),
  )

  const [selectedImage, setSelectedImage] =
    useState<SelectedImage | null>(null)

  const changeImage = (direction: number) => {
    setImageIndexes((current) =>
      current.map((imageIndex, serviceIndex) => {
        if (serviceIndex !== activeIndex) return imageIndex

        const imageCount = services[serviceIndex].images.length

        return (imageIndex + direction + imageCount) % imageCount
      }),
    )
  }

  const changeModalImage = (direction: number) => {
    setSelectedImage((current) => {
      if (!current) return null

      const images = services[current.serviceIndex].images
      const nextIndex =
        (current.imageIndex + direction + images.length) % images.length

      return {
        ...current,
        imageIndex: nextIndex,
      }
    })
  }

  const closeModal = () => setSelectedImage(null)

  // Modal açıkken klavye kontrolleri ve arka plan kaydırma kontrolü
  useEffect(() => {
    if (!selectedImage) return

    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeModal()
      if (event.key === 'ArrowRight') changeModalImage(1)
      if (event.key === 'ArrowLeft') changeModalImage(-1)
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedImage])

  return (
    <>
      <section id="services" className="services-showcase">
        <Container>
          <div className="showcase-heading">
            <div>
              <span className="showcase-eyebrow">
                ŞENWOOD / NELER YAPIYORUZ?
              </span>

              <h2>
                Üretim alanlarımız<span>.</span>
              </h2>
            </div>

            <p>
              Her malzemede ayrı bir karakter,
              <br />
              her projede aynı özen.
            </p>
          </div>

          <div className="service-accordion">
            {services.map((service, index) => {
              const isActive = activeIndex === index
              const imageIndex = imageIndexes[index]

              return (
                <div
                  key={service.number}
                  className={`service-panel ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  aria-expanded={isActive}
                >
                  <img
                    src={service.images[imageIndex]}
                    alt={service.title}
                    className="service-panel-image"
                  />

                  <div className="service-panel-overlay" />

                  <div className="service-panel-collapsed">
                    <span className="panel-number">
                      {service.number}
                    </span>

                    <span className="panel-vertical-title">
                      {service.title}
                    </span>
                  </div>

                  <div className="service-panel-expanded">
                    <div className="panel-top">
                      <span>{service.subtitle}</span>
                      <span>{service.number} / 04</span>
                    </div>

                    <div className="panel-bottom">
                      <div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                      </div>

                      <div className="panel-actions">
                        <div className="panel-image-controls">
                          <button
                            type="button"
                            aria-label="Önceki fotoğraf"
                            onClick={(event) => {
                              event.stopPropagation()
                              changeImage(-1)
                            }}
                          >
                            <ArrowLeft size={17} />
                          </button>

                          <span>
                            {String(imageIndex + 1).padStart(2, '0')}
                            {' / '}
                            {String(service.images.length).padStart(2, '0')}
                          </span>

                          <button
                            type="button"
                            aria-label="Sonraki fotoğraf"
                            onClick={(event) => {
                              event.stopPropagation()
                              changeImage(1)
                            }}
                          >
                            <ArrowRight size={17} />
                          </button>
                        </div>

                        {/* Fotoğrafı büyütme butonu */}
                        <button
                          type="button"
                          aria-label="Fotoğrafı büyüt"
                          className="panel-zoom-button"
                          onClick={(event) => {
                            event.stopPropagation()

                            setSelectedImage({
                              serviceIndex: index,
                              imageIndex,
                            })
                          }}
                        >
                          <ZoomIn size={21} strokeWidth={1.5} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="showcase-bottom">
            <span>AHŞAPLA ŞEKİLLENEN FİKİRLER</span>

            <a href="#projects">
              Projelerimizi inceleyin
              <ArrowUpRight size={16} />
            </a>
          </div>
        </Container>
      </section>

      {/* FULLSCREEN IMAGE MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#17130F]/95 backdrop-blur-md p-4 md:p-8"
          onClick={closeModal}
          role="presentation"
        >
          <div
            className="relative flex items-center justify-center w-full h-full"
            role="dialog"
            aria-modal="true"
            aria-label="Fotoğraf görüntüleyici"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={closeModal}
              aria-label="Fotoğrafı kapat"
              className="absolute top-2 right-2 md:top-4 md:right-4 z-20 flex items-center justify-center w-11 h-11 rounded-full border border-white/20 bg-white/5 text-white hover:bg-white/15 hover:rotate-90 transition-all duration-300"
            >
              <X size={21} strokeWidth={1.5} />
            </button>

            {/* Previous image */}
            <button
              type="button"
              onClick={() => changeModalImage(-1)}
              aria-label="Önceki fotoğraf"
              className="absolute left-0 md:left-4 z-20 flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/20 bg-black/30 text-white hover:bg-white/15 transition-all duration-300"
            >
              <ArrowLeft size={21} strokeWidth={1.5} />
            </button>

            {/* Image */}
            <div className="flex flex-col items-center justify-center w-full h-full">
              <img
                key={`${selectedImage.serviceIndex}-${selectedImage.imageIndex}`}
                src={
                  services[selectedImage.serviceIndex].images[
                    selectedImage.imageIndex
                  ]
                }
                alt={services[selectedImage.serviceIndex].title}
                className="max-w-[88vw] max-h-[82vh] w-auto h-auto object-contain select-none animate-in fade-in duration-300"
              />

              <div className="absolute bottom-5 md:bottom-7 flex flex-col items-center gap-2 text-white/70">
                <span className="text-[10px] tracking-[0.25em] uppercase">
                  {services[selectedImage.serviceIndex].title}
                </span>

                <span className="text-xs tracking-widest text-white/50">
                  {String(selectedImage.imageIndex + 1).padStart(2, '0')}
                  {' / '}
                  {String(
                    services[selectedImage.serviceIndex].images.length,
                  ).padStart(2, '0')}
                </span>
              </div>
            </div>

            {/* Next image */}
            <button
              type="button"
              onClick={() => changeModalImage(1)}
              aria-label="Sonraki fotoğraf"
              className="absolute right-0 md:right-4 z-20 flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/20 bg-black/30 text-white hover:bg-white/15 transition-all duration-300"
            >
              <ArrowRight size={21} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
