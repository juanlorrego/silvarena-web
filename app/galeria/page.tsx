import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageLayout from '@/components/PageLayout'

export const metadata: Metadata = {
  title: 'Galería · Silvarena Glamping',
  description: 'Fotografías de Silvarena Glamping — cabañas, jacuzzis, jardines y vistas al valle en el Oriente Antioqueño.',
}

const photos = [
  { src: '/images/hero-01.jpg',         alt: 'Terraza con jacuzzi y vista al valle' },
  { src: '/images/hero-02.jpg',         alt: 'Vista aérea nocturna de las cabañas' },
  { src: '/images/hero-03.jpg',         alt: 'Jacuzzi exterior con vista al valle nublado' },
  { src: '/images/cabana-interior-01.jpg', alt: 'Habitación con cama doble y balcón al valle' },
  { src: '/images/cabana-interior-02.jpg', alt: 'Habitación con sillas Acapulco y bosque' },
  { src: '/images/cabana-interior-03.jpg', alt: 'Habitación con sofá y lámparas' },
  { src: '/images/cabana-interior-04.jpg', alt: 'Habitación con cama y balcón al valle' },
  { src: '/images/jacuzzi-01.jpg',      alt: 'Jacuzzi circular bajo techo de guadua' },
  { src: '/images/jacuzzi-02.jpg',      alt: 'Jacuzzi rectangular elevado con bosque' },
  { src: '/images/jacuzzi-03.jpg',      alt: 'Jacuzzi con flores blancas y guadua' },
  { src: '/images/exterior-jardin.jpg', alt: 'Cabaña con jardín de flores rojas y pasarela' },
  { src: '/images/exterior-pasarela.jpg', alt: 'Predio con jardín, pasarela y árboles' },
  { src: '/images/aerea.jpg',           alt: 'Vista aérea drone — tres cabañas en la ladera' },
  { src: '/images/exterior-valle.jpg',  alt: 'Jardín, huerta y cultivos con vista al valle' },
  { src: '/images/terraza-01.jpg',      alt: 'Terraza con sillas Acapulco y vista nublada' },
  { src: '/images/terraza-02.jpg',      alt: 'Terraza con sillas Acapulco y BBQ' },
  { src: '/images/terraza-03.jpg',      alt: 'Terraza con sillas blancas y vista al pueblo' },
  { src: '/images/terraza-04.jpg',      alt: 'Terraza cubierta con sillas negras y BBQ' },
  { src: '/images/bano-01.jpg',         alt: 'Baño con ducha, lavamanos y espejo' },
  { src: '/images/bano-02.jpg',         alt: 'Baño en madera cálida con espejo' },
  { src: '/images/ducha-exterior.jpg',  alt: 'Ducha exterior de madera al aire libre' },
  { src: '/images/entrada.jpg',         alt: 'Entrada de cabaña con pasarela' },
]

export default function Galeria() {
  return (
    <PageLayout>
      <main className="bg-[#1F382E] min-h-screen pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-montserrat text-[#8FA67A] text-[10px] uppercase tracking-[0.3em] mb-4">
              Galería
            </p>
            <h1 className="font-garamond text-[#F3EEE3] text-4xl md:text-5xl">
              Las imágenes que no caben en una sola sección.
            </h1>
          </div>

          {/* Masonry-style grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
            {photos.map((p, i) => (
              <div key={i} className="break-inside-avoid overflow-hidden">
                <div className="relative w-full overflow-hidden group">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={800}
                    height={1000}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[#1F382E]/0 group-hover:bg-[#1F382E]/20 transition-colors duration-500" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/"
              className="font-montserrat text-[#F3EEE3]/50 hover:text-[#8FA67A] text-xs uppercase tracking-[0.2em] transition-colors duration-300"
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </main>
    </PageLayout>
  )
}
