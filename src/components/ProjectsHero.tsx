// src/components/ProjectsHero.tsx
'use client';

import { useEffect, useState } from 'react';
import Button from '@/components/Button';

export default function ProjectsHero() {
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
        Öne Çıkan Projelerimiz
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
        Modüler otomasyon, e-ticaret, AI ve mobil çözümlerimizden seçtiğimiz<br/>
        başarı hikâyelerini aşağıda keşfedin.
        </p>
        <Button
          href="/services#automation"
          variant="primary"
          size="lg"
          className="inline-flex items-center space-x-3 px-8 py-4 transform transition hover:scale-105"
        >
          <span className="text-xl font-semibold">Tüm Projeler</span>
        </Button>
      </div>
    </section>
  );
}
