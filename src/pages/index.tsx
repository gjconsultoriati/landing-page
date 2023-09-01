import { Hero } from '@/components/Hero '
import { Header } from '@/components/Header/ '
import { Services } from '@/components/Services '
import { LineUpServicesCards } from '@/components/LineUpServices '
import CompanyImage from '../../assets/company.png'
import RequirementsImage from '../../assets/requirements.jpeg'
import { ContactMe } from '@/components/ContactMe '
import { TypeWrite } from '@/components/TypeWriter '
import Logo from '../../assets/logo.png'
import InstagramSvg from '../../assets/instagram.svg'
import implementsSoftware from '../../assets/implementsSoftware.jpeg'
import testImage from '../../assets/testImage.jpeg'
import distribution from '../../assets/distribution.jpeg'
import suport from '../../assets/suport.jpeg'
import whatsappSvg from '../../assets/whatsapp.svg'
import designImage from '../../assets/designImage.jpeg'
import TwitterSvg from '../../assets/twitter.svg'
import Link from 'next/link'
import Image from 'next/image'

export default function App() {
  const whatsappNumber =
    'https://api.whatsapp.com/send?phone=5527995088009&text=Vamos%20conversar%20sobre%20o%20meu%20aplicativo,%20plataforma%20ou%20sistema?'
  return (
    <div>
      <div>
        <Header />
      </div>
      <main>
        <div>
          <Hero />
        </div>
        <div>
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
          <div className="flex flex-row  max-sm:overflow-x-auto max-sm:px-2">
            <LineUpServicesCards
              h1="Concepção"
              p="Nesta etapa, é importante entender as necessidades e os requisitos do software a ser desenvolvido. Isso envolve a coleta de informações dos stakeholders, como clientes e usuários finais, para determinar as funcionalidades e os objetivos do sistema."
              source={CompanyImage}
            />
            <LineUpServicesCards
              h1="Análise"
              p="Uma vez que os requisitos são coletados, eles precisam ser analisados e detalhados. Isso envolve a identificação de casos de uso, fluxos de trabalho e a criação de documentos como a especificação de requisitos"
              source={RequirementsImage}
            />
            <LineUpServicesCards
              h1="Design"
              p=" Nesta fase, o design do software é criado. Isso pode incluir o design da arquitetura do sistema, a definição da estrutura de dados, a elaboração de diagramas de classe ou fluxogramas, entre outros."
              source={designImage}
            />
            <LineUpServicesCards
              h1="Implementação"
              p="Aqui, os desenvolvedores começam a escrever o código do software com base no design estabelecido. Eles seguem as melhores práticas de programação e utilizam as linguagens de programação e frameworks adequados."
              source={implementsSoftware}
            />
            <LineUpServicesCards
              h1="Testes"
              p="Após a implementação, o software é testado para garantir que ele atenda aos requisitos e funcione corretamente."
              source={testImage}
            />
            <LineUpServicesCards
              h1="Implantação"
              p="Depois que o software é testado e considerado pronto, ele é implantado no ambiente de produção. Isso envolve a instalação e configuração do sistema, além de garantir que todos os requisitos de hardware e software estejam atendidos, e publicação do aplicativo nas lojas. (AppStore/PlayStore)"
              source={distribution}
            />
            <LineUpServicesCards
              h1="Sustentação"
              p=" Uma vez que o software está em produção, é necessário realizar a manutenção contínua. Isso inclui a aplicação de atualizações, correções de bugs e implementação de novas funcionalidades."
              source={suport}
            />
          </div>
        </div>

        {/* Contato */}
        <div className=" max-sm:mt-[120px]">
          <div className="flex flex-row items-center max-sm:px-4">
            <h1 className="mr-3 font-lato text-sm font-bold">Contato</h1>
            <div className="w-10 border-b-4 border-blue-10" />
          </div>
          <div className="mt-8 bg-black-50 max-sm:px-4">
            <div className="py-8">
              <h1 className="text-center font-exo2 text-3xl font-bold text-gray-900">
                Vamos transformar seu{' '}
                <strong className="font-exo2 font-bold text-green-900">
                  <TypeWrite
                    strings={['negócio?']}
                    autoStart
                    loop
                    wrapperClassName="font-exo2 font-bold"
                  />
                </strong>
              </h1>
              <p className="mt-3 text-center font-lato text-base text-white">
                Conta pra gente como podemos te ajudar? Basta preencher o
                formulário ao lado que entraremos em contato
              </p>
            </div>
            <ContactMe />
          </div>
        </div>
      </main>
      <footer className="h-full w-full ">
        <div className="h-full  bg-gray-900 px-8">
          <Image
            src={Logo}
            className="ml-4 object-contain max-sm:h-36 max-sm:h-36"
            width={200}
            height={200}
            alt="Logo da empresa G.J"
          />
          <div className=" border-b-2 border-blue-900 " />
          <div className="flex items-center justify-end py-4 ">
            <div className="flex items-center justify-end gap-2 ">
              <Link
                href="https://api.whatsapp.com/send?phone=5527995088009&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20inova%C3%A7%C3%A3o%20tech%20para%20meu%20neg%C3%B3cio.%20%F0%9F%98%8D%F0%9F%92%BB%F0%9F%93%8C"
                target="_blank"
              >
                <span className="font-lato text-base font-medium text-black-900 ">
                  +55 27 99508-8009
                </span>
              </Link>
              <Link
                href="https://www.instagram.com/gj_consultoriati/"
                target="_blank"
              >
                <Image
                  src={InstagramSvg}
                  width={28}
                  height={28}
                  alt="Botão para ir ao instagram da compainha"
                />
              </Link>
              <Link href="https://twitter.com/gjconsultoriati" target="_blank">
                <Image
                  src={TwitterSvg}
                  width={28}
                  height={28}
                  alt="Botão para ir ao Twitter da compainha"
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <Link href={whatsappNumber} target="_blank">
        <Image
          src={whatsappSvg}
          alt="Imagem do whatsapp para contato"
          style={{
            position: 'fixed',
            bottom: '40px',
            right: '40px',
            width: '60px',
            height: '60px',
            zIndex: 99,
          }}
          className="animate-bounce"
        />
      </Link>
    </div>
  )
}
