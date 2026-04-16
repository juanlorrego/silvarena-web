'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Script from 'next/script'

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID ?? ''
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? ''

export default function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (!PIXEL_ID) return
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any
    if (w.fbq) return
    w.fbq = function (...args: unknown[]) {
      w.fbq.callMethod ? w.fbq.callMethod(...args) : w.fbq.queue.push(args)
    }
    if (!w._fbq) w._fbq = w.fbq
    w.fbq.push = w.fbq
    w.fbq.loaded = true
    w.fbq.version = '2.0'
    w.fbq.queue = []
    w.fbq('init', PIXEL_ID)
  }, [])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any
    if (PIXEL_ID && w.fbq) w.fbq('track', 'PageView')
    if (GA4_ID && w.gtag) w.gtag('event', 'page_view', { page_path: pathname })
  }, [pathname])

  if (!GA4_ID && !PIXEL_ID) return null

  return (
    <>
      {GA4_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA4_ID}', { send_page_view: false });
            `}
          </Script>
        </>
      )}

      {PIXEL_ID && (
        <Script
          id="meta-pixel"
          src="https://connect.facebook.net/en_US/fbevents.js"
          strategy="afterInteractive"
        />
      )}
    </>
  )
}
