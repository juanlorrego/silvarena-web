'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { t, whatsappUrl } from '@/lib/i18n'
import {
  WhatsAppIcon,
  InstagramIcon,
  FacebookIcon,
  TripAdvisorIcon,
  GoogleIcon,
  LeafIcon,
  MapPinIcon,
  MailIcon,
  ClockIcon,
} from '@/components/icons'

export default function Footer() {
  const { lang } = useLang()
  const tr = t(lang)

  return (
    <>
      <footer className="bg-[#1F382E] border-t border-[#F3EEE3]/10">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr_1fr_2fr_1fr_2fr_1fr] gap-0 mb-8">

            {/* Col vacía izquierda */}
            <div className="hidden md:block" />

            {/* Col 2 — Logo + descripción */}
            <div className="flex flex-col gap-10">
              <Image
                src="/logos/logo-horizontal.png"
                alt="Silvarena Glamping"
                width={2743}
                height={868}
                className="w-full h-auto"
              />
              <p className="font-montserrat text-[#F3EEE3]/55 text-[11px] leading-relaxed text-justify">
                {tr.footer.descripcion}
              </p>
            </div>

            {/* Col 2 — Espaciador */}
            <div className="hidden md:block" />

            {/* Col 3 — Navegación */}
            <div>
              <h3 className="font-montserrat text-[#F3EEE3]/40 text-[10px] uppercase tracking-[0.2em] mb-6">
                {tr.nav.navegacion}
              </h3>
              <ul className="flex flex-col gap-4">
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
                      className="flex w-full items-center justify-between font-montserrat text-[#F3EEE3]/60 hover:text-[#F3EEE3] text-[11px] tracking-[0.1em] transition-colors duration-300 group"
                    >
                      <span>{l.label}</span>
                      <span className="text-[#F3EEE3]/25 group-hover:text-[#F3EEE3]/50 transition-colors duration-300 text-base leading-none">›</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 5 — Espaciador */}
            <div className="hidden md:block" />

            {/* Col 6 — Información */}
            <div>
              <h3 className="font-montserrat text-[#F3EEE3]/40 text-[10px] uppercase tracking-[0.2em] mb-6">
                {tr.footer.informacion}
              </h3>
              <div className="flex flex-col gap-4">

                <div className="flex items-start gap-3">
                  <span className="text-[#8FA67A]/60 shrink-0 mt-0.5"><MapPinIcon size={18} /></span>
                  <span className="font-montserrat text-[#F3EEE3]/65 text-[11px] tracking-[0.05em]">
                    {tr.footer.contacto.ubicacion}
                  </span>
                </div>

                <a
                  href={whatsappUrl(tr.messages.checkAvailability)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <span className="text-[#8FA67A]/60 group-hover:text-[#8FA67A] shrink-0 mt-0.5 transition-colors duration-300"><WhatsAppIcon size={18} /></span>
                  <span className="font-montserrat text-[#F3EEE3]/65 group-hover:text-[#8FA67A] text-[11px] tracking-[0.05em] transition-colors duration-300">
                    {tr.footer.contacto.telefono}
                  </span>
                </a>

                <a
                  href={`mailto:${tr.footer.contacto.email}`}
                  className="flex items-start gap-3 group"
                >
                  <span className="text-[#8FA67A]/60 group-hover:text-[#8FA67A] shrink-0 mt-0.5 transition-colors duration-300"><MailIcon size={18} /></span>
                  <span className="font-montserrat text-[#F3EEE3]/65 group-hover:text-[#8FA67A] text-[11px] tracking-[0.05em] transition-colors duration-300">
                    {tr.footer.contacto.email}
                  </span>
                </a>

                <div className="flex items-start gap-3">
                  <span className="text-[#8FA67A]/60 shrink-0 mt-0.5"><ClockIcon size={18} /></span>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-montserrat text-[#F3EEE3]/65 text-[11px] tracking-[0.05em]">
                      {tr.footer.contacto.atencion}
                    </span>
                    <span className="font-cormorant italic text-[#F3EEE3]/35 text-[12px]">
                      {tr.footer.contacto.atencionSub}
                    </span>
                  </div>
                </div>

                {/* Redes sociales */}
                <div className="flex gap-5 pt-2">
                  <a href="https://instagram.com/silvarena.glamping" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#F3EEE3]/45 hover:text-[#8FA67A] transition-colors duration-300">
                    <InstagramIcon size={17} />
                  </a>
                  <a href="https://facebook.com/silvarena" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#F3EEE3]/45 hover:text-[#8FA67A] transition-colors duration-300">
                    <FacebookIcon size={17} />
                  </a>
                  <a href="https://tripadvisor.com" target="_blank" rel="noopener noreferrer" aria-label="TripAdvisor" className="text-[#F3EEE3]/45 hover:text-[#8FA67A] transition-colors duration-300">
                    <TripAdvisorIcon size={17} />
                  </a>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" aria-label="Google" className="text-[#F3EEE3]/45 hover:text-[#8FA67A] transition-colors duration-300">
                    <GoogleIcon size={17} />
                  </a>
                </div>

              </div>
            </div>
            {/* Col vacía derecha */}
            <div className="hidden md:block" />

          </div>

          {/* Barra inferior */}
          <div className="border-t border-[#F3EEE3]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="font-montserrat text-[#F3EEE3]/30 text-[10px] tracking-[0.12em]">
              {tr.footer.legal}
            </p>
            <p className="font-montserrat text-[#F3EEE3]/30 text-[10px] tracking-[0.08em] flex items-center gap-1.5">
              {tr.footer.disenado}
              <LeafIcon size={11} />
            </p>
          </div>
        </div>
      </footer>

      {/* Botón flotante WhatsApp */}
      <a
        href={whatsappUrl(tr.messages.checkAvailability)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full p-3.5 shadow-xl transition-all duration-300 hover:scale-105"
      >
        <WhatsAppIcon size={24} />
      </a>
    </>
  )
}
