// src/components/TeamSection.tsx
'use client';

import SectionHeader from '@/components/SectionHeader';

type Member = {
  name: string;
  title: string;
  bio: string;
  imgSrc: string;
};

const members: Member[] = [
  {
    name: 'Hilal Ahmad',
    title: 'Proje Lideri & Yazılım Uzmanı',
    bio: 'Projeleri baştan sona yönetip, full-stack çözümler geliştiriyor.',
    imgSrc: '/images/team/hilal.jpeg',
  },
  {
    name: 'Arslan Shahab',
    title: 'Full Stack MERN Developer',
    bio: 'React/Next.js ve Node.js tabanlı uygulamalarda uzman.',
    imgSrc: '/images/team/Arslan.jpeg',
  },
  {
    name: 'Mehmet Ertem',
    title: 'Asst. Prof. MEHMET ERTEM',
    bio: 'Bozok Üniversitesi danışmanı ve teknoloji stratejisti.',
    imgSrc: '/images/team/MehmetErtem.jpg',
  },
];

export default function TeamSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#1E531B]/10 via-white to-[#FFB800]/10">
      {/* Decorative blobs */}
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#FFB800]/20 rounded-full filter blur-3xl pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-[#1E531B]/20 rounded-full filter blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="relative container mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Kurucu & Takım"
          title="Ekibimizle Tanışın"
          className="text-center mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {members.map((m) => (
            <div
              key={m.name}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 pt-16 text-center shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Fotoğraf */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <img
                  src={m.imgSrc}
                  alt={m.name}
                  className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-md"
                />
              </div>

              {/* İsme vurgu */}
              <h4 className="mt-4 text-xl font-semibold text-gray-800">
                {m.name}
              </h4>
              <p className="text-[#1E531B] font-medium">{m.title}</p>

              <p className="mt-3 text-gray-600 leading-relaxed text-sm">
                {m.bio}
              </p>

              {/* Alt çizgi (hover’da genişler) */}
              <div className="mt-6 h-0.5 bg-[#FFB800] w-16 mx-auto group-hover:w-24 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
