import { LangProvider } from '@/lib/LangContext'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Propuesta from '@/components/Propuesta'
import Cabanas from '@/components/Cabanas'
import Experiencia from '@/components/Experiencia'
import Testimonios from '@/components/Testimonios'
import Reservas from '@/components/Reservas'
import Ubicacion from '@/components/Ubicacion'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <LangProvider>
      <Nav />
      <main>
        <Hero />
        <Propuesta />
        <Cabanas />
        <Experiencia />
        <Testimonios />
        <Reservas />
        <Ubicacion />
      </main>
      <Footer />
    </LangProvider>
  )
}
