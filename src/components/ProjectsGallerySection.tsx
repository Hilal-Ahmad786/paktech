// src/components/ProjectsGallerySection.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';
import Button from '@/components/Button';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const categories = [
  { key: 'all',        label: 'Tümü'           },
  { key: 'ecommerce',  label: 'E-Ticaret'       },
  { key: 'automation', label: 'Otomasyon'       },
  { key: 'mobile',     label: 'Mobil'           },
  { key: 'ai',         label: 'AI Çözümleri'    },
  { key: 'web',        label: 'Web & API'       },
  { key: 'design',     label: 'Tasarım & SEO'   },
  { key: 'devops',     label: 'DevOps'          },
];

const projects = [
  {
    title: 'E-Ticaret Platformu',
    image: '/images/Projects/Ecomerece.png',
    summary: 'Shopify+Next.js ile satışları %120 artıran çok dilli mağaza.',
    href: '/projects/e-ticaret-platformu',
    category: 'ecommerce',
  },
  {
    title: 'Python Otomasyon Botu',
    image: '/images/Projects/PythonBot.png',
    summary: 'Manuel veri toplama sürecini %80 hızlandıran scraping akışı.',
    href: '/projects/python-otomasyon-botu',
    category: 'automation',
  },
  {
    title: 'Mobil Finans Uygulaması',
    image: '/images/Projects/Mobile.png',
    summary: 'React Native ile iOS/Android’da 50K+ indirme başarısı.',
    href: '/projects/mobil-finans-uygulamasi',
    category: 'mobile',
  },
  {
    title: 'Makine Öğrenmesi Platformu',
    image: '/images/Projects/Data.png',
    summary: 'Talep tahmininde %95 doğruluk sağlayan ML modeli.',
    href: '/projects/ml-platform',
    category: 'ai',
  },
  {
    title: 'Kurumsal Web Sitesi',
    image: '/images/Projects/Website.png',
    summary: 'Modern tasarım ve SEO optimizasyonlu Next.js sitesi.',
    href: '/projects/kurumsal-web',
    category: 'web',
  },
  {
    title: 'UI/UX Prototip Çalışması',
    image: '/images/Projects/Ui.png',
    summary: 'Figma’da interaktif prototip ile kullanıcı testi.',
    href: '/projects/ui-ux-prototip',
    category: 'design',
  },
  {
    title: 'CI/CD Pipeline Kurulumu',
    image: '/images/Projects/devops.png',
    summary: 'Jenkins & Kubernetes entegre CI/CD hattı.',
    href: '/projects/devops-pipeline',
    category: 'devops',
  },
];

export default function ProjectsGallerySection() {
  const [activeCat, setActiveCat] = useState<'all'|string>('all');
  const filtered = activeCat === 'all'
    ? projects
    : projects.filter(p => p.category === activeCat);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Projeler"
          title="Kategoriye Göre Projeler"
          className="text-center mb-12"
        />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-3">
          {categories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActiveCat(cat.key)}
              className={`
                px-4 py-2 text-sm sm:text-base font-medium rounded-full transition
                ${activeCat === cat.key
                  ? 'bg-[#1E531B] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((proj, idx) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition p-0 flex flex-col"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                <p className="text-gray-600 flex-grow">{proj.summary}</p>
                <div className="mt-4">
                  <Button
                    href={proj.href}
                    variant="outline-primary"
                    size="sm"
                    className="inline-flex items-center space-x-2"
                  >
                    <span>Detayları Gör</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
