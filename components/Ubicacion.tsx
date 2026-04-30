'use client'

import RevealOnScroll from './RevealOnScroll'
import { useLang } from '@/lib/LangContext'
import { t } from '@/lib/i18n'

export default function Ubicacion() {
  const { lang } = useLang()
  const tr = t(lang)

  return (
    <section className="bg-[#1F382E] py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <RevealOnScroll>
          <div className="text-center mb-16">
            <p className="font-montserrat text-[#8FA67A] text-[10px] uppercase tracking-[0.3em] mb-4">
              {tr.ubicacion.label}
            </p>
            <h2 className="font-garamond text-[#F3EEE3] text-3xl md:text-4xl lg:text-5xl mb-6">
              {tr.ubicacion.title}
            </h2>
            <p className="font-garamond text-[#F3EEE3]/60 text-xl md:text-2xl italic">
              {tr.ubicacion.subtitle}
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">

          {/* Map embed */}
          <RevealOnScroll delay={100} className="h-full">
            <div className="w-full h-full min-h-[400px] overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=5.963901952411886,-75.48546948926987&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(60%) contrast(1.1) brightness(0.85)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Silvarena Glamping — Ubicación"
              />
            </div>
          </RevealOnScroll>

          {/* Info */}
          <RevealOnScroll delay={150}>
            <div className="flex flex-col gap-8">

              {/* Distancias */}
              <div>
                <p className="font-montserrat text-[#F3EEE3]/30 text-[10px] uppercase tracking-[0.25em] mb-4">
                  {tr.ui.distances}
                </p>
                <ul className="flex flex-col gap-3">
                  {tr.ubicacion.cerca.map((lugar) => (
                    <li key={lugar} className="flex items-center gap-3">
                      <span className="w-1 h-1 rounded-full bg-[#8FA67A]" />
                      <span className="font-montserrat text-[#F3EEE3]/65 text-xs tracking-[0.1em]">
                        {lugar}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Aeropuerto */}
              <div className="p-5 border border-[#F3EEE3]/8">
                <p className="font-montserrat text-[#F3EEE3]/30 text-[10px] uppercase tracking-[0.25em] mb-3">
                  {tr.ui.airport}
                </p>
                <p className="font-garamond text-[#F3EEE3]/70 text-lg leading-relaxed">
                  {tr.ubicacion.desde}
                </p>
              </div>

              {/* GPS */}
              <div className="p-5 border border-[#8FA67A]/20">
                <p className="font-montserrat text-[#F3EEE3]/30 text-[10px] uppercase tracking-[0.25em] mb-3">
                  GPS
                </p>
                <p className="font-cormorant italic text-[#8FA67A] text-lg">
                  {tr.ubicacion.gps}
                </p>
                <div className="flex gap-6 mt-3">
                  <a
                    href="https://maps.google.com/?q=5.963901952411886,-75.48546948926987"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-montserrat text-[#F3EEE3]/40 text-[10px] uppercase tracking-[0.2em] hover:text-[#8FA67A] transition-colors duration-300"
                  >
                    {tr.ui.openMaps}
                  </a>
                  <a
                    href="https://waze.com/ul?ll=5.963901952411886,-75.48546948926987&navigate=yes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-montserrat text-[#F3EEE3]/40 text-[10px] uppercase tracking-[0.2em] hover:text-[#8FA67A] transition-colors duration-300"
                  >
                    {tr.ui.openWaze}
                  </a>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
