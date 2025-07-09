// src/components/Hero.tsx
'use client'

import { useEffect, useState } from 'react'
import Button from '@/components/Button'

export default function Hero() {
  // simple mount‐fade animation
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(id)
  }, [])

  return (
    <section
      className="
        pt-20              /* offset under fixed navbar (5rem) */
        relative flex items-center justify-center text-center
        min-h-[80vh] px-6
        bg-gradient-to-br from-[#1E531B] via-[#1E531B]/80 to-[#FFB800]/40
        overflow-hidden
      "
    >
      {/* Slanted accent stripe */}
      <div
        className="
          absolute top-0 left-1/2 h-full w-1/3
          bg-[#FFB800]/25
          transform -translate-x-1/2 -skew-x-12
          pointer-events-none
        "
      />

      {/* Main content */}
      <div
        className={`
          relative z-10 max-w-2xl mb-10
          transition-opacity duration-700 ease-out
          ${mounted ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <h1
          className="
            text-4xl md:text-6xl lg:text-7xl font-extrabold
            text-white drop-shadow-lg leading-tight
          "
        >
  PakTech<br/>
  Dijital Dönüşüm & Otomasyon 
        </h1>
        <p
          className="
            mt-4 text-lg md:text-xl text-white/90
            max-w-xl mx-auto
            leading-relaxed
          "
        >
          Python botlardan React / Next.js ve MERN Stack web uygulamalarına,<br/>
          WordPress / WooCommerce’den Shopify entegrasyonuna ve SEO &amp; Google Ads çözümlerine kadar tek adrestesiniz.
        </p>
        <div className="mt-8">
          <Button
            href="/services"
            variant="primary"
            size="lg"
            className="transform transition hover:scale-105"
          >
            Hizmetlerimize Göz At
          </Button>
        </div>
      </div>

      {/* Decorative background blurs */}
      <div
        className="
          absolute bottom-0 right-0 w-72 h-72 bg-white/5 rounded-full
          blur-3xl pointer-events-none
        "
      />
      <div
        className="
          absolute top-1/4 left-0 w-48 h-48 bg-white/10 rounded-full
          blur-2xl pointer-events-none
        "
      />
    </section>
  )
}
