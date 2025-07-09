// src/components/FeaturedCaseStudySection.tsx
'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';
import Button from '@/components/Button';

export default function FeaturedCaseStudySection() {
  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-[#FFB800]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-[#1E531B]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Vaka İncelemesi"
          title="Öne Çıkan Proje: E-Ticaret Platformu"
          className="text-center mb-16"
        />

        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-[#1E531B]">
              Sorun & Hedef
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Mevcut e-ticaret siteleri yavaş açılıyor, çok dilli içerik desteği yok
              ve kullanıcı deneyimi eski. Hedefimiz; Next.js ve Shopify entegrasyonuyla
              %50 daha hızlı, çok dilli, SEO odaklı bir platform geliştirmekti.
            </p>

            <h3 className="text-2xl font-bold text-[#1E531B]">
              Çözüm & Yaklaşım
            </h3>
            <p className="text-gray-700 leading-relaxed">
              • Next.js ile SSR ve ISR optimizasyonu<br/>
              • Shopify storefront API entegrasyonu<br/>
              • Headless CMS ile çoklu dil yönetimi<br/>
              • Tailwind CSS ile mobil öncelikli tasarım
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
              {/* Metrics */}
              <div className="flex flex-col items-center">
                <span className="text-4xl font-extrabold text-[#FFB800]">+120%</span>
                <span className="mt-2 text-gray-600 text-sm">Satış Artışı</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-extrabold text-[#FFB800]">0.8s</span>
                <span className="mt-2 text-gray-600 text-sm">Şipariş Önyüzü Yükleme Süresi</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-extrabold text-[#FFB800]">+30%</span>
                <span className="mt-2 text-gray-600 text-sm">Organik Trafik</span>
              </div>
            </div>

            <Button
              href="/projects/e-ticaret-platformu"
              variant="primary"
              size="md"
              className="mt-8 inline-flex items-center space-x-2"
            >
              <span>Daha Fazla Oku</span>
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                →
              </motion.span>
            </Button>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="/images/featured-case-ecommerce.png"
              alt="E-Ticaret Platformu"
              className="w-full rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
