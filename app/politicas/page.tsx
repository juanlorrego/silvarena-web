import type { Metadata } from 'next'
import Link from 'next/link'
import PageLayout from '@/components/PageLayout'

export const metadata: Metadata = {
  title: 'Políticas · Silvarena Glamping',
  description: 'Políticas de cancelación, check-in, mascotas y normas de Silvarena Glamping.',
}

const secciones = [
  {
    titulo: 'Cancelación',
    items: [
      'Cancelaciones con más de 7 días de anticipación: reembolso del 80% del valor pagado.',
      'Cancelaciones con menos de 7 días de anticipación: sin reembolso.',
      'En caso de fuerza mayor documentada, evaluamos cada caso individualmente.',
      'Las cancelaciones deben notificarse por WhatsApp al +57 333 270 2366.',
    ],
  },
  {
    titulo: 'Check-in y Check-out',
    items: [
      'Check-in: a partir de las 3:00 PM.',
      'Check-out: hasta las 12:00 PM.',
      'Llegadas anticipadas o salidas tardías están sujetas a disponibilidad y pueden tener costo adicional.',
      'El check-in requiere la presentación del documento de identidad de todos los huéspedes.',
      'El formulario TRA debe completarse antes de la llegada.',
    ],
  },
  {
    titulo: 'Mascotas',
    items: [
      'No se permiten mascotas en las cabañas.',
      'Esta política protege el entorno natural y la experiencia de todos los huéspedes.',
    ],
  },
  {
    titulo: 'Capacidad y huéspedes',
    items: [
      'Cada cabaña tiene capacidad máxima para 2 personas.',
      'Se puede acomodar una tercera persona previa comunicación y disponibilidad.',
      'No se permiten visitas externas que pernocten sin reserva.',
    ],
  },
  {
    titulo: 'Normas del glamping',
    items: [
      'Silencio nocturno a partir de las 10:00 PM.',
      'No se permite música amplificada al exterior.',
      'Las zonas comunes son compartidas — se espera consideración con los demás huéspedes.',
      'El pavo real y los jardines son parte del entorno natural — no deben interferirse.',
      'Silvarena no es responsable por objetos olvidados o pérdidas durante la estadía.',
    ],
  },
  {
    titulo: 'Pagos',
    items: [
      'El pago se realiza en su totalidad al momento de la reserva.',
      'Aceptamos transferencias bancarias y pagos digitales.',
      'Se emite factura electrónica a nombre del huésped principal.',
    ],
  },
]

export default function Politicas() {
  return (
    <PageLayout>
      <main className="bg-[#1F382E] min-h-screen pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-montserrat text-[#8FA67A] text-[10px] uppercase tracking-[0.3em] mb-4">
              Políticas
            </p>
            <h1 className="font-garamond text-[#F3EEE3] text-4xl md:text-5xl">
              Políticas de Silvarena
            </h1>
          </div>

          {secciones.map((seccion) => (
            <div key={seccion.titulo} className="mb-12">
              <h2 className="font-garamond text-[#F3EEE3] text-2xl mb-2">{seccion.titulo}</h2>
              <div className="w-8 h-px bg-[#8FA67A] mb-5" />
              <ul className="flex flex-col gap-3">
                {seccion.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-[#8FA67A] flex-shrink-0 mt-2" />
                    <span className="font-montserrat text-[#F3EEE3]/60 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

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
