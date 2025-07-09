// src/components/WhyUsSection.tsx
'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';
import {
  Cog6ToothIcon,
  BoltIcon,
  ReceiptPercentIcon,
  LifebuoyIcon,
} from '@heroicons/react/24/outline';

const points = [
  {
    title: '%90+ Otomasyon ile Zaman Tasarrufu',
    Icon: Cog6ToothIcon,
    color: '#1E531B',
  },
  {
    title: 'Agile Sprint’lerde 4–6 Hafta Teslim',
    Icon: BoltIcon,
    color: '#FFB800',
  },
  {
    title: 'KOBİ’lere Özel KDV Muafiyeti',
    Icon: ReceiptPercentIcon,
    color: '#0070F3',
  },
  {
    title: '7/24 SLA Destek & Entegrasyon',
    Icon: LifebuoyIcon,
    color: '#FF5722',
  },
];

export default function WhyUsSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#FFB800]/10 to-[#1E531B]/10 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-[#FFB800]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-[#1E531B]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative container mx-auto px-6 text-center z-10">
        <SectionHeader
          eyebrow="Neden Biz?"
          title="Size Fark Katan Avantajlar"
          className="mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map(({ title, Icon, color }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition p-6 flex flex-col items-center"
            >
              <div
                className="p-4 rounded-full mb-4"
                style={{ backgroundColor: `${color}20` }}
              >
                <Icon className="w-8 h-8" style={{ color }} />
              </div>
              <p className="font-semibold text-gray-800">{title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
