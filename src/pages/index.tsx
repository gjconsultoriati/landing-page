import { Hero } from '@/components/Hero '
import { Header } from '@/components/Header/ '
import { Services } from '@/components/Services '
import { LineUpServicesCards } from '@/components/LineUpServices '
import CompanyImage from '../../assets/company.png'
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
          <div className="flex flex-row  max-sm:overflow-x-auto max-sm:overflow-y-auto max-sm:px-3">
            <LineUpServicesCards
              h1="Concepção"
              p="Nesta etapa, é importante entender as necessidades e os requisitos do software a ser desenvolvido. Isso envolve a coleta de informações dos stakeholders, como clientes e usuários finais, para determinar as funcionalidades e os objetivos do sistema."
              source={CompanyImage}
            />
            <LineUpServicesCards
              h1="Análise"
              p="Uma vez que os requisitos são coletados, eles precisam ser analisados e detalhados. Isso envolve a identificação de casos de uso, fluxos de trabalho e a criação de documentos como a especificação de requisitos"
              source={CompanyImage}
            />
            <LineUpServicesCards
              h1="Design"
              p=" Nesta fase, o design do software é criado. Isso pode incluir o design da arquitetura do sistema, a definição da estrutura de dados, a elaboração de diagramas de classe ou fluxogramas, entre outros."
              source={CompanyImage}
            />
            <LineUpServicesCards
              h1="Implementação"
              p="Aqui, os desenvolvedores começam a escrever o código do software com base no design estabelecido. Eles seguem as melhores práticas de programação e utilizam as linguagens de programação e frameworks adequados."
              source={CompanyImage}
            />
            <LineUpServicesCards
              h1="Testes"
              p="Após a implementação, o software é testado para garantir que ele atenda aos requisitos e funcione corretamente."
              source={CompanyImage}
            />
            <LineUpServicesCards
              h1="Implantação"
              p="Depois que o software é testado e considerado pronto, ele é implantado no ambiente de produção. Isso envolve a instalação e configuração do sistema, além de garantir que todos os requisitos de hardware e software estejam atendidos."
              source={CompanyImage}
            />
            <LineUpServicesCards
              h1="Sustentação"
              p=" Uma vez que o software está em produção, é necessário realizar a manutenção contínua. Isso inclui a aplicação de atualizações, correções de bugs e implementação de novas funcionalidades."
              source={CompanyImage}
            />
          </div>
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
