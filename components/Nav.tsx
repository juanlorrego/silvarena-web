'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { t, whatsappUrl } from '@/lib/i18n'

export default function Nav() {
  const { lang, setLang } = useLang()
  const tr = t(lang)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleLang = () => setLang(lang === 'es' ? 'en' : 'es')
  const ctaHref = whatsappUrl(tr.messages.checkAvailability)

  const navLinks = [
    { href: '/#cabanas',     label: tr.nav.cabanas },
    { href: '/#experiencia', label: tr.nav.experiencia },
    { href: '/galeria',      label: tr.nav.galeria },
    { href: '/contacto',     label: tr.nav.contacto },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#1F382E]/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logos/logo-blanco.png"
            alt="Silvarena Glamping"
            width={200}
            height={48}
            className="h-24 w-auto"
            priority
          />
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-montserrat text-[#F3EEE3] text-xs uppercase tracking-[0.2em] hover:text-[#8FA67A] transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={toggleLang}
            className="font-montserrat text-[#F3EEE3]/60 text-xs uppercase tracking-[0.2em] hover:text-[#F3EEE3] transition-colors duration-300"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-montserrat text-white bg-[#8FA67A] hover:bg-[#4A5E3A] text-xs uppercase tracking-[0.2em] px-5 py-2.5 transition-colors duration-300"
          >
            {tr.nav.reservar}
          </a>
        </div>

        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleLang}
            className="font-montserrat text-[#F3EEE3]/60 text-xs uppercase tracking-[0.2em]"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
            className="text-[#F3EEE3] flex flex-col gap-1.5 p-1"
          >
            <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#1F382E]/98 backdrop-blur-sm border-t border-[#F3EEE3]/10">
          <ul className="px-6 py-6 flex flex-col gap-5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-montserrat text-[#F3EEE3] text-xs uppercase tracking-[0.2em] hover:text-[#8FA67A] transition-colors duration-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="inline-block font-montserrat text-white bg-[#8FA67A] hover:bg-[#4A5E3A] text-xs uppercase tracking-[0.2em] px-5 py-2.5 transition-colors duration-300"
              >
                {tr.nav.reservar}
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
