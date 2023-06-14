import Link from 'next/link'

export function Header() {
  return (
    <header className="w-full h-20 flex items-center justify-end shadow  border border-b-1  border-gray-400">
      <nav className="gap-2  m-10 space-x-40">
        <NavLinks title="A empresa" />
        <NavLinks title="Contato" />
        <NavLinks title="Serviços" />
      </nav>
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
      className="font-text text-md text-black-900 hover:animate-bounce"
    >
      {title}
    </Link>
  )
}
