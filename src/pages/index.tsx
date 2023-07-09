import { Hero } from '@/components/Hero '
import { Header } from '@/components/Header/ '
import { Services } from '@/components/Services '
import { LineUpServicesCards } from '@/components/LineUpServices '
// import { TypeWrite } from '../components/TypeWriter'

export default function App() {
  return (
    <div>
      <Header />
      <main>
        {/* component de section aqui */}
        <div>
          <Hero />
        </div>
        <div>
          {/* component de Serviço aqui */}
          <Services />
        </div>
        {/* LineUpServices */}
        <div className="max-sm:block">
          <h2 className="font-exo2 text-2xl font-bold max-sm:text-center">
            Jornada de Inovação
          </h2>
          <div className="rounded max-sm:mb-20 max-sm:mt-[4px] max-sm:flex max-sm:items-center max-sm:justify-center">
            <div className="max-sm:w-[90%]  max-sm:border-b-2 max-sm:border-gray-900 max-sm:text-center" />
          </div>
          <LineUpServicesCards />
        </div>

        {/* Contato */}
        <div className="max-sm:mb-[30px] max-sm:mt-[120px]">
          <div className="flex flex-row items-center ">
            <h1 className="mr-3 font-lato text-sm font-bold">Contato</h1>
            <div className="w-10 border-b-4 border-blue-10" />
          </div>
        </div>
      </main>
    </div>
  )
}
