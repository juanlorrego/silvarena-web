'use client'

import Link from 'next/link'
import PageLayout from '@/components/PageLayout'
import { useLang } from '@/lib/LangContext'
import { t, whatsappUrl } from '@/lib/i18n'
import { WhatsAppIcon } from '@/components/icons'

function ContactoContent() {
  const { lang } = useLang()
  const tr = t(lang)

  return (
    <main className="bg-[#1F382E] min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-montserrat text-[#8FA67A] text-[10px] uppercase tracking-[0.3em] mb-4">
            {tr.nav.contacto}
          </p>
          <h1 className="font-garamond text-[#F3EEE3] text-4xl md:text-5xl mb-4">
            {tr.contacto.title}
          </h1>
          <p className="font-montserrat text-[#F3EEE3]/50 text-xs uppercase tracking-[0.1em]">
            {tr.contacto.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left: direct contact */}
          <div className="flex flex-col gap-8">
            {/* WhatsApp */}
            <div className="p-8 border border-[#8FA67A]/20">
              <p className="font-montserrat text-[#F3EEE3]/30 text-[10px] uppercase tracking-[0.25em] mb-4">
                WhatsApp
              </p>
              <p className="font-garamond text-[#F3EEE3]/70 text-lg mb-6">
                {tr.contacto.whatsappLabel}
              </p>
              <a
                href={whatsappUrl(tr.messages.moreInfo)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-montserrat text-[#1F382E] bg-[#8FA67A] hover:bg-[#F3EEE3] text-xs uppercase tracking-[0.2em] px-8 py-4 transition-colors duration-300"
              >
                <WhatsAppIcon />
                +57 333 270 2366
              </a>
            </div>

            {/* Email */}
            <div className="p-8 border border-[#F3EEE3]/8">
              <p className="font-montserrat text-[#F3EEE3]/30 text-[10px] uppercase tracking-[0.25em] mb-4">
                Email
              </p>
              <p className="font-garamond text-[#F3EEE3]/70 text-lg mb-4">
                {tr.contacto.emailLabel}
              </p>
              <a
                href={`mailto:${tr.contacto.email}`}
                className="font-montserrat text-[#8FA67A] hover:text-[#F3EEE3] text-sm tracking-[0.1em] transition-colors duration-300"
              >
                {tr.contacto.email}
              </a>
            </div>

            {/* Ubicación */}
            <div className="p-8 border border-[#F3EEE3]/8">
              <p className="font-montserrat text-[#F3EEE3]/30 text-[10px] uppercase tracking-[0.25em] mb-4">
                {tr.ui.location}
              </p>
              <p className="font-garamond text-[#F3EEE3]/70 text-lg leading-relaxed">
                {tr.ubicacion.subtitle}
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <p className="font-garamond text-[#F3EEE3]/60 text-xl mb-8">
              {tr.contacto.formTitle}
            </p>
            <form
              className="flex flex-col gap-5"
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.currentTarget
                const nombre = (form.elements.namedItem('nombre') as HTMLInputElement).value
                const msg = (form.elements.namedItem('mensaje') as HTMLTextAreaElement).value
                window.open(
                  whatsappUrl(`${nombre}: ${msg}`),
                  '_blank'
                )
              }}
            >
              <div className="flex flex-col gap-2">
                <label className="font-montserrat text-[#F3EEE3]/40 text-[10px] uppercase tracking-[0.2em]">
                  {tr.contacto.formNombre}
                </label>
                <input
                  name="nombre"
                  type="text"
                  required
                  className="bg-transparent border border-[#F3EEE3]/15 focus:border-[#8FA67A] outline-none px-4 py-3 font-montserrat text-[#F3EEE3] text-sm transition-colors duration-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-montserrat text-[#F3EEE3]/40 text-[10px] uppercase tracking-[0.2em]">
                  {tr.contacto.formEmail}
                </label>
                <input
                  name="email"
                  type="email"
                  className="bg-transparent border border-[#F3EEE3]/15 focus:border-[#8FA67A] outline-none px-4 py-3 font-montserrat text-[#F3EEE3] text-sm transition-colors duration-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-montserrat text-[#F3EEE3]/40 text-[10px] uppercase tracking-[0.2em]">
                  {tr.contacto.formMensaje}
                </label>
                <textarea
                  name="mensaje"
                  rows={5}
                  required
                  className="bg-transparent border border-[#F3EEE3]/15 focus:border-[#8FA67A] outline-none px-4 py-3 font-montserrat text-[#F3EEE3] text-sm resize-none transition-colors duration-300"
                />
              </div>
              <button
                type="submit"
                className="font-montserrat text-[#1F382E] bg-[#F3EEE3] hover:bg-[#8FA67A] text-xs uppercase tracking-[0.25em] px-8 py-4 transition-colors duration-300 self-start"
              >
                {tr.contacto.formEnviar}
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link
            href="/"
            className="font-montserrat text-[#F3EEE3]/50 hover:text-[#8FA67A] text-xs uppercase tracking-[0.2em] transition-colors duration-300"
          >
            {tr.ui.backHome}
          </Link>
        </div>
      </div>
    </main>
  )
}

export default function Contacto() {
  return (
    <PageLayout>
      <ContactoContent />
    </PageLayout>
  )
}
