'use client'

import Image from 'next/image'
import RevealOnScroll from './RevealOnScroll'
import { useLang } from '@/lib/LangContext'
import { t, whatsappUrl } from '@/lib/i18n'
import { WhatsAppIcon } from '@/components/icons'

export default function Reservas() {
  const { lang } = useLang()
  const tr = t(lang)

  return (
    <section className="relative py-28 md:py-36 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/terraza-02.jpg"
          alt="Terraza Silvarena"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1F382E]/80" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <RevealOnScroll>
          <p className="font-montserrat text-[#8FA67A] text-[10px] uppercase tracking-[0.3em] mb-6">
            {tr.ui.reservas}
          </p>
          <h2 className="font-garamond text-[#F3EEE3] text-3xl md:text-5xl mb-6">
            {tr.reservas.title}
          </h2>
          <div className="w-12 h-px bg-[#F3EEE3]/30 mx-auto mb-8" />
          <p className="font-montserrat text-[#F3EEE3]/60 text-xs uppercase tracking-[0.1em] leading-relaxed mb-12 max-w-sm mx-auto">
            {tr.reservas.subtitle}
          </p>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-[#8FA67A]/40 px-5 py-2 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8FA67A]" />
            <span className="font-montserrat text-[#8FA67A] text-[10px] uppercase tracking-[0.2em]">
              {tr.reservas.badge}
            </span>
          </div>

          <br />

          {/* CTA */}
          <a
            href={whatsappUrl(tr.messages.bookReservation)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-montserrat text-[#1F382E] bg-[#F3EEE3] hover:bg-[#8FA67A] text-xs uppercase tracking-[0.25em] px-10 py-5 transition-colors duration-400"
          >
            <WhatsAppIcon size={16} />
            {tr.reservas.cta}
          </a>

          <p className="font-montserrat text-[#F3EEE3]/30 text-[10px] uppercase tracking-[0.15em] mt-6">
            {tr.reservas.note}
          </p>
        </RevealOnScroll>
      </div>
    </section>
  )
}

