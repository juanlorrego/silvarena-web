'use client'

import Image from 'next/image'
import { useState } from 'react'
import RevealOnScroll from './RevealOnScroll'
import { useLang } from '@/lib/LangContext'
import { t } from '@/lib/i18n'

const cabanaImages = [
  '/images/cabana-interior-01.jpg',
  '/images/cabana-interior-02.jpg',
  '/images/cabana-interior-03.jpg',
  '/images/cabana-interior-04.jpg',
]

const cabanaJacuzzis = [
  '/images/jacuzzi-01.jpg',
  '/images/jacuzzi-02.jpg',
  '/images/jacuzzi-03.jpg',
  '/images/jacuzzi-01.jpg',
]

export default function Cabanas() {
  const { lang } = useLang()
  const tr = t(lang)
  const [active, setActive] = useState(0)

  return (
    <section id="cabanas" className="bg-[#4A5E3A]/20 py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <RevealOnScroll>
          <div className="text-center mb-4">
            <p className="font-montserrat text-[#8FA67A] text-[10px] uppercase tracking-[0.3em] mb-4">
              {tr.ui.cabanas}
            </p>
            <h2 className="font-garamond text-[#F3EEE3] text-3xl md:text-4xl lg:text-5xl mb-6">
              {tr.cabanas.title}
            </h2>
            <p className="font-montserrat text-[#F3EEE3]/50 text-xs uppercase tracking-[0.1em] max-w-xl mx-auto leading-relaxed">
              {tr.cabanas.subtitle}
            </p>
          </div>
        </RevealOnScroll>

        {/* Tab navigation */}
        <RevealOnScroll delay={100}>
          <div className="flex justify-center gap-0 mt-12 mb-10 border-b border-[#F3EEE3]/10">
            {tr.cabanas.cabanas.map((c, i) => (
              <button
                key={c.nombre}
                onClick={() => setActive(i)}
                className={`font-montserrat text-xs uppercase tracking-[0.2em] px-6 py-4 transition-all duration-300 border-b-2 -mb-px ${
                  active === i
                    ? 'border-[#8FA67A] text-[#F3EEE3]'
                    : 'border-transparent text-[#F3EEE3]/35 hover:text-[#F3EEE3]/60'
                }`}
              >
                {c.nombre}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Cabaña detail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Images */}
          <RevealOnScroll delay={150}>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={cabanaImages[active]}
                  alt={`Cabaña ${tr.cabanas.cabanas[active].nombre} — interior`}
                  fill
                  className="object-cover transition-all duration-700"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden mt-6">
                <Image
                  src={cabanaJacuzzis[active]}
                  alt={`Cabaña ${tr.cabanas.cabanas[active].nombre} — jacuzzi`}
                  fill
                  className="object-cover transition-all duration-700"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          </RevealOnScroll>

          {/* Info */}
          <RevealOnScroll delay={200}>
            <div className="flex flex-col gap-6 md:pl-8">
              <div>
                <h3 className="font-garamond text-[#F3EEE3] text-4xl md:text-5xl mb-4">
                  {tr.cabanas.cabanas[active].nombre}
                </h3>
                <div className="w-8 h-px bg-[#8FA67A] mb-6" />
                <p className="font-cormorant italic text-[#F3EEE3]/70 text-xl leading-relaxed">
                  {tr.cabanas.cabanas[active].frase}
                </p>
              </div>

              {/* Amenidades */}
              <div className="mt-4">
                <p className="font-montserrat text-[#F3EEE3]/30 text-[10px] uppercase tracking-[0.25em] mb-4">
                  {tr.ui.includes}
                </p>
                <ul className="grid grid-cols-2 gap-2">
                  {tr.cabanas.amenidades.map((a) => (
                    <li key={a} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#8FA67A] flex-shrink-0" />
                      <span className="font-montserrat text-[#F3EEE3]/60 text-xs">
                        {a}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nota de preferencia */}
              <div className="mt-4 p-4 border border-[#F3EEE3]/10">
                <p className="font-montserrat text-[#F3EEE3]/40 text-xs leading-relaxed">
                  {tr.cabanas.note}
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
