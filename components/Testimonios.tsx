'use client'

import RevealOnScroll from './RevealOnScroll'
import { useLang } from '@/lib/LangContext'
import { t } from '@/lib/i18n'

const reviews = [
  {
    nombre: 'Valentina R.',
    origen: 'Medellín',
    estrellas: 5,
    texto: 'Un lugar que supera cualquier expectativa. El jacuzzi con vista al valle al atardecer es algo que no olvidaremos. Volvemos pronto.',
    platform: 'Google',
  },
  {
    nombre: 'Camilo & Andrea',
    origen: 'Bogotá',
    estrellas: 5,
    texto: 'Llegamos agotados y nos fuimos renovados. Los jardines, el silencio, el pavo real... Silvarena es exactamente lo que prometía.',
    platform: 'Airbnb',
  },
  {
    nombre: 'Felipe M.',
    origen: 'Ciudad de México',
    estrellas: 5,
    texto: 'La cabaña Sequoia es perfecta. Madera viva, jacuzzi privado, y una vista que te deja sin palabras. El mejor glamping que he visitado en Colombia.',
    platform: 'Google',
  },
]

export default function Testimonios() {
  const { lang } = useLang()
  const tr = t(lang)

  return (
    <section className="bg-[#4A5E3A]/15 py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <RevealOnScroll>
          <div className="text-center mb-6">
            <p className="font-montserrat text-[#8FA67A] text-[10px] uppercase tracking-[0.3em] mb-4">
              {tr.ui.reseñas}
            </p>
            <h2 className="font-garamond text-[#F3EEE3] text-3xl md:text-4xl mb-4">
              {tr.testimonios.title}
            </h2>
            <div className="flex items-center justify-center gap-2">
              <span className="text-[#8FA67A] text-lg">★★★★★</span>
              <span className="font-montserrat text-[#F3EEE3]/50 text-xs tracking-[0.1em]">
                {tr.testimonios.rating}
              </span>
            </div>
          </div>
        </RevealOnScroll>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {reviews.map((r, i) => (
            <RevealOnScroll key={r.nombre} delay={i * 120}>
              <div className="flex flex-col gap-5 p-8 border border-[#F3EEE3]/8 bg-[#1F382E]/40 h-full">
                {/* Stars */}
                <div className="text-[#8FA67A] text-sm tracking-wide">
                  {'★'.repeat(r.estrellas)}
                </div>

                {/* Texto */}
                <p className="font-cormorant text-[#F3EEE3]/75 text-lg leading-relaxed flex-1">
                  &ldquo;{r.texto}&rdquo;
                </p>

                {/* Autor */}
                <div className="flex items-center justify-between pt-4 border-t border-[#F3EEE3]/8">
                  <div>
                    <p className="font-montserrat text-[#F3EEE3] text-xs tracking-[0.1em]">
                      {r.nombre}
                    </p>
                    <p className="font-montserrat text-[#F3EEE3]/35 text-[10px] uppercase tracking-[0.15em] mt-1">
                      {r.origen}
                    </p>
                  </div>
                  <span className="font-montserrat text-[#F3EEE3]/25 text-[10px] uppercase tracking-[0.15em]">
                    {r.platform}
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Platform note */}
        <RevealOnScroll delay={400}>
          <p className="font-montserrat text-[#F3EEE3]/25 text-[10px] uppercase tracking-[0.15em] text-center mt-10">
            {tr.testimonios.platform}
          </p>
        </RevealOnScroll>
      </div>
    </section>
  )
}
