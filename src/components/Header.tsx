import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../assets/logo.png'

export function Header() {
  return (
    <header className="w-full h-22 flex items-center justify-end shadow shadow-lg bg-white">
      <div className="w-full flex items-center justify-between ml-10">
        <Image
          src={Logo}
          width={200}
          height={200}
          alt="Logo GJ consultoria em T.I"
        />
        <nav className="gap-2  m-10 space-x-40 flex-row w-[50%] items-center justify-center flex">
          <NavLinks title="Empresa" />
          <NavLinks title="Contato" />
          <NavLinks title="Serviços" />
        </nav>
      </div>
    </header>
  )
}

type LinksProps = {
  title: string
}
function NavLinks({ title }: LinksProps) {
  return (
    <Link
      href=""
      className="font-text hover:font-bold text-md text-black-900  hover:border-b-2 hover:text-blue-900 "
    >
      <p className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">
        {title}
      </p>
    </Link>
  )
}
