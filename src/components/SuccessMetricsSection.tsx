// src/components/SuccessMetricsSection.tsx
'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';
import {
  CheckBadgeIcon,
  ArrowTrendingUpIcon,
  ClockIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const metrics = [
  {
    value: '50+',
    label: 'Tamamlanan Proje',
    Icon: CheckBadgeIcon,
    color: '#FFB800',
  },
  {
    value: '+120%',
    label: 'Ortalama Satış Artışı',
    Icon: ArrowTrendingUpIcon,
    color: '#1E531B',
  },
  {
    value: '90%+',
    label: 'Otomasyon ile Tasarruf',
    Icon: ClockIcon,
    color: '#0070F3',
  },
  {
    value: '100%',
    label: 'Müşteri Memnuniyeti',
    Icon: UserGroupIcon,
    color: '#FF5722',
  },
];

export default function SuccessMetricsSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-[#FFB800]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-[#1E531B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative container mx-auto px-6">
        <SectionHeader
          eyebrow="Başarı Metrikleri"
          title="Somut Sonuçlar"
          className="text-center mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {metrics.map(({ value, label, Icon, color }, idx) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div
                className="p-4 rounded-full mb-4"
                style={{ backgroundColor: `${color}20` }}
              >
                <Icon className="w-8 h-8" style={{ color }} />
              </div>
              <span className="text-4xl font-extrabold text-gray-800">
                {value}
              </span>
              <span className="mt-2 text-gray-600">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
