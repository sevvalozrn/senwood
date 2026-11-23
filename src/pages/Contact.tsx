
import { type FormEvent } from 'react'
import { motion } from 'motion/react'
import { ArrowRight, ArrowUpRight, Mail, MessageCircle } from 'lucide-react'

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // E-posta gönderim sistemi daha sonra eklenecek.
  }

  return (
    <section id="contact" className="contact-section">

      {/* Arka plan dekoratif katmanlar */}
      <div className="contact-bg-panel" />
      <div className="contact-bg-glow" />

      <div className="contact-inner">
        <div className="contact-grid">

          {/* SOL TARAF */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="contact-left"
          >
            <h2 className="contact-heading">
              Bir fikriniz
              <br />
              mi var?
              <br />
              <span>İletişime Geçin.</span>
            </h2>

            <p className="contact-intro">
              Yeni bir proje, özel bir tasarım veya aklınızdaki bir fikir...
              Bize anlatın. İhtiyaçlarınıza birlikte en uygun çözümü bulalım.
            </p>

            {/* İletişim seçenekleri */}
            <div className="contact-options">

              <div className="contact-option">
                <div className="contact-option-row">
                  <Mail size={20} strokeWidth={1.3} className="contact-option-icon" />
                  <div>
                    <p className="contact-option-label">E-posta</p>
                    <p className="contact-option-text">
                      Bize e-posta yoluyla ulaşabilirsiniz.
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact-option">
                <p className="contact-alt-label">Alternatif iletişim</p>

                <button
                  type="button"
                  disabled
                  className="contact-whatsapp-btn"
                >
                  <span>
                    <MessageCircle size={19} strokeWidth={1.4} />
                    <span className="contact-whatsapp-label">
                      WhatsApp üzerinden ulaşın
                    </span>
                  </span>
                  <ArrowUpRight size={17} />
                </button>
              </div>

            </div>
          </motion.div>

          {/* SAĞ TARAF — FORM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="contact-form-card"
          >
            <div className="contact-form-header">
              <span className="contact-form-eyebrow">İletişim formu</span>
              <h3 className="contact-form-title">Bize yazın.</h3>
              <p className="contact-form-desc">
                Formu doldurun, projenizi ve beklentilerinizi bizimle paylaşın.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">

              {/* Ad Soyad */}
              <div className="contact-field">
                <label htmlFor="contact-name" className="contact-label">
                  Adınız Soyadınız
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Adınızı ve soyadınızı yazın"
                  className="contact-input"
                />
              </div>

              {/* E-posta */}
              <div className="contact-field">
                <label htmlFor="contact-email" className="contact-label">
                  E-posta Adresiniz
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="ornek@email.com"
                  className="contact-input"
                />
              </div>

              {/* Konu */}
              <div className="contact-field">
                <label htmlFor="contact-subject" className="contact-label">
                  İletişim Konusu
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  required
                  defaultValue=""
                  className="contact-select"
                >
                  <option value="" disabled>Konu seçin</option>
                  <option value="mobilya">Mobilya ve ürünler</option>
                  <option value="bungalov">Bungalov projeleri</option>
                  <option value="ozel-tasarim">Özel tasarım ve projeler</option>
                  <option value="diger">Diğer</option>
                </select>
              </div>

              {/* Mesaj */}
              <div className="contact-field">
                <label htmlFor="contact-message" className="contact-label">
                  Mesajınız
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={3}
                  placeholder="Bize projenizden bahsedin..."
                  className="contact-textarea"
                />
              </div>

              {/* Gönder */}
              <button type="submit" className="contact-submit">
                <span className="contact-submit-label">Mesajınızı gönderin</span>
                <ArrowRight
                  size={18}
                  strokeWidth={1.4}
                  className="contact-submit-icon"
                />
              </button>

              <p className="contact-form-note">
                Formun gönderim özelliği henüz aktif değildir.
              </p>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
