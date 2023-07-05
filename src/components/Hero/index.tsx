import CompanyImage from '../../../assets/company.png'
import Image from 'next/image'
import { TypeWrite } from '../TypeWriter'

export function Hero() {
  return (
    <div className="relative items-center max-sm:px-5 max-sm:py-[90px]">
      <div className="bg-blue-10 max-sm:h-[780px] max-sm:px-10 max-sm:py-10">
        <div>
          <h1 className="text-center font-exo2 text-xl font-bold text-white">
            Transforme suas ideias em realidades. Desenvolvimento de Aplicativos
            e Plataformas
          </h1>
          <h2 className="text-center font-lato text-3xl font-bold text-green-900">
            <TypeWrite strings={['Inovadoras_']} autoStart={true} loop={true} />
          </h2>
        </div>
        <Image
          src={CompanyImage}
          width={200}
          height={200}
          alt="Duas pessoas com papel e lapis elaborando uma ideia"
          className="max-sm:absolute max-sm:bottom-[10%] max-sm:left-0 max-sm:h-[450px] max-sm:w-[500px] max-sm:object-contain "
        />
      </div>
    </div>
  )
}
