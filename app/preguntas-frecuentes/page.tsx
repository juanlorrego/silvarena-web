'use client'

import { useState } from 'react'
import Link from 'next/link'
import PageLayout from '@/components/PageLayout'
import { useLang } from '@/lib/LangContext'
import { t } from '@/lib/i18n'

function FaqContent() {
  const { lang } = useLang()
  const tr = t(lang)
  const [open, setOpen] = useState<number | null>(null)

  return (
    <main className="bg-[#1F382E] min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-montserrat text-[#8FA67A] text-[10px] uppercase tracking-[0.3em] mb-4">
            FAQ
          </p>
          <h1 className="font-garamond text-[#F3EEE3] text-4xl md:text-5xl">
            {tr.faq.title}
          </h1>
        </div>

        <div className="flex flex-col divide-y divide-[#F3EEE3]/8">
          {tr.faq.items.map((item, i) => (
            <div key={i} className="py-6">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-6 text-left group"
              >
                <span className="font-garamond text-[#F3EEE3] text-lg group-hover:text-[#8FA67A] transition-colors duration-300 leading-snug">
                  {item.q}
                </span>
                <span className={`font-montserrat text-[#8FA67A] text-lg flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              {open === i && (
                <p className="font-montserrat text-[#F3EEE3]/60 text-sm leading-relaxed mt-4 pr-8">
                  {item.a}
                </p>
              )}
            </div>
          ))}
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

export default function FAQ() {
  return (
    <PageLayout>
      <FaqContent />
    </PageLayout>
  )
}
