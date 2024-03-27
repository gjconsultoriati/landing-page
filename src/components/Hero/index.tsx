import Image from 'next/image'
import HeroImg from '../../../public/assets/hero.png'
import mouseDownIcon from '../../../public/assets/mouse_down.svg'
import TelegramIcon from '../../../public/assets/telegram.svg'

export function Hero() {
  return (
    <>
      <main className="flex w-full justify-center">
        <div className="flex w-full max-w-[1120px] items-center justify-between">
          <div className="max-w-[448px]">
            <h1 className="font-exo2 text-3xl font-bold text-blue-900">
              Transforme suas Ideias em Realidade. Desenvolvimento de
              Aplicativos e Plataformas{' '}
              <span className="font-exo2 text-green-900 ">Inovadoras_</span>
            </h1>
            <button className=" hover:duration-400 mt-10 flex gap-2 rounded-md  bg-blue-900 px-3 py-3 hover:bg-blue-800 hover:transition-colors hover:ease-in-out">
              <span className="font-exo2 font-bold text-white">
                Entre em Contato
              </span>
              <Image src={TelegramIcon} alt="Icon to phone" />
            </button>
          </div>
          <div>
            <Image
              src={HeroImg}
              alt="imagem duas pessoas com computador e graficos"
            />
          </div>
        </div>
      </main>
      <div className="mt-10 flex flex-col items-center justify-center">
        <Image
          src={mouseDownIcon}
          alt="arrowdown icon"
          width={50}
          height={50}
        />
      </div>
    </>
  )
}
