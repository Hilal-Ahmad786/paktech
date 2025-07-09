// src/components/Navbar.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Anasayfa',   href: '/'          },
    { label: 'Hizmetler',  href: '/services' },
    { label: 'Projeler',   href: '/projects' },
    { label: 'Blog',       href: '/blog'     },
    { label: 'Hakkımızda', href: '/about'    },
    { label: 'İletişim',   href: '/contact'  },
  ];

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-gradient-to-r from-[#1E531B]/90 via-[#1E531B]/70 to-[#FFB800]/50 backdrop-blur-md shadow-lg py-2'
          : 'bg-gradient-to-r from-[#1E531B]/50 via-[#1E531B]/30 to-[#FFB800]/20 backdrop-blur-sm py-4'
        }
      `}
    >
      <div className="container mx-auto grid grid-cols-3 items-center px-6">
        {/* LEFT: Logo */}
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/images/logo/logo.png"
            alt="PakTechnology"
            width={120}    // or whatever keeps your 3:1 ratio (e.g. 150×50, 180×60, etc.)
            height={40}
            priority
          />
        </Link>

        {/* CENTER: Desktop nav links */}
        <nav className="hidden md:flex justify-center">
          <ul className="flex items-center gap-8 text-white">
            {links.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <li key={href} className="group relative">
                  <Link
                    href={href}
                    className={`
                      text-lg font-medium transition-colors
                      ${isActive ? 'text-[#FFB800]' : 'hover:text-[#FFB800]'}
                    `}
                  >
                    {label}
                  </Link>
                  <span
                    className={`
                      absolute -bottom-1 left-0 h-0.5 bg-[#FFB800]
                      transition-all duration-300
                      ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                    `}
                  />
                </li>
              );
            })}
          </ul>
        </nav>

        {/* RIGHT: desktop CTA + mobile menu button */}
        <div className="flex justify-end items-center space-x-4">
          {/* Desktop CTA (hidden on <md) */}
          <Link
            href="/contact"
            className="hidden md:inline-block px-6 py-2 rounded-full font-semibold
                       bg-[#FFB800] text-[#1E531B] shadow-lg
                       hover:scale-105 hover:shadow-2xl transition"
          >
            Teklif İste
          </Link>

          {/* Mobile menu toggle (only on <md) */}
          <button
            onClick={() => setOpen(o => !o)}
            className="md:hidden p-2 focus:outline-none"
            aria-label="Mobil Menü"
          >
            {open
              ? <XMarkIcon className="h-6 w-6 text-white" />
              : <Bars3Icon className="h-6 w-6 text-white" />
            }
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      {open && (
        <div
          className="
            fixed inset-0 z-50 flex flex-col items-center justify-center
            bg-[rgba(30,83,27,0.95)] backdrop-blur-xl
            transition-opacity duration-300
          "
        >
          <ul className="flex flex-col items-center gap-8 text-white">
            {links.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-2xl font-medium hover:text-[#FFB800] transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="
                  inline-block px-8 py-3 rounded-full font-semibold
                  bg-[#FFB800] text-[#1E531B] shadow-lg
                  hover:scale-105 hover:shadow-2xl transition
                "
                onClick={() => setOpen(false)}
              >
                Teklif İste
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
