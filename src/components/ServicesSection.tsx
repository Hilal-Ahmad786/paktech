// src/components/ServicesSection.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import SectionHeader from '@/components/SectionHeader';
import Button from '@/components/Button';

import {
  Cog6ToothIcon,
  ChartBarSquareIcon,
  CubeIcon,
  PhotoIcon,
  ChatBubbleBottomCenterTextIcon,
  LinkIcon,
  ComputerDesktopIcon,
  CodeBracketSquareIcon,
  DevicePhoneMobileIcon,
  ShoppingCartIcon,
  PencilSquareIcon,
  MegaphoneIcon,
  CloudArrowUpIcon,
} from '@heroicons/react/24/outline';

const tabs = [
  { key: 'automation', label: 'Otomasyon & Veri' },
  { key: 'ai',         label: 'AI Çözümleri'    },
  { key: 'web',        label: 'Web & Mobil'      },
  { key: 'design',     label: 'Tasarım & Pazarlama' },
  { key: 'ecommerce',  label: 'E-Ticaret & DevOps' },
];

const services = [
  {
    title: 'Python Otomasyon & Masaüstü Uygulamalar',
    icon: Cog6ToothIcon,
    description:
      'Telegram, Instagram ve web scraping botları ile Python tabanlı uçtan uca otomasyon çözümleri.',
    href: '/services#automation',
    color: '#1E531B',
    category: 'automation',
  },
  {
    title: 'Veri Analizi & Raporlama',
    icon: ChartBarSquareIcon,
    description:
      'Python ile detaylı veri analizi, görselleştirilmiş grafikler ve Excel/PDF raporları.',
    href: '/services#analysis',
    color: '#FFB800',
    category: 'automation',
  },
  {
    title: 'Makine Öğrenmesi & Tahmin Sistemleri',
    icon: CubeIcon,
    description:
      'Özelleştirilmiş ML modelleri ve talep tahmin çözümleri.',
    href: '/services#ml',
    color: '#0070F3',
    category: 'ai',
  },
  {
    title: 'Generative AI & Görüntü İşleme',
    icon: PhotoIcon,
    description:
      'Custom generative AI modelleri ve görüntü işleme çözümleri.',
    href: '/services#genai',
    color: '#9C27B0',
    category: 'ai',
  },
  {
    title: 'AI Chatbot & NLP Çözümleri',
    icon: ChatBubbleBottomCenterTextIcon,
    description:
      'Doğal dil işleme ile akıllı chatbot’lar ve generative AI destekli kopya üretimi.',
    href: '/services#chatbot',
    color: '#FF5722',
    category: 'ai',
  },
  {
    title: 'API Geliştirme & Entegrasyon',
    icon: LinkIcon,
    description:
      'RESTful servisler ve üçüncü taraf API entegrasyonlarıyla sistemlerinizi birbirine bağlayın.',
    href: '/services#api',
    color: '#E10098',
    category: 'web',
  },
  {
    title: 'Web Uygulama Geliştirme',
    icon: ComputerDesktopIcon,
    description:
      'React, Next.js kullanarak modern, SEO uyumlu web uygulamaları tasarlarız.',
    href: '/services#webdev',
    color: '#00C853',
    category: 'web',
  },
  {
    title: 'Full-Stack MERN Uygulamaları',
    icon: CodeBracketSquareIcon,
    description:
      'MongoDB, Express, React ve Node.js ile uçtan uca MERN projeleri geliştiriyoruz.',
    href: '/services#mern',
    color: '#3F51B5',
    category: 'web',
  },
  {
    title: 'Mobil Uygulama Geliştirme',
    icon: DevicePhoneMobileIcon,
    description:
      'React Native ile hem iOS hem Android platformlarına özel mobil uygulamalar.',
    href: '/services#mobile',
    color: '#009688',
    category: 'web',
  },
  {
    title: 'UI/UX Tasarım & Prototip',
    icon: PencilSquareIcon,
    description:
      'Kullanıcı odaklı ara yüz tasarımı ve interaktif prototip hazırlığı.',
    href: '/services#design',
    color: '#03A9F4',
    category: 'design',
  },
  {
    title: 'SEO & Dijital Pazarlama',
    icon: MegaphoneIcon,
    description:
      'Teknik SEO, içerik optimizasyonu ve Google/Meta Ads kampanyaları ile görünürlük sağlar.',
    href: '/services#seo',
    color: '#D84315',
    category: 'design',
  },
  {
    title: 'E-Ticaret Çözümleri',
    icon: ShoppingCartIcon,
    description:
      'WooCommerce ve Shopify entegrasyonu ile hızlı, çok dilli mağazalar kurarız.',
    href: '/services#ecommerce',
    color: '#6200EA',
    category: 'ecommerce',
  },
  {
    title: 'DevOps & CI/CD Otomasyonu',
    icon: CloudArrowUpIcon,
    description:
      'Otomatik test, deploy ve entegrasyon pipeline’ları ile geliştirme süreçlerinizi hızlandırın.',
    href: '/services#devops',
    color: '#8BC34A',
    category: 'ecommerce',
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  useEffect(() => {
    AOS.init({ once: true, duration: 600 });
  }, []);

  const filtered = services.filter(svc => svc.category === activeTab);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gray-50 overflow-hidden"
    >
      {/* Animated blobs */}
      <div className="absolute -top-16 -left-16 w-80 h-80 bg-[#FFB800]/10 rounded-full animate-blob" />
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-[#1E531B]/10 rounded-full animate-blob animation-delay-2000" />

      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Hizmetler"
          title="Size Özel Hizmetlerimiz"
          className="text-center mb-8"
        />

        {/* Category Tabs */}
        <div className="flex justify-center mb-12 space-x-4">
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 font-medium rounded-full transition ${
                activeTab === tab.key
                  ? 'bg-[#1E531B] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.href}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="relative group perspective"
              >
                <div
                  className="
                    bg-white rounded-xl overflow-hidden border-t-4
                    shadow-sm transform transition-all duration-500
                    hover:shadow-xl hover:-translate-y-2 hover:rotate-1
                  "
                  style={{ borderTopColor: svc.color }}
                >
                  <span
                    className="
                      absolute inset-0 pointer-events-none
                      bg-gradient-to-r from-white/0 via-white/20 to-white/0
                      opacity-0 group-hover:opacity-100 transition-opacity duration-700
                      animate-shine
                    "
                  />

                  <div className="flex items-center justify-center p-6">
                    <Icon className="w-10 h-10" style={{ color: svc.color }} />
                  </div>

                  <div className="p-6 pt-0 flex flex-col">
                    <h3 className="text-xl font-bold mb-2">{svc.title}</h3>
                    <p className="text-gray-600 flex-grow">{svc.description}</p>
                    <div className="mt-4">
                      <Button
                        href={svc.href}
                        size="sm"
                        style={{
                          backgroundColor: svc.color,
                          color: '#fff',
                        }}
                      >
                        Detayları Gör
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
