import CompanyImage from '../../../assets/company.png'
import Image from 'next/image'
import { TypeWrite } from '../TypeWriter'

export function Company() {
  return (
    <div className="relative items-center max-sm:px-5 max-sm:py-[90px]">
      <div className="bg-blue-10 max-sm:h-[780px] max-sm:px-10 max-sm:py-10">
        <div>
          <h1 className="text-center font-exo2 text-xl font-bold text-white">
            Transforme suas Ideias em Realidade Desenvolvimento de Aplicativos e
            Plataformas
            <h1 className="importa font-lato text-3xl font-bold text-green-900">
              <TypeWrite
                strings={['Inovadoras_', 'Sistemas Web_', 'Aplicativos_']}
                autoStart={true}
                loop={true}
              />
            </h1>
          </h1>
        </div>
        <div className="mt-20 max-sm:flex max-sm:w-full max-sm:items-center max-sm:justify-center">
          <button className="text-lg font-bold text-blue-900 max-sm:rounded-lg max-sm:bg-white max-sm:px-10 max-sm:hover:border  max-sm:hover:border-white max-sm:hover:bg-transparent max-sm:hover:text-white max-sm:hover:transition-all max-sm:hover:duration-500 max-sm:hover:ease-linear">
            Quero Inovar
          </button>
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
