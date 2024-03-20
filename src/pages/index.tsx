import { Header } from '@/components/Header '
import { Hero } from '@/components/Hero '
import { Services } from '@/components/Services '

export default function App() {
  const whatsappNumber =
    'https://api.whatsapp.com/send?phone=5527995088009&text=Vamos%20conversar%20sobre%20o%20meu%20aplicativo,%20plataforma%20ou%20sistema?'
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div>
      <Header />
      <Hero />
      <Services />
    </div>
  )
}
