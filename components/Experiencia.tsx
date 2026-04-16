'use client'

import Image from 'next/image'
import RevealOnScroll from './RevealOnScroll'
import { useLang } from '@/lib/LangContext'
import { t } from '@/lib/i18n'

const sectionImages = [
  '/images/exterior-jardin.jpg',
  '/images/aerea.jpg',
  '/images/exterior-pasarela.jpg',
  '/images/jacuzzi-02.jpg',
]

export default function Experiencia() {
  const { lang } = useLang()
  const tr = t(lang)

  return (
    <section id="experiencia" className="bg-[#1F382E] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <RevealOnScroll>
          <p className="font-montserrat text-[#8FA67A] text-[10px] uppercase tracking-[0.3em] text-center mb-4">
            {tr.ui.experiencia}
          </p>
          <h2 className="font-garamond text-[#F3EEE3] text-3xl md:text-4xl lg:text-5xl text-center">
            {tr.experiencia.title}
          </h2>
        </RevealOnScroll>
      </div>

      {/* Alternating full-bleed sections */}
      {tr.experiencia.sections.map((s, i) => (
        <div
          key={s.titulo}
          className={`flex flex-col md:flex-row items-stretch ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-2`}
        >
          {/* Image */}
          <div className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto md:min-h-[420px] overflow-hidden">
            <Image
              src={sectionImages[i]}
              alt={s.titulo}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Subtle tint */}
            <div className="absolute inset-0 bg-[#1F382E]/20" />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 flex items-center bg-[#1F382E] px-8 md:px-16 py-16">
            <RevealOnScroll delay={100}>
              <div>
                <h3 className="font-garamond text-[#F3EEE3] text-2xl md:text-3xl mb-4">
                  {s.titulo}
                </h3>
                <div className="w-8 h-px bg-[#8FA67A] mb-6" />
                <p className="font-cormorant text-[#F3EEE3]/70 text-xl md:text-2xl leading-relaxed">
                  {s.texto}
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      ))}
    </section>
  )
}
