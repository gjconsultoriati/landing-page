import { Header } from '@/components/Header '
import { Hero } from '@/components/Hero '
import { Services } from '@/components/Services '
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import Logo01 from '../../public/assets/logo-company-partner-01.png'
import Logo02 from '../../public/assets/logo-company-partner-02.png'
import TelegramIconBlue from '../../public/assets/telegram-blue.png'

export default function App() {
  const whatsappNumber =
    'https://api.whatsapp.com/send?phone=5527995088009&text=Vamos%20conversar%20sobre%20o%20meu%20aplicativo,%20plataforma%20ou%20sistema?'
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    let currentIndex = 0
    const images = containerRef.current.querySelectorAll('.carousel-item')
    const totalImages = images.length

    const slideNext = () => {
      images[currentIndex].classList.remove('opacity-100')
      images[currentIndex].classList.add('opacity-0')
      currentIndex = (currentIndex + 1) % totalImages
      images[currentIndex].classList.remove('opacity-0')
      images[currentIndex].classList.add('opacity-100')
    }

    const interval = setInterval(slideNext, 2000)

    return () => clearInterval(interval)
  }, [])
  return (
    <div>
      <Header />
      <Hero />
      <Services />

      <section>
        <h1 className="text-center font-exo2 text-4xl font-bold text-black-900">
          Marcas que confiam na gente
        </h1>
        <div className="relative mb-[160px] mt-6 overflow-hidden bg-neutral-100">
          <div
            ref={containerRef}
            className="carousel flex items-center justify-center space-x-4 transition-transform duration-500 ease-in-out"
          >
            <div className="carousel-item active flex items-center justify-center">
              <Image
                src={Logo01}
                alt="Company partner 01"
                width={150}
                height={150}
              />
            </div>
            <div className="carousel-item flex items-center justify-center">
              <Image
                src={Logo02}
                alt="Company partner 02"
                width={250}
                height={250}
              />
            </div>
          </div>
        </div>
      </section>

      <main className="flex h-[500px]  items-center justify-end bg-background bg-cover bg-no-repeat">
        <div className="mx-12  w-[576px] max-w-[1440px] text-white">
          <h1 className="font-exo2 text-5xl font-bold">
            Entre em contato com a gente
          </h1>
          <p className="mt-4 font-lato text-lg">
            Nosso especialista está disponível para esclarecer suas dúvidas e
            auxiliá-lo a encontrar o melhor caminho para o seu sucesso.
          </p>
          <button className="mt-6 flex items-center gap-2 rounded-md bg-green-900 px-4 py-3 transition-colors duration-300 ease-in-out hover:bg-green-800">
            <span className="font-exo2 font-bold text-blue-900">
              Entre em Contato
            </span>
            <Image src={TelegramIconBlue} alt="Icon to phone" />
          </button>
        </div>
      </main>

      <footer className="mt-40"></footer>
    </div>
  )
}
