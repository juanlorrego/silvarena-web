'use client'

import RevealOnScroll from './RevealOnScroll'
import { useLang } from '@/lib/LangContext'
import { t } from '@/lib/i18n'

function IconCabana() {
  return (
    <svg className="w-8 h-8 text-[#8FA67A]" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 48 48">
      <path d="M4 44h40M8 44V22L24 8l16 14v22M18 44V32h12v12" />
    </svg>
  )
}

function IconJacuzzi() {
  return (
    <svg className="w-8 h-8 text-[#8FA67A]" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 48 48">
      <rect x="6" y="20" width="36" height="22" rx="2" />
      <path d="M6 28h36M14 28V42M34 28V42" />
      <path d="M14 16c0-4 4-4 4-8M24 16c0-4 4-4 4-8M34 16c0-4 4-4 4-8" />
    </svg>
  )
}

function IconJardin() {
  return (
    <svg className="w-8 h-8 text-[#8FA67A]" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 48 48">
      <path d="M24 44V24" />
      <path d="M24 32c0 0-8-4-8-12 0 0 8 2 8 12z" />
      <path d="M24 28c0 0 8-4 8-12 0 0-8 2-8 12z" />
      <path d="M12 44c0 0 2-8 12-8M36 44c0 0-2-8-12-8" />
      <ellipse cx="24" cy="44" rx="12" ry="2" />
    </svg>
  )
}

export default function Propuesta() {
  const { lang } = useLang()
  const tr = t(lang)

  return (
    <section className="bg-[#1F382E] py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Título */}
        <RevealOnScroll>
          <h2 className="font-garamond text-[#F3EEE3] text-3xl md:text-4xl lg:text-5xl text-center mb-16 leading-snug">
            {tr.propuesta.title}
          </h2>
        </RevealOnScroll>

        {/* Copy */}
        <RevealOnScroll delay={100}>
          <div className="flex flex-col gap-6 text-center mb-20">
            <p className="font-garamond text-[#F3EEE3]/80 text-xl md:text-2xl leading-relaxed">
              {tr.propuesta.p1}
            </p>
            <p className="font-garamond text-[#F3EEE3]/70 text-lg md:text-xl leading-relaxed">
              {tr.propuesta.p2}
            </p>
            <p className="font-cormorant italic text-[#8FA67A] text-xl md:text-2xl leading-relaxed mt-4">
              {tr.propuesta.p3}
            </p>
          </div>
        </RevealOnScroll>

        {/* Hairline */}
        <div className="w-16 h-px bg-[#8FA67A]/40 mx-auto mb-20" />

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { Icon: IconCabana,  title: tr.propuesta.feature1,  sub: tr.propuesta.feature1Sub,  delay: 0 },
            { Icon: IconJacuzzi, title: tr.propuesta.feature2,  sub: tr.propuesta.feature2Sub,  delay: 150 },
            { Icon: IconJardin,  title: tr.propuesta.feature3,  sub: tr.propuesta.feature3Sub,  delay: 300 },
          ].map(({ Icon, title, sub, delay }) => (
            <RevealOnScroll key={title} delay={delay}>
              <div className="flex flex-col items-center text-center gap-4">
                <Icon />
                <h3 className="font-garamond text-[#F3EEE3] text-lg tracking-wide">
                  {title}
                </h3>
                <p className="font-montserrat text-[#F3EEE3]/45 text-xs uppercase tracking-[0.15em] whitespace-pre-line">
                  {sub}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
