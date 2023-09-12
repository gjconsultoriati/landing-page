import CompanyImage from '../../../assets/company.png'
import Image from 'next/image'
import { TypeWrite } from '../TypeWriter'

export function Hero() {
  return (
    <div className="relative items-center py-10 max-sm:px-5 max-sm:py-[90px]">
      <div className="flex justify-between bg-blue-900 max-sm:h-[780px] max-sm:px-10  max-sm:py-10 md:h-[250px] md:w-[600px]">
        <div className="w-[400px] py-11">
          <h1 className="text-center font-exo2 text-xl font-bold text-white">
            Transforme suas ideias em realidades. Desenvolvimento de Aplicativos
            e Plataformas
          </h1>
          <h2 className="text-center font-lato text-3xl font-bold text-green-900">
            <TypeWrite
              strings={['Inovadoras_']}
              autoStart={true}
              loop={true}
              wrapperClassName="font-exo2 font-bold"
            />
          </h2>
        </div>
        <Image
          src={CompanyImage}
          width={200}
          height={200}
          alt="Duas pessoas com papel e lapis elaborando uma ideia"
          className="
          max-sm:absolute max-sm:bottom-[5%] max-sm:left-0 max-sm:h-[550px] max-sm:w-[550px] max-sm:object-contain md:absolute md:bottom-[20%] md:right-0 md:w-[300px]"
        />
      </div>
    </div>
  )
}
