import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../assets/logo.png'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import flagEua from '../../../assets/flageua.svg'
import flagBr from '../../../assets/flagbr.svg'

export const Header = () => {
  const [visibleModal, setVisibleModal] = useState(false)

  function handleOpenModal() {
    setVisibleModal(!visibleModal)
  }
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setVisibleModal(false)
    }
  }

  function handleChangeLanguageToEnglish() {
    alert('English language select')
  }

  function handleChangeLanguageToPortuguese() {
    alert('Portuguese language select')
  }

  return (
    <header className="flex h-24 w-full  items-center justify-end border-b-2 border-gray-800 bg-white  shadow-xl max-sm:fixed max-sm:z-10">
      <div className="ml-10 mr-10 flex w-full items-center justify-between">
        <Image
          src={Logo}
          width={150}
          height={150}
          alt="Logo GJ consultoria em T.I"
          className="max-sm:h-30 max-sm:w-30 object-contain"
        />
      </div>
      <div className="mr-10  lg:hidden ">
        <button onClick={handleOpenModal}>
          <Bars3Icon className="h-10 w-10" />
        </button>
        {visibleModal && (
          <div className="h-full animate-fade-in-down  border-b-2 border-gray-800 bg-white p-4 shadow-md max-sm:fixed   max-sm:right-0 max-sm:top-24 max-sm:z-10 max-sm:w-full">
            <Link
              href="#services"
              className="min-sm:hidden  font-text relative  text-lg text-blue-600 hover:border-b-2 hover:border-b-blue-900  hover:font-bold hover:text-blue-900"
              onClick={() => scrollToElement('services')}
            >
              <p className=" transform p-4 text-center transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 hover:border-b-2 hover:border-b-blue-900 ">
                O QUE NÓS OFERECEMOS
              </p>
            </Link>
            <Link
              href="#inovation"
              className="min-sm:hidden  font-text relative  text-lg text-blue-600 hover:border-b-2 hover:border-b-blue-900  hover:font-bold hover:text-blue-900"
              onClick={() => scrollToElement('inovation')}
            >
              <p className=" transform p-4 text-center transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 hover:border-b-2 hover:border-b-blue-900 ">
                JORNADA DE INOVAÇÃO
              </p>
            </Link>
            <Link
              href="#contact"
              className="min-sm:hidden  font-text relative  text-lg text-blue-600 hover:border-b-2 hover:border-b-blue-900  hover:font-bold hover:text-blue-900"
              onClick={() => scrollToElement('contact')}
            >
              <p className=" transform p-4 text-center transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 hover:border-b-2 hover:border-b-blue-900 ">
                CONTATO
              </p>
            </Link>
            <div className="mt-3 flex items-center justify-center gap-2">
              <button onClick={handleChangeLanguageToEnglish}>
                <Image
                  src={flagEua}
                  alt="Alterar idioma para inglês"
                  width={25}
                  height={25}
                  className="hover:animate-bounce"
                />
              </button>
              <button onClick={handleChangeLanguageToPortuguese}>
                <Image
                  src={flagBr}
                  alt="Alterar idioma para inglês"
                  width={25}
                  height={25}
                  className="hover:animate-bounce"
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
