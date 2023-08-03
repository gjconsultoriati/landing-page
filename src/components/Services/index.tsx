import {
  GlobeAltIcon,
  CircleStackIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline'

export function Services() {
  return (
    <div className="max-sm:mt-[120px]">
      <div className="max-sm:block">
        <h2 className="font-exo2 text-2xl font-bold max-sm:text-center">
          O que nós oferecemos
        </h2>
        <div className="rounded max-sm:mb-20 max-sm:mt-[4px] max-sm:flex max-sm:items-center max-sm:justify-center">
          <div className="max-sm:w-[90%]  max-sm:border-b-2 max-sm:border-gray-900 max-sm:text-center" />
        </div>
      </div>
      <div className="max-sm:flex max-sm:w-full max-sm:justify-center">
        <div className=" rounded-md border border-gray-900  bg-white drop-shadow-xl max-sm:mb-10 max-sm:flex max-sm:w-[90%]">
          <div className="flex w-[15%] items-center justify-center  max-sm:px-4 max-sm:py-5">
            <GlobeAltIcon className="h-[50px] w-[50px] text-blue-900 max-sm:h-[50px] max-sm:w-[50px]" />
          </div>
          <div className="w-[80%] px-4 py-4 max-sm:items-center">
            <h2 className="mb-2  font-exo2 text-lg font-bold text-green-900 max-sm:text-center">
              Desenvolvimento web
            </h2>
            <span className=" font-lato text-sm font-medium">
              O desenvolvimento web é um processo de criação, implementação e
              manutenção de sites, aplicativos e outras aplicações acessíveis
              pela internet. Ele envolve uma série de tarefas e tecnologias para
              construir uma presença online, desde páginas estáticas até
              plataformas web complexas e interativas.
            </span>
          </div>
        </div>
      </div>

      <div className="max-sm:flex max-sm:w-full max-sm:justify-center">
        <div className=" rounded-md border border-gray-900  bg-white drop-shadow-xl max-sm:mb-10 max-sm:flex max-sm:w-[90%]">
          <div className="flex w-[15%] items-center justify-center  max-sm:px-4 max-sm:py-5">
            <CircleStackIcon className="h-[40px] w-[40px] text-blue-900" />
          </div>
          <div className="w-[80%] px-4 py-4 max-sm:items-center">
            <h2 className="mb-2   font-exo2 text-lg font-bold text-green-900 max-sm:text-center">
              Desenvolvimento Api's
            </h2>
            <span className=" font-lato text-sm font-medium">
              O desenvolvimento de API (Interface de Programação de Aplicações)
              é um processo de criação e implementação de conjuntos de regras e
              protocolos que permitem a comunicação entre diferentes aplicações
              de software. As APIs atuam como interfaces que permitem que
              diferentes sistemas interajam e compartilhem informações de forma
              padronizada.
            </span>
          </div>
        </div>
      </div>

      <div className="max-sm:flex max-sm:w-full max-sm:justify-center">
        <div className=" rounded-md border border-gray-900  bg-white drop-shadow-xl max-sm:mb-10 max-sm:flex max-sm:w-[90%]">
          <div className="flex w-[15%] items-center justify-center  max-sm:px-4 max-sm:py-5">
            <DevicePhoneMobileIcon className="h-[40px] w-[40px] text-blue-900" />
          </div>
          <div className="w-[80%] px-4 py-4 max-sm:items-center">
            <h2 className="mb-2 font-exo2 text-lg font-bold text-green-900 max-sm:text-center">
              Desenvolvimento de Aplicativos
            </h2>
            <span className="  font-lato text-sm font-medium">
              O desenvolvimento de aplicativos refere-se ao processo de criação,
              design, implementação e lançamento de aplicativos de software para
              dispositivos móveis, computadores ou outros dispositivos
              eletrônicos. Esses aplicativos são projetados para executar
              tarefas específicas e fornecer funcionalidades úteis aos usuários.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
