import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageLayout from '@/components/PageLayout'

export const metadata: Metadata = {
  title: 'La Experiencia · Silvarena Glamping',
  description: 'El entorno natural de Silvarena — jardines, jacuzzis, valle y el pavo real que hace parte del lugar.',
}

const sections = [
  {
    titulo: 'Los jardines',
    texto: 'Flores que cambian de color con las estaciones pero nunca desaparecen. Los jardines de Silvarena crecen con el tiempo, no contra él. Cada sendero es una sorpresa diferente según el mes en que llegues.',
    img: '/images/exterior-jardin.jpg',
    reverse: false,
  },
  {
    titulo: 'La vista',
    texto: 'El valle del Oriente Antioqueño desde tu terraza. Sin filtros. Sin intermediarios. Solo montaña, niebla y silencio. En las mañanas, la niebla cubre el valle como si el mundo todavía no hubiera decidido si aparecer o no.',
    img: '/images/terraza-03.jpg',
    reverse: true,
  },
  {
    titulo: 'El guardián',
    texto: 'Nuestro pavo real no fue planificado. Llegó un día y decidió quedarse. Desde entonces, es el guardián silencioso de los jardines. Camina entre las cabañas con la certeza de quien sabe exactamente a dónde pertenece.',
    img: '/images/exterior-pasarela.jpg',
    reverse: false,
  },
  {
    titulo: 'El agua',
    texto: 'El jacuzzi listo cuando tú llegues. La temperatura, los grados exactos. Afuera, la montaña. Adentro, calma. Los jacuzzis de Silvarena están pensados para el exterior — porque el techo que importa aquí es el cielo.',
    img: '/images/jacuzzi-01.jpg',
    reverse: true,
  },
]

export default function ExperienciaPage() {
  return (
    <PageLayout>
      <main className="bg-[#1F382E] min-h-screen">
        {/* Hero */}
        <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
          <Image
            src="/images/exterior-valle.jpg"
            alt="Valle del Oriente Antioqueño desde Silvarena"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#1F382E]/55" />
          <div className="relative z-10 text-center px-6">
            <p className="font-montserrat text-[#8FA67A] text-[10px] uppercase tracking-[0.3em] mb-4">La experiencia</p>
            <h1 className="font-garamond text-[#F3EEE3] text-4xl md:text-6xl">
              El entorno es el producto.
            </h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-24">
          {/* Intro */}
          <div className="text-center mb-20">
            <p className="font-garamond text-[#F3EEE3]/75 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
              Silvarena existe en el Oriente Antioqueño, una región que tiene sus propios ritmos. El tiempo aquí no se organiza por actividades — se organiza solo.
            </p>
          </div>

          {/* Sections */}
          {sections.map((s) => (
            <div
              key={s.titulo}
              className={`flex flex-col md:flex-row items-center gap-12 mb-20 ${s.reverse ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-full md:w-1/2 relative aspect-[4/3] overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.titulo}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="font-garamond text-[#F3EEE3] text-3xl mb-4">{s.titulo}</h2>
                <div className="w-8 h-px bg-[#8FA67A] mb-6" />
                <p className="font-cormorant text-[#F3EEE3]/70 text-xl leading-relaxed">{s.texto}</p>
              </div>
            </div>
          ))}

          {/* Google Reviews embed placeholder */}
          <div className="border border-[#F3EEE3]/8 p-8 text-center mb-16">
            <p className="font-montserrat text-[#F3EEE3]/30 text-[10px] uppercase tracking-[0.2em] mb-4">
              Reseñas de Google
            </p>
            <p className="font-garamond text-[#F3EEE3]/50 text-lg mb-6">
              Lo que dicen quienes ya estuvieron aquí.
            </p>
            <a
              href="https://maps.google.com/?q=Silvarena+Glamping"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-montserrat text-[#8FA67A] hover:text-[#F3EEE3] text-xs uppercase tracking-[0.2em] transition-colors duration-300"
            >
              Ver reseñas en Google →
            </a>
          </div>

          <div className="text-center">
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
