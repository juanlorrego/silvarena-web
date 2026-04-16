'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

const TIPOS_DOC = [
  'Cédula de Ciudadanía',
  'Cédula de Extranjería',
  'Pasaporte',
  'Permiso por Protección Temporal (PPT)',
]

function TRAForm() {
  const params = useSearchParams()
  const reservaParam = params.get('reserva') ?? ''
  const [reserva, setReserva] = useState(reservaParam)
  const [reservaValida, setReservaValida] = useState<boolean | null>(null)
  const [enviado, setEnviado] = useState(false)
  const [form, setForm] = useState({
    nombre: '',
    tipoDoc: TIPOS_DOC[0],
    numDoc: '',
    nacionalidad: '',
    fechaNac: '',
    procedencia: '',
    email: '',
    telefono: '',
  })

  useEffect(() => {
    if (!reserva) { setReservaValida(null); return }
    const valid = /^SLV-\d{4}-\d{4}$/.test(reserva.toUpperCase())
    setReservaValida(valid)
  }, [reserva])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEnviado(true)
  }

  if (enviado) {
    return (
      <div className="text-center py-20">
        <div className="w-12 h-12 border border-[#8FA67A] flex items-center justify-center mx-auto mb-8">
          <span className="text-[#8FA67A] text-xl">✓</span>
        </div>
        <h2 className="font-garamond text-[#F3EEE3] text-3xl mb-4">
          Registro completado.
        </h2>
        <p className="font-montserrat text-[#F3EEE3]/50 text-xs uppercase tracking-[0.1em]">
          Tu información ha sido recibida. Nos vemos pronto en Silvarena.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <Image
          src="/logos/logo-blanco.png"
          alt="Silvarena"
          width={160}
          height={40}
          className="h-9 w-auto mx-auto mb-8"
        />
        <h1 className="font-garamond text-[#F3EEE3] text-3xl md:text-4xl mb-4">
          Tarjeta de Registro de Alojamiento
        </h1>
        <p className="font-montserrat text-[#F3EEE3]/50 text-xs uppercase tracking-[0.1em] leading-relaxed max-w-sm mx-auto">
          La ley colombiana exige el registro de todos los huéspedes antes del check-in. Sin este requisito completado, no podremos recibirte.
        </p>
      </div>

      {/* Número de reserva */}
      <div className="mb-8 p-6 border border-[#F3EEE3]/10">
        <label className="font-montserrat text-[#F3EEE3]/40 text-[10px] uppercase tracking-[0.2em] block mb-3">
          Número de reserva *
        </label>
        <input
          type="text"
          value={reserva}
          onChange={(e) => setReserva(e.target.value.toUpperCase())}
          placeholder="SLV-2026-0001"
          className="w-full bg-transparent border-b border-[#F3EEE3]/20 focus:border-[#8FA67A] outline-none pb-2 font-montserrat text-[#F3EEE3] text-sm tracking-widest transition-colors duration-300"
        />
        {reserva && (
          <p className={`font-montserrat text-[10px] uppercase tracking-[0.15em] mt-3 ${reservaValida ? 'text-[#8FA67A]' : 'text-red-400/70'}`}>
            {reservaValida
              ? '✓ Número de reserva válido'
              : '✕ Formato incorrecto. Ejemplo: SLV-2026-0001'}
          </p>
        )}
      </div>

      {/* Formulario */}
      {reservaValida && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {[
            { name: 'nombre',       label: 'Nombre completo',       type: 'text', required: true },
            { name: 'numDoc',       label: 'Número de documento',   type: 'text', required: true },
            { name: 'nacionalidad', label: 'Nacionalidad',           type: 'text', required: true },
            { name: 'fechaNac',     label: 'Fecha de nacimiento',   type: 'date', required: true },
            { name: 'procedencia',  label: 'Ciudad de procedencia', type: 'text', required: true },
            { name: 'email',        label: 'Correo electrónico',    type: 'email', required: true },
            { name: 'telefono',     label: 'Teléfono',              type: 'tel',  required: false },
          ].map((f) => (
            <div key={f.name} className="flex flex-col gap-2">
              <label className="font-montserrat text-[#F3EEE3]/40 text-[10px] uppercase tracking-[0.2em]">
                {f.label}{f.required && ' *'}
              </label>
              <input
                name={f.name}
                type={f.type}
                required={f.required}
                value={(form as Record<string, string>)[f.name]}
                onChange={handleChange}
                className="bg-transparent border-b border-[#F3EEE3]/20 focus:border-[#8FA67A] outline-none pb-2 font-montserrat text-[#F3EEE3] text-sm transition-colors duration-300"
              />
            </div>
          ))}

          {/* Tipo de documento */}
          <div className="flex flex-col gap-2">
            <label className="font-montserrat text-[#F3EEE3]/40 text-[10px] uppercase tracking-[0.2em]">
              Tipo de documento *
            </label>
            <select
              name="tipoDoc"
              value={form.tipoDoc}
              onChange={handleChange}
              required
              className="bg-[#1F382E] border-b border-[#F3EEE3]/20 focus:border-[#8FA67A] outline-none pb-2 font-montserrat text-[#F3EEE3] text-sm transition-colors duration-300"
            >
              {TIPOS_DOC.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full font-montserrat text-[#1F382E] bg-[#F3EEE3] hover:bg-[#8FA67A] text-xs uppercase tracking-[0.25em] py-5 transition-colors duration-300"
            >
              Registrar
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export default function TRA() {
  return (
    <main className="bg-[#1F382E] min-h-screen px-6 py-16">
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen">
          <p className="font-montserrat text-[#F3EEE3]/40 text-xs uppercase tracking-[0.2em]">Cargando...</p>
        </div>
      }>
        <TRAForm />
      </Suspense>
      <div className="text-center mt-16">
        <Link
          href="/"
          className="font-montserrat text-[#F3EEE3]/30 hover:text-[#8FA67A] text-[10px] uppercase tracking-[0.2em] transition-colors duration-300"
        >
          silvarena.com
        </Link>
      </div>
    </main>
  )
}
