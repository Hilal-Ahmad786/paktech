// src/components/DemoSection.tsx
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const demoItems = [
  {
    id: 'hepsi',
    title: 'Hepsiburada → Shopify Bot',
    img: '/images/Demo/ShopifyBot.png',
    metrics: '500 ürün, 10 dk içinde senkronizasyon',
  },
  {
    id: 'maps',
    title: 'Google Maps Otel Botu',
    img: '/images/Demo/GoogleAPİ.png',
    metrics: '200 otel, 5 dk içinde veri toplama',
  },
  {
    id: 'seo',
    title: 'SEO & Google Ads Kampanyası',
    img: '/images/Demo/Ankarapert1.png',
    metrics: 'CTR +25%, CPC -15%',
  },
]

export default function DemoSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section className="relative py-8 overflow-hidden bg-white">
      {/* Animated background blobs */}
      <div className="absolute top-[-10%] left-[-20%] w-96 h-96 bg-[#FFB800]/10 rounded-full animate-blob" />
      <div className="absolute bottom-[-15%] right-[-15%] w-80 h-80 bg-[#1E531B]/10 rounded-full animate-blob animation-delay-2000" />

      <div ref={ref} className="container mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center text-[#1E531B] mb-12">
          Gerçek Dünya Örnekleri
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {demoItems.map(({ id, title, img, metrics }) => (
            <motion.div
              key={id}
              variants={item}
              className="group perspective"
            >
              <div
                className="
                  relative bg-white rounded-2xl overflow-hidden
                  shadow-xl transform transition-transform duration-500
                  hover:scale-105 hover:-rotate-1
                  will-change-transform
                "
              >
                {/* shine effect */}
                <span className="
                  absolute inset-0 pointer-events-none bg-gradient-to-r
                  from-white/0 via-white/20 to-white/0 opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-700
                  animate-shine
                " />

                <Image
                  src={img}
                  alt={title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1E531B] mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-600 mb-4">{metrics}</p>
                  <a
                    href="#"
                    className="
                      inline-block px-4 py-2 font-semibold rounded-full
                      bg-[#FFB800] text-[#1E531B]
                      hover:scale-105 transition-transform
                    "
                  >
                    Demo İzle
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
