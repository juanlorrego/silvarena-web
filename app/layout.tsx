import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Analytics from '@/components/Analytics'
import './globals.css'

const ebGaramond = localFont({
  src: [
    { path: '../public/fonts/EBGaramond.ttf',       weight: '400', style: 'normal' },
    { path: '../public/fonts/EBGaramond-Italic.ttf', weight: '400', style: 'italic' },
  ],
  variable: '--font-eb-garamond',
  display: 'swap',
})

const cormorantGaramond = localFont({
  src: [
    { path: '../public/fonts/CormorantGaramond.ttf',       weight: '300 700', style: 'normal' },
    { path: '../public/fonts/CormorantGaramond-Italic.ttf', weight: '300 700', style: 'italic' },
  ],
  variable: '--font-cormorant-garamond',
  display: 'swap',
})

const montserrat = localFont({
  src: [
    { path: '../public/fonts/Montserrat.ttf',       weight: '100 400', style: 'normal' },
    { path: '../public/fonts/Montserrat-Italic.ttf', weight: '100 400', style: 'italic' },
  ],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://silvarena.com'),
  title: 'Silvarena Glamping · Aquí, el mundo desaparece.',
  description:
    'Glamping de lujo en el Oriente Antioqueño. Cuatro cabañas de madera con jacuzzi privado, vistas al valle y jardines en flor. San José, La Ceja, Antioquia.',
  keywords: ['glamping', 'Oriente Antioqueño', 'La Ceja', 'cabañas', 'jacuzzi', 'lujo', 'naturaleza'],
  authors: [{ name: 'Silvarena Glamping' }],
  openGraph: {
    title: 'Silvarena Glamping · Aquí, el mundo desaparece.',
    description: 'Glamping de lujo en el Oriente Antioqueño. Cuatro cabañas con jacuzzi privado y vistas al valle.',
    url: 'https://silvarena.com',
    siteName: 'Silvarena Glamping',
    images: [{ url: '/logos/logo-og.png', width: 1200, height: 630, alt: 'Silvarena Glamping' }],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Silvarena Glamping',
    description: 'Glamping de lujo en el Oriente Antioqueño.',
    images: ['/logos/logo-og.png'],
  },
  icons: {
    icon: '/logos/icon.svg',
    apple: '/logos/icon.svg',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${ebGaramond.variable} ${cormorantGaramond.variable} ${montserrat.variable} h-full`}
    >
      <body className="min-h-full antialiased">
        <Analytics />
        {children}
      </body>
    </html>
  )
}
