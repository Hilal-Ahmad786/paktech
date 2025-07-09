// src/components/Footer.tsx
'use client';

import Link from 'next/link';
import { ChevronUpIcon } from '@heroicons/react/24/solid';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-[#1E531B]/90 to-[#1E531B]/80 text-white">
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#FFB800]">Hızlı Linkler</h4>
          <ul className="space-y-2">
            {[
              { label: 'Anasayfa', href: '/' },
              { label: 'Hizmetler', href: '/services' },
              { label: 'Hakkımızda', href: '/about' },
              { label: 'İletişim', href: '/contact' },
            ].map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className="hover:text-[#FFB800] transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#FFB800]">İletişim</h4>
          <address className="not-italic space-y-2">
            <p>PakTechnology Yazılım Ltd. Şti.</p>
            <p>Yozgat Bozok Üniversitesi</p>
            <p>Bozok Teknopark, Çekerek Yolu 10. Km</p>
            <p>+90 552 567 771 64</p>
            <p>
              <Link href="mailto:info@paktechnology.com" className="hover:text-[#FFB800] transition-colors">
                info@paktechnology.com
              </Link>
            </p>
          </address>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#FFB800]">Bizi Takip Et</h4>
          <div className="flex items-center space-x-4 text-2xl">
            <Link href="https://www.instagram.com/yourprofile" target="_blank" className="hover:text-[#FFB800] transition-colors">
              <FaInstagram />
            </Link>
            <Link href="https://www.linkedin.com/in/yourprofile" target="_blank" className="hover:text-[#FFB800] transition-colors">
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#FFB800]/50" />

      {/* Bottom Bar */}
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm">
        <p>© {new Date().getFullYear()} PakTechnology. Tüm hakları saklıdır.</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mt-4 md:mt-0 inline-flex items-center gap-1 text-[#FFB800] hover:text-white transition-colors"
          aria-label="Sayfanın başına dön"
        >
          <ChevronUpIcon className="h-5 w-5" />
          Üste Dön
        </button>
      </div>
    </footer>
  );
}
