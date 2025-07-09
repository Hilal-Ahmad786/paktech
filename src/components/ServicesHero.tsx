// src/components/ServicesHero.tsx
'use client';

import { useEffect, useState } from 'react';
import Button from '@/components/Button';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function ServicesHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(id);
  }, []);

  return (
    <section
      className="
        relative flex items-center justify-center text-center
        pt-40 pb-40 md:pt-48 md:pb-48 min-h-[60vh]
        bg-gradient-to-br from-[#1E531B] via-[#1E531B]/80 to-[#FFB800]
        text-white overflow-hidden
      "
    >
      {/* Slanted accent stripe */}
      <div
        className="
          absolute top-0 left-1/2 w-1/2 h-full
          bg-white/10 transform -translate-x-1/2 -skew-x-12
          pointer-events-none
        "
      />

      {/* Decorative blurs */}
      <div className="absolute -bottom-16 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-16 left-10 w-56 h-56 bg-white/5 rounded-full blur-2xl pointer-events-none" />

      <div
        className={`
          relative z-10 max-w-3xl mx-auto transition-opacity duration-700 ease-out
          ${mounted ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
          Hizmetlerimiz
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Kurumsal web sitelerinden MERN Stack ve e-ticaret çözümlerine;<br/>
          Python otomasyon botlarından AI destekli chatbot’lara kadar<br/>
          tüm dijital ihtiyaçlarınızı modüler şekilde karşılıyoruz.
        </p>
        <Button
          href="/services#automation"
          variant="primary"
          size="lg"
          className="inline-flex items-center space-x-3 px-8 py-4 transform transition hover:scale-105"
        >
          <span className="text-xl font-semibold">Hizmetlerimizi Keşfet</span>
        </Button>
      </div>
    </section>
  );
}
