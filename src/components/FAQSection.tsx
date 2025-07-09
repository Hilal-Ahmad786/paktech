// src/components/FAQSection.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid';
import SectionHeader from '@/components/SectionHeader';

const faqs = [
  {
    question: 'Nasıl KDV Muafiyeti işler?',
    answer:
      'KDV muafiyeti, projenizin koşullarına göre TÜBİTAK veya ilgili bakanlık onayı gerektirir. Başvuru sürecini sizin için yönetiyor ve gerekli belgelerin hazırlanmasına yardımcı oluyoruz.',
  },
  {
    question: 'Hangi teknolojileri kullanıyorsunuz?',
    answer:
      'Projelerimizde Python, React, Next.js, Node.js, MongoDB, MERN Stack, React Native, Shopify, WooCommerce ve çeşitli AI/ML kütüphanelerini kullanıyoruz. İhtiyacınıza özel en uygun teknolojiyi seçiyoruz.',
  },
  {
    question: 'Proje maliyeti nasıl belirleniyor?',
    answer:
      'Maliyet, projenin kapsamına, modül sayısına ve karmaşıklığına göre sprint bazlı tekliflerle netleştirilir. Ücretsiz ön analiz sonrası detaylı bir taslak teklif sunuyoruz.',
  },
  {
    question: 'Geliştirme süreci ne kadar sürer?',
    answer:
      'Ortalama proje süresi, modüllerin kapsamına bağlı olarak 4–8 haftadır. Her sprint sonunda düzenli geri bildirim alarak süreci hızlandırıyoruz.',
  },
  {
    question: 'Revizyonlar ve değişiklik talepleri nasıl yönetiliyor?',
    answer:
      'Her sprint sonunda belirlenen revizyon hakları çerçevesinde değişiklik taleplerini değerlendiriyor, sonraki sprint planına alıyoruz.',
  },
  {
    question: 'Veri güvenliği ve gizliliği nasıl sağlanıyor?',
    answer:
      'Tüm projelerde HTTPS, SSL, veri şifreleme, erişim kontrolleri ve düzenli güvenlik taramaları uyguluyoruz. Gizlilik anlaşmaları (NDA) imzalıyoruz.',
  },
  {
    question: 'Hizmet sonrası destek ve bakım nasıl işliyor?',
    answer:
      'Canlıya geçiş sonrası 7/24 SLA desteği sağlıyoruz. Periyodik bakım, güncelleme ve yeni özellik ekleme için destek paketlerimiz bulunuyor.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-24 bg-gradient-to-b from-[#1E531B]/10 to-white">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Yardım & Destek"
          title="Sıkça Sorulan Sorular"
          className="text-center mb-12"
        />

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`
                  bg-white rounded-xl shadow-lg overflow-hidden border-l-4
                  transition-colors
                  ${isOpen ? 'border-[#FFB800]' : 'border-transparent'}
                `}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 focus:outline-none"
                >
                  <span className="text-lg font-medium text-gray-800">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <MinusIcon className="w-6 h-6 text-[#FFB800]" />
                  ) : (
                    <PlusIcon className="w-6 h-6 text-[#1E531B]" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="px-6 pb-6 text-gray-700 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
