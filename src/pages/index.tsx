import { Header } from '@/components/Header '
import { Hero } from '@/components/Hero '
import { Services } from '@/components/Services '
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import Logo01 from '../../assets/logo-company-partner-01.png'
import Logo02 from '../../assets/logo-company-partner-02.png'

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
      {/* <section>
        <h1 className="text-center font-exo2 text-5xl font-bold text-black-900">
          Marcas que confiam na gente
        </h1>
        <div className="mb-[160px] mt-6 flex h-[170px] flex-row items-center justify-center gap-10 bg-neutral-100">
          <Image
            src={Logo01}
            alt="Company partner 01"
            width={150}
            height={150}
          />
          <Image
            src={Logo02}
            alt="Company partner 02"
            width={250}
            height={250}
          />
        </div>
      </section> */}
      <section>
        <h1 className="text-center font-exo2 text-5xl font-bold text-black-900">
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
            {/* Adicione mais imagens conforme necessário */}
          </div>
        </div>
      </section>
    </div>
  )
}
