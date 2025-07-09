// src/components/ProjectDetailSection.tsx
'use client'

import Button from '@/components/Button'
import { motion } from 'framer-motion'

export default function ProjectDetailSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Slanted background stripe */}
      <div
        className="absolute top-0 left-1/2 w-[120%] h-[60%]
                   bg-gradient-to-r from-[#1E531B]/20 via-[#FFB800]/20 to-[#1E531B]/20
                   -skew-y-6 -translate-x-1/2 pointer-events-none"
      />

      <div className="relative container mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-[#1E531B] mb-8"
        >
          Neden PakTechnology?
        </motion.h2>

        {/* Quick summary */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-3xl mx-auto text-gray-700 text-center text-lg md:text-xl mb-16"
        >
          Modüler otomasyondan modern web ve mobil uygulamalara, SEO’dan
          dijital pazarlamaya kadar tüm dijital ihtiyaçlarınızı tek bir çatı
          altında, uzman ekibimizle hızlı ve güvenilir şekilde karşılıyoruz.
        </motion.p>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: '🔧',
              title: 'Modüler Çözümler',
              points: [
                'Esnek yapı, ihtiyacınıza göre ölçeklendirme',
                'API entegrasyonlarıyla sorunsuz iletişim',
                'Geleceğe yönelik genişletilebilir mimari',
              ],
            },
            {
              icon: '⏱️',
              title: 'Hızlı Teslimat',
              points: [
                'Agile metodoloji ile sprint bazlı geliştirme',
                '360° test ve kalite güvencesi',
                'Canlı yayına kesintisiz geçiş',
              ],
            },
            {
              icon: '🤝',
              title: 'Uzman Destek',
              points: [
                '7/24 teknik bakım ve SLA destek',
                'Kullanıcı eğitimi ve dokümantasyon',
                'Sürekli güncelleme ve iyileştirme',
              ],
            },
          ].map(({ icon, title, points }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.2, duration: 0.5 }}
              className="relative bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
            >
              {/* Floating icon circle */}
              <div
                className="absolute -top-6 left-6 w-12 h-12 flex items-center justify-center
                           bg-gradient-to-br from-[#FFB800] to-[#1E531B] text-white text-2xl rounded-full
                           drop-shadow-lg"
              >
                {icon}
              </div>

              <h4 className="mt-6 mb-4 text-2xl font-bold text-[#1E531B]">
                {title}
              </h4>

              <ul className="space-y-2">
                {points.map((pt) => (
                  <li key={pt} className="flex items-start">
                    <span className="mr-3 text-lg text-[#FFB800]">•</span>
                    <span className="text-gray-600 leading-snug">{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Button href="/services" variant="primary" size="lg">
              Hizmetlerimizi Keşfet
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
