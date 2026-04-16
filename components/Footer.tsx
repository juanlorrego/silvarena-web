'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { t, whatsappUrl } from '@/lib/i18n'
import { WhatsAppIcon } from '@/components/icons'

export default function Footer() {
  const { lang } = useLang()
  const tr = t(lang)

  return (
    <footer className="bg-[#1F382E] border-t border-[#F3EEE3]/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Logo + tagline */}
          <div className="flex flex-col gap-6">
            <Image
              src="/logos/logo-blanco.png"
              alt="Silvarena Glamping"
              width={180}
              height={44}
              className="h-10 w-auto"
            />
            <p className="font-cormorant italic text-[#8FA67A] text-lg leading-relaxed">
              {tr.footer.tagline}
            </p>
            {/* Social */}
            <div className="flex gap-5 mt-2">
              <a
                href="https://instagram.com/silvarena.glamping"
                target="_blank"
                rel="noopener noreferrer"
                className="font-montserrat text-[#F3EEE3]/50 hover:text-[#8FA67A] text-xs uppercase tracking-[0.2em] transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com/silvarena"
                target="_blank"
                rel="noopener noreferrer"
                className="font-montserrat text-[#F3EEE3]/50 hover:text-[#8FA67A] text-xs uppercase tracking-[0.2em] transition-colors duration-300"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="font-montserrat text-[#F3EEE3]/40 text-xs uppercase tracking-[0.2em] mb-6">
              {tr.nav.navegacion}
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { href: '/#cabanas',            label: tr.footer.links.cabanas },
                { href: '/galeria',              label: tr.footer.links.galeria },
                { href: '/preguntas-frecuentes', label: tr.footer.links.faq },
                { href: '/politicas',            label: tr.footer.links.politicas },
                { href: '/contacto',             label: tr.footer.links.contacto },
                { href: '/documentos',           label: tr.footer.links.documentos },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-montserrat text-[#F3EEE3]/60 hover:text-[#F3EEE3] text-xs uppercase tracking-[0.15em] transition-colors duration-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-montserrat text-[#F3EEE3]/40 text-xs uppercase tracking-[0.2em] mb-6">
              {tr.nav.contacto}
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href={whatsappUrl(tr.messages.checkAvailability)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-montserrat text-[#F3EEE3]/70 hover:text-[#8FA67A] text-xs uppercase tracking-[0.15em] transition-colors duration-300"
              >
                <WhatsAppIcon />
                {tr.footer.contacto.whatsapp}
              </a>
              <a
                href={`mailto:${tr.footer.contacto.email}`}
                className="font-montserrat text-[#F3EEE3]/70 hover:text-[#8FA67A] text-xs uppercase tracking-[0.15em] transition-colors duration-300"
              >
                {tr.footer.contacto.email}
              </a>
              <p className="font-montserrat text-[#F3EEE3]/40 text-xs leading-relaxed mt-2">
                San José, La Ceja<br />
                Oriente Antioqueño, Colombia
              </p>
            </div>
          </div>
        </div>

        {/* Hairline + legal */}
        <div className="border-t border-[#F3EEE3]/10 pt-8">
          <p className="font-montserrat text-[#F3EEE3]/30 text-[10px] uppercase tracking-[0.15em] text-center">
            {tr.footer.legal}
          </p>
        </div>
      </div>
    </footer>
  )
}

