// src/components/ContactHero.tsx
'use client'

import Button from '@/components/Button'

export default function ContactHero() {
  return (
    <section
      className="
        relative flex flex-col items-center justify-center text-center
        min-h-[60vh] px-6 py-20
        bg-gradient-to-br from-[#1E531B] via-[#1E531B]/90 to-[#FFB800]/30
        overflow-hidden
      "
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg">
        Bizimle İletişime Geçin
      </h1>
      <p className="mt-4 max-w-xl text-lg md:text-xl text-white/90">
        Sorularınızı yanıtlamak ve projenizi konuşmak için buradayız.  
        Hemen ücretsiz ön görüşme planlayın!
      </p>
      <div className="mt-8">
        <Button href="#contact-form" variant="light" size="lg">
          Ücretsiz Görüşme Talep Et
        </Button>
      </div>
    </section>
  )
}
