'use client'

import Image from 'next/image'
import { useLang } from '@/lib/LangContext'
import { t, whatsappUrl } from '@/lib/i18n'
import { NatureIcon, MountainIcon, BedIcon, FireIcon } from '@/components/icons'

const featureIcons = [NatureIcon, MountainIcon, BedIcon, FireIcon]

export default function Hero() {
  const { lang } = useLang()
  const tr = t(lang)

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero_background.png"
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
        {/* Stacked logo */}
        <Image
          src="/logos/satcked.png"
          alt="Silvarena Glamping"
          width={1357}
          height={1219}
          className="mb-6 opacity-95 animate-fadeIn w-[560px] max-w-[90vw]"
          priority
        />

        {/* CTA */}
        <div
          className="flex flex-col items-center gap-3 animate-fadeIn"
          style={{ animationDelay: '0.4s' }}
        >
          <a
            href={whatsappUrl(tr.messages.checkAvailability)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-montserrat text-white bg-[#8FA67A] hover:bg-[#4A5E3A] text-xs uppercase tracking-[0.25em] px-10 py-4 transition-colors duration-400"
          >
            {tr.hero.cta}
          </a>
          <p className="font-montserrat text-[#F3EEE3]/40 text-[10px] uppercase tracking-[0.2em]">
            {tr.hero.ctaSub}
          </p>
          {/* Rating */}
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[#8FA67A] text-base">★★★★★</span>
            <span className="font-montserrat text-[#F3EEE3]/70 text-xs tracking-[0.1em]">
              4.9 · 127 {tr.hero.rating}
            </span>
          </div>
        </div>

        {/* Feature icons */}
        <div
          className="flex items-start justify-center gap-8 mt-10 animate-fadeIn"
          style={{ animationDelay: '0.7s' }}
        >
          {tr.hero.features.map((f, i) => {
            const Icon = featureIcons[i]
            return (
              <div key={i} className="flex flex-col items-center gap-2 w-20 text-[#F3EEE3]/70">
                <Icon size={28} />
                <span className="font-montserrat text-[#F3EEE3]/70 text-[9px] uppercase tracking-[0.15em] text-center whitespace-pre-line">
                  {f.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="font-montserrat text-[#F3EEE3] text-[9px] uppercase tracking-[0.3em]">
          {tr.hero.discoverMore}
        </span>
        <svg
          className="animate-bounce"
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
          stroke="#F3EEE3"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="1,1 8,9 15,1" />
        </svg>
      </div>
    </section>
  )
}
