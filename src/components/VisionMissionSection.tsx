// src/components/VisionMissionSection.tsx
'use client';

import SectionHeader from '@/components/SectionHeader';
import { LightBulbIcon, FlagIcon } from '@heroicons/react/24/solid';

export default function VisionMissionSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Arka planda hafif bir dalga */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#FFB800]/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-[#1E531B]/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Bizim Temelimiz"
          title="Vizyon & Misyon"
          className="text-center mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vizyon */}
          <div className="relative bg-[#1E531B]/5 rounded-2xl p-8 shadow-lg overflow-hidden group">
            {/* Başlık ikonu */}
            <div className="flex items-center gap-3 mb-4">
              <LightBulbIcon className="h-8 w-8 text-[#1E531B]" />
              <h3 className="text-2xl font-semibold text-gray-800">Vizyon</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              Teknoloji ve otomasyonu, KOBİ’lerin ve büyük ölçekli firmaların
              dijital dönüşümünde standart bir mihenk taşı hâline getirmek;  
              modüler altyapımızla herkes için kolay erişilebilir kılmak.
            </p>
            {/* Alt çizgisel vurgu */}
            <div className="absolute bottom-0 left-0 w-20 h-1 bg-[#FFB800] rounded-full group-hover:w-32 transition-all duration-300" />
          </div>

          {/* Misyon */}
          <div className="relative bg-[#FFB800]/10 rounded-2xl p-8 shadow-lg overflow-hidden group">
            <div className="flex items-center gap-3 mb-4">
              <FlagIcon className="h-8 w-8 text-[#FFB800]" />
              <h3 className="text-2xl font-semibold text-gray-800">Misyon</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              Python botlarından React/Next.js uygulamalarına, Shopify
              entegrasyonlarından SEO & Ads stratejilerine kadar;  
              müşterilerimizin iş süreçlerini %90’dan fazla otomasyona
              taşıyarak, ölçülebilir verimlilik ve sürdürülebilir büyüme sağlamak.
            </p>
            <div className="absolute bottom-0 left-0 w-20 h-1 bg-[#1E531B] rounded-full group-hover:w-32 transition-all duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
