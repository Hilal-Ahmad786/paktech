// src/components/ClientJourneyRoadmap.tsx
'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';
import {
  ChatBubbleOvalLeftIcon,
  DevicePhoneMobileIcon,
  CodeBracketSquareIcon,
  RocketLaunchIcon,
  ChartBarSquareIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';

const steps = [
  {
    title: '1. Keşif & Teklif',
    desc: 'İhtiyaçlarınızı analiz edip, ücretsiz kapsamlı teklif oluşturuyoruz.',
    Icon: ChatBubbleOvalLeftIcon,
    color: '#1E531B',
  },
  {
    title: '2. Tasarım & Onay',
    desc: 'UI/UX mockup ve prototipleri birlikte gözden geçirip onaylıyoruz.',
    Icon: DevicePhoneMobileIcon,
    color: '#FFB800',
  },
  {
    title: '3. Geliştirme & Test',
    desc: 'Agile sprintlerle kodlama ve entegre test süreçleri yürütüyoruz.',
    Icon: CodeBracketSquareIcon,
    color: '#1E531B',
  },
  {
    title: '4. Canlıya Geçiş & Eğitim',
    desc: 'Kesintisiz devreye alma, dokümantasyon ve kullanıcı eğitimi sağlıyoruz.',
    Icon: RocketLaunchIcon,
    color: '#FFB800',
  },
  {
    title: '5. Performans Optimizasyonu',
    desc: 'SEO, hız ve güvenlik iyileştirmeleriyle projeyi son haline getiriyoruz.',
    Icon: ChartBarSquareIcon,
    color: '#1E531B',
  },
  {
    title: '6. Sürekli Destek & Büyüme',
    desc: '7/24 SLA desteği ve yeni özellikler için yol haritası oluşturuyoruz.',
    Icon: Cog6ToothIcon,
    color: '#FFB800',
  },
];

export default function ClientJourneyRoadmap() {
  return (
    <section
      className="
        relative py-20
        bg-gradient-to-br from-[#1E531B]/10 via-white to-[#FFB800]/10
        overflow-hidden
      "
    >
      {/* Decorative blobs */}
      <div
        className="
          absolute -top-16 -left-16 w-64 h-64
          bg-[#1E531B]/20 rounded-full
          filter blur-3xl pointer-events-none
        "
      />
      <div
        className="
          absolute -bottom-16 -right-16 w-72 h-72
          bg-[#FFB800]/20 rounded-full
          filter blur-3xl pointer-events-none
        "
      />

      <div className="relative max-w-5xl mx-auto px-4">
        <SectionHeader
          eyebrow="Çalışma Sürecimiz"
          title="Adım Adım Nasıl İlerliyoruz?"
          className="mb-12 text-center"
        />

        <div className="relative grid grid-cols-1 md:grid-cols-9 gap-y-12">
          {/* Vertical spine */}
          <div className="hidden md:block col-span-1 absolute inset-y-0 left-1/2 w-px bg-gray-200 -translate-x-1/2" />

          {steps.map((step, idx) => {
            const isLeft = idx % 2 === 0;
            const { Icon, title, desc, color } = step;

            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`
                  col-span-1 md:col-span-4
                  ${isLeft ? 'md:col-start-1 md:text-right' : 'md:col-start-6 md:text-left'}
                  mx-auto
                `}
              >
                {/* Dot on the spine */}
                <div
                  className="
                    absolute md:relative top-0 md:top-auto left-1/2
                    -translate-x-1/2 md:translate-x-0
                    h-4 w-4 rounded-full ring-4 ring-white
                  "
                  style={{ backgroundColor: color }}
                />

                {/* Card */}
                <div className="relative mt-4 p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition-all">
                  {/* Accent stripe on card side */}
                  <div
                    className={`hidden md:block absolute top-0 bottom-0 w-1 ${
                      isLeft ? 'left-full' : 'right-full'
                    }`}
                    style={{ backgroundColor: color }}
                  />

                  <div className="flex items-center mb-3">
                    <div
                      className="p-2 rounded-full"
                      style={{ backgroundColor: color }}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="ml-3 text-lg font-semibold text-gray-800">
                      {title}
                    </h4>
                  </div>

                  <p className="text-gray-600">{desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
