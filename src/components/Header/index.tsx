import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Logo from '../../../assets/logo.png'
import { DropmenuLangauge } from '../DropMenuLanguage'

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
    <header className="flex h-[120px] w-full items-center justify-center border border-b-2 border-gray-900">
      <div className="flex w-full max-w-[1120px] items-center justify-between">
        <div>
          <Image
            src={Logo}
            width={180}
            height={96}
            alt="Logo GJ consultoria em T.I"
            className="max-sm:h-30 max-sm:w-30 object-contain"
          />
        </div>
        <div className="flex items-center justify-center gap-10">
          <Link href="services">
            <p className="font-exo2 text-base font-medium text-black-900">
              Serviços
            </p>
          </Link>
          <Link href="services">
            <p className="font-exo2 text-base font-medium text-black-900">
              Cases
            </p>
          </Link>
          <Link
            className="rounded-xl bg-blue-900 p-4 hover:bg-blue-800 hover:transition-all "
            href="services"
          >
            <p className="font-exo2 font-bold text-white ">Contato</p>
          </Link>
          <DropmenuLangauge />
        </div>
      </div>
    </header>
  )
}
