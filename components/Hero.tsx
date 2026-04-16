'use client'

import Image from 'next/image'
import { useLang } from '@/lib/LangContext'
import { t, whatsappUrl } from '@/lib/i18n'

export default function Hero() {
  const { lang } = useLang()
  const tr = t(lang)

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-01.jpg"
          alt="Silvarena Glamping — jacuzzi con vista al valle"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1F382E]/60 via-[#1F382E]/30 to-[#1F382E]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto">
        {/* Supertitle */}
        <p className="font-montserrat text-[#F3EEE3]/60 text-[10px] uppercase tracking-[0.35em] mb-8 animate-fadeIn">
          {tr.hero.supertitle}
        </p>

        {/* Logo mark — large icon */}
        <Image
          src="/logos/icon.svg"
          alt="Silvarena"
          width={64}
          height={80}
          className="mb-8 opacity-90 animate-fadeIn"
          style={{ animationDelay: '0.2s' }}
        />

        {/* Wordmark */}
        <h1
          className="font-garamond text-[#F3EEE3] text-5xl md:text-6xl lg:text-7xl uppercase tracking-[0.3em] mb-4 animate-fadeIn"
          style={{ animationDelay: '0.3s' }}
        >
          SILVARENA
        </h1>

        {/* Hairline */}
        <div
          className="w-24 h-px bg-[#F3EEE3]/30 mb-4 animate-fadeIn"
          style={{ animationDelay: '0.4s' }}
        />

        {/* Tagline */}
        <p
          className="font-cormorant italic text-[#8FA67A] text-2xl md:text-3xl mb-10 animate-fadeIn"
          style={{ animationDelay: '0.5s' }}
        >
          {tr.hero.tagline}
        </p>

        {/* Rating */}
        <div
          className="flex items-center gap-2 mb-10 animate-fadeIn"
          style={{ animationDelay: '0.6s' }}
        >
          <span className="text-[#8FA67A] text-base">★★★★★</span>
          <span className="font-montserrat text-[#F3EEE3]/70 text-xs tracking-[0.1em]">
            4.9 · 127 {tr.hero.rating}
          </span>
        </div>

        {/* CTA */}
        <div
          className="flex flex-col items-center gap-3 animate-fadeIn"
          style={{ animationDelay: '0.7s' }}
        >
          <a
            href={whatsappUrl(tr.messages.checkAvailability)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-montserrat text-[#1F382E] bg-[#F3EEE3] hover:bg-[#8FA67A] text-xs uppercase tracking-[0.25em] px-10 py-4 transition-colors duration-400"
          >
            {tr.hero.cta}
          </a>
          <p className="font-montserrat text-[#F3EEE3]/40 text-[10px] uppercase tracking-[0.2em]">
            {tr.hero.ctaSub}
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
        <div className="w-px h-8 bg-[#F3EEE3]" />
      </div>
    </section>
  )
}
