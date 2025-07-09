// src/components/TestimonialsSection.tsx
'use client'

import { useEffect, useRef } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import SectionHeader from '@/components/SectionHeader'

const testimonials = [
  { author: 'alazzz12', text: 'Hızlı cevap verip hızlı teslim etti, fiyatı da uygundu. 6 yıldız olsa 6 yıldız verirdim.' },
  { author: 'emlaklive', text: 'Güzel bir çalışma oldu; ayrıca siparişi çok hızlı bir şekilde tamamladı. Kendisine çok teşekkür ederiz.' },
  { author: 'modelmanken', text: 'Başarılı bir çalışma yapıldı, detaylı rapor teslim etti.' },
  { author: 'marday', text: 'Yapılması gerekenler istenilenlere uygun şekilde zamanında teslim edildi. Tavsiye ediyorum.' },
  { author: 'ibrahim3442', text: 'SEO süreçleri hakkında detaylı bir rapor sundu. Başarılar dilerim.' },
  { author: 'cemreceyhan', text: 'Hilal bey çok hızlı ve profesyonelce işi tamamlayıp 1 saat içinde teslim etti.' },
  { author: 'saglam_net', text: 'Çok tecrübeli SEO uzmanı, siteyi iyi yerlere getirdiği için teşekkürler.' },
  { author: 'erdemgul22', text: 'Hizmet istediğimiz şekilde verildi; kendisi başarılı, istekleriniz doğrultusunda hareket ediyor.' },
  { author: 'alper1111', text: 'İletişimi çok iyi; her konuda talebinizi dinleyip yardımcı oluyor. Memnun kaldım.' },
]

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    AOS.init({ once: true, duration: 600 })
  }, [])

  const scrollBy = (offset: number) => {
    containerRef.current?.scrollBy({ left: offset, behavior: 'smooth' })
  }

  return (
    <section className="py-24 bg-gradient-to-br from-[#1E531B]/10 via-white to-[#FFB800]/10 relative">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Müşteri Yorumları"
          title="Bize Güvenenlerin Sesi"
          className="text-center mb-12"
        />

        <div className="relative">
          {/* Prev / Next Buttons */}
          <button
            onClick={() => scrollBy(-320)}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 flex items-center justify-center bg-[#1E531B] text-white rounded-full p-3 shadow-lg hover:bg-[#FFB800] hover:text-[#1E531B] transition"
            aria-label="Önceki"
          >
            ‹
          </button>
          <button
            onClick={() => scrollBy(320)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 flex items-center justify-center bg-[#1E531B] text-white rounded-full p-3 shadow-lg hover:bg-[#FFB800] hover:text-[#1E531B] transition"
            aria-label="Sonraki"
          >
            ›
          </button>

          {/* Scroll-snap Carousel */}
          <div
            ref={containerRef}
            className="flex space-x-6 overflow-x-auto scroll-snap-x snap-mandatory py-4 scrollbar-hide"
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="snap-start flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative"
              >
                <div className="absolute top-4 left-4 text-6xl text-[#FFB800]/20 select-none pointer-events-none">
                  “
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{t.text}</p>
                <div className="mt-4 text-sm font-semibold text-gray-800">
                  — {t.author}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
