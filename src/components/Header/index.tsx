import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../assets/logo.png'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import flagEua from '../../../assets/flageua.svg'
import flagBr from '../../../assets/flagbr.svg'
export const Header = () => {
  const titles = ['Empresa', 'Serviço', 'Contato']
  const [visibleModal, setVisibleModal] = useState(true)

  function handleOpenModal() {
    setVisibleModal(!visibleModal)
  }

  const navLinksMenu = (titles: string[]) => {
    return (
      <>
        {titles?.map((title) => (
          <Link
            key={title}
            href=""
            className="text-md  min-sm:hidden font-text  relative text-blue-600 hover:border-b-2 hover:border-b-blue-900  hover:font-bold hover:text-blue-900"
          >
            <p className="transform p-4 text-center transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 hover:border-b-2 hover:border-b-blue-900 ">
              {title}
            </p>
          </Link>
        ))}
      </>
    )
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
        {titles.map((title) => (
          <Link
            key={title}
            href=""
            className="text-md  font-text text-blue-600  hover:border-b-blue-900 hover:font-bold  hover:text-blue-900 max-lg:hidden max-md:hidden max-sm:hidden"
          >
            <span className="transform transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-b-2  hover:border-b-blue-900 ">
              {title}
            </span>
          </Link>
        ))}
      </div>
      <div className="mr-10  lg:hidden ">
        <button onClick={handleOpenModal}>
          <Bars3Icon className="h-10 w-10" />
        </button>
        {visibleModal && (
          <div className="border-b-2 border-gray-800 bg-white p-4 shadow-md max-sm:fixed max-sm:right-0 max-sm:top-24 max-sm:z-10 max-sm:w-full">
            {navLinksMenu(titles)}
            <div className="mt-3 flex items-center justify-center gap-2">
              <button>
                <Image
                  src={flagEua}
                  alt="Alterar idioma para inglês"
                  width={22}
                  height={22}
                />
              </button>
              <button>
                <Image
                  src={flagBr}
                  alt="Alterar idioma para inglês"
                  width={22}
                  height={22}
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
