import type { Metadata } from 'next'
import Link from 'next/link'
import PageLayout from '@/components/PageLayout'

export const metadata: Metadata = {
  title: 'Documentos · Silvarena Glamping',
  robots: { index: false, follow: false },
}

// En producción, estos documentos se cargarían dinámicamente
// desde una carpeta asignada (ej: /public/documentos/ o un bucket)
const documentos = [
  { nombre: 'RUT — Registro Único Tributario', disponible: false },
  { nombre: 'Cámara de Comercio', disponible: false },
  { nombre: 'Registro Nacional de Turismo (RNT)', disponible: false },
  { nombre: 'Póliza de Responsabilidad Civil', disponible: false },
]

export default function Documentos() {
  return (
    <PageLayout>
      <main className="bg-[#1F382E] min-h-screen pt-24 pb-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-montserrat text-[#8FA67A] text-[10px] uppercase tracking-[0.3em] mb-4">
              Documentos legales
            </p>
            <h1 className="font-garamond text-[#F3EEE3] text-4xl md:text-5xl mb-4">
              Documentos
            </h1>
            <p className="font-montserrat text-[#F3EEE3]/40 text-xs uppercase tracking-[0.1em]">
              Silvarena Glamping · San José, La Ceja, Antioquia
            </p>
          </div>

          <div className="flex flex-col divide-y divide-[#F3EEE3]/8">
            {documentos.map((doc) => (
              <div key={doc.nombre} className="py-5 flex items-center justify-between gap-6">
                <span className="font-garamond text-[#F3EEE3]/70 text-lg">
                  {doc.nombre}
                </span>
                {doc.disponible ? (
                  <a
                    href={`/documentos/${doc.nombre}.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-montserrat text-[#8FA67A] hover:text-[#F3EEE3] text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 flex-shrink-0"
                  >
                    Ver →
                  </a>
                ) : (
                  <span className="font-montserrat text-[#F3EEE3]/20 text-[10px] uppercase tracking-[0.2em] flex-shrink-0">
                    Próximamente
                  </span>
                )}
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
