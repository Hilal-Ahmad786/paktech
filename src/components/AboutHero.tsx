// src/components/AboutHero.tsx
'use client';

import Button from '@/components/Button';

export default function AboutHero() {
  return (
    <section
      className="
        relative flex flex-col items-center text-center
        py-32 px-6
        bg-gradient-to-br from-[#1E531B] via-[#1E531B]/90 to-[#FFB800]/40
        overflow-hidden
      "
    >
      {/* Soft pattern overlay */}
      <div className="absolute inset-0 bg-[url('/pattern-diagonal.svg')] opacity-5 pointer-events-none" />

      <h1 className="relative z-10 text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg">
        PakTechnology’e Hoş Geldiniz
      </h1>
      <p className="relative z-10 mt-4 max-w-2xl text-lg md:text-xl text-white/90">
        KOBİ’leri dijitalde güçlendiren, modüler otomasyon ve e-ticaret çözümlerimizle <br/>
        verimliliği + hız + sürdürülebilirlik sunuyoruz.
      </p>
      <div className="relative z-10 mt-8">
        <Button href="/contact" variant="primary" size="lg">
          Ücretsiz Danışmanlık Al
        </Button>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
      <div className="absolute bottom-10 left-8 w-60 h-60 bg-white/5 rounded-full blur-3xl" />
    </section>
  );
}
