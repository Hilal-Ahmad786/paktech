// src/components/ContactSection.tsx
'use client';

import { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import Button from '@/components/Button';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // 👉 your API call here
    // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) });
    setSending(false);
    alert('Mesajınız alındı, teşekkürler!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-br from-[#FFB800]/20 via-[#1E531B]/10 to-[#1E531B]/5"
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* subtle diagonal pattern overlay */}
        <div
          className="absolute inset-0 bg-[url('/pattern-diagonal.svg')] opacity-10"
        />
      </div>
      <div className="relative container mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="İletişim"
          title="Projeni Başlatmak İçin Hemen Yaz"
          className="text-center text-gray-800 mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Email */}
            <div className="flex items-start gap-4">
              <svg
                className="h-6 w-6 text-[#1E531B]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 8v2a2 2 0 
                      01-2 2H5a2 2 0 01-2-2v-2" />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-700">Email</h4>
                <p className="text-gray-600">info@paktechnology.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <svg
                className="h-6 w-6 text-[#1E531B]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 5a2 2 0 012-2h2a2 2 0 
                      012 2v2a2 2 0 01-2 2H5a2 2 0 
                      01-2-2V5zm0 8a2 2 0 012-2h2a2 
                      2 0 012 2v2a2 2 0 01-2 2H5a2 
                      2 0 01-2-2v-2zm8-8a2 2 0 
                      012-2h2a2 2 0 012 2v2a2 2 
                      0 01-2 2h-2a2 2 0 
                      01-2-2V5zm0 8a2 2 0 012-2h2a2 
                      2 0 012 2v2a2 2 0 01-2 2h-2a2 
                      2 0 01-2-2v-2z" />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-700">Telefon</h4>
                <p className="text-gray-600">+90 552 567 771 64</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <svg
                className="h-6 w-6 text-[#1E531B]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 
                      9c0 5.25 7 13 7 13s7-7.75 
                      7-13c0-3.87-3.13-7-7-7zm0 
                      9.5a2.5 2.5 0 110-5 
                      2.5 2.5 0 010 5z" />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-700">Adres</h4>
                <p className="text-gray-600">
                  Yozgat Bozok Üniversitesi<br />
                  Bozok Teknopark, Çekerek Yolu 10. Km<br />
                  Yozgat
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="h-60 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18…"
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
                title="Bozok Teknopark"
              />
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <div className="grid grid-cols-1 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Adınız"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB800]"
              />
              <input
                type="email"
                name="email"
                placeholder="E-posta"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB800]"
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Projeniz hakkında kısa bilgi"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB800] resize-none"
              />
            </div>
            <div className="mt-6 text-right">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={sending}
              >
                {sending ? 'Gönderiliyor…' : 'Teklif İste'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
