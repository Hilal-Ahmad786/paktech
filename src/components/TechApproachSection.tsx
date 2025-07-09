// src/components/TechApproachSection.tsx
'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';
import {
  PencilSquareIcon,
  CodeBracketSquareIcon,
  CheckCircleIcon,
  RocketLaunchIcon,
  LifebuoyIcon,
} from '@heroicons/react/24/outline';

export default function TechApproachSection() {
  const techs = [
    { name: 'Next.js',           logo: '/icons/nextjs.svg'          },
    { name: 'Express.js',        logo: '/icons/express.svg'         },
    { name: 'React Native',      logo: '/icons/react-native.svg'    },
    { name: 'Python',            logo: '/icons/python.svg'          },
    { name: 'spaCy',             logo: '/icons/spacy.svg'           },
    { name: 'NLTK',              logo: '/icons/nltk.svg'            },
    { name: 'TensorFlow',        logo: '/icons/tensorflow.svg'      },
    { name: 'PyTorch',           logo: '/icons/pytorch.svg'         },
    { name: 'Hugging Face',      logo: '/icons/huggingface.svg'     },
    { name: 'OpenCV',            logo: '/icons/opencv.svg'          },
    { name: 'WordPress',         logo: '/icons/wordpress.svg'       },
    { name: 'WooCommerce',       logo: '/icons/woocommerce.svg'     },
    { name: 'Shopify',           logo: '/icons/shopify.svg'         },
    { name: 'MERN Stack',        logo: '/icons/mern.svg'            },
    { name: 'MongoDB',           logo: '/icons/mongodb.svg'         },
    { name: 'Node.js',           logo: '/icons/nodejs.svg'          },
    { name: 'Docker',            logo: '/icons/docker.svg'          },
    { name: 'Kubernetes',        logo: '/icons/kubernetes.svg'      },
    { name: 'AWS',               logo: '/icons/aws.svg'             },
    { name: 'Jenkins',           logo: '/icons/jenkins.svg'         },
    { name: 'GitHub Actions',    logo: '/icons/github-actions.svg'  },
    { name: 'Tailwind CSS',      logo: '/icons/tailwind-css.svg'    },
  ];

  const steps = [
    {
      title: 'Planlama & Tasarım',
      desc: 'Wireframe ve yüksek çözünürlüklü UI/UX prototipleri hazırlanır.',
      Icon: PencilSquareIcon,
    },
    {
      title: 'Geliştirme',
      desc: 'Sprint’ler halinde frontend ve backend uygulaması kodlanır.',
      Icon: CodeBracketSquareIcon,
    },
    {
      title: 'Test & QA',
      desc: 'Otomatik ve manuel testlerle kalite güvence süreci tamamlanır.',
      Icon: CheckCircleIcon,
    },
    {
      title: 'Canlıya Geçiş',
      desc: 'Production ortamına deploy edilip izleme konfigürasyonu yapılır.',
      Icon: RocketLaunchIcon,
    },
    {
      title: 'Bakım & Destek',
      desc: '7/24 izleme, hızlı müdahale ve düzenli güncellemeler sağlanır.',
      Icon: LifebuoyIcon,
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#1E531B]/10 via-white to-[#FFB800]/10 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-[#FFB800]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-[#1E531B]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative container mx-auto px-6">
        <SectionHeader
          eyebrow="Teknoloji & Yaklaşım"
          title="Kullandığımız Araçlar ve Süreç"
          className="text-center mb-16"
        />

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Technology Logos */}
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
            {techs.map(({ name, logo }, idx) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="flex flex-col items-center"
              >
                <img
                  src={logo}
                  alt={name}
                  className="w-12 h-12 object-contain mb-2"
                />
                <span className="text-sm text-gray-700">{name}</span>
              </motion.div>
            ))}
          </div>

          {/* Process Steps */}
          <div className="space-y-8">
            {steps.map(({ title, desc, Icon }, idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-white rounded-full shadow">
                  <Icon className="w-6 h-6 text-[#1E531B]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {title}
                  </h4>
                  <p className="mt-1 text-gray-600 leading-snug">
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
