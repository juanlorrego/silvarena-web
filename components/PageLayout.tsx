import { LangProvider } from '@/lib/LangContext'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <Nav />
      {children}
      <Footer />
    </LangProvider>
  )
}
