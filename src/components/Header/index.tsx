import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../assets/logo.png'
import { DialogComponent } from '../DialogComponent'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export const Header = () => {
  const titles = ['Empresa', 'Serviço', 'Contato']
  const [visibleModal, setVisibleModal] = useState(false)

  function handleOpenModal() {
    setVisibleModal(!visibleModal)
  }

  return (
    <header className="flex h-24  w-full items-center justify-end border-b-2 border-gray-800  bg-white shadow-xl">
      <div className="ml-10 mr-10 flex w-full items-center justify-between">
        <Image
          src={Logo}
          width={200}
          height={200}
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
      <div className="mr-10 lg:hidden">
        <button onClick={handleOpenModal}>
          <Bars3Icon className="h-10 w-10" />
        </button>
        <div className="absolute bottom-0 left-0 top-44 flex w-full items-center justify-center">
          <DialogComponent
            visibleModal={visibleModal}
            openModal={handleOpenModal}
            titles={titles}
          />
        </div>
      </div>
    </header>
  )
}
