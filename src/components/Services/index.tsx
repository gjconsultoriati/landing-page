import Image from 'next/image'
import IconIdea from '../../../assets/IconIdea.png'
import IconOtherServices from '../../../assets/IconOtherServices.png'
import gradient from '../../../assets/gradient.svg'
import iconCircuit from '../../../assets/iconCircuit.png'
import iconDesign from '../../../assets/iconDesign.png'
import phoroService from '../../../assets/photoService.jpg'

export function Services() {
  return (
    <section className="mb-[300px] mt-40 flex flex-col items-center justify-center">
      <h1 className="mb-3 font-exo2 text-3xl font-bold text-black-900">
        Nossos Serviços
      </h1>
      <div className="mt-32 flex w-full max-w-[1120px] items-center justify-between">
        <div className="relative">
          <Image src={phoroService} alt="pessoa com globo simulando o mundo" />
          <Image
            src={gradient}
            alt="gradient azul e verde por baixo da imagem"
            className="absolute -top-28 left-40 right-10 -z-10 object-contain"
          />
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="flex max-h-[302px] max-w-[234px] flex-col">
            <div className="mb-3">
              <Image src={iconCircuit} alt="Icon azul circuito" />
            </div>
            <div>
              <strong className="font-lato text-[26px] text-blue-900">
                Desenvolvimento de aplicativos Apps/web
              </strong>
              <p className="mt-3 overflow-y-auto text-justify font-lato text-base text-black-900">
                Com os serviços da GJ Consultoria TI, transforme sua visão em
                realidade digital com soluções personalizadas que impulsionam o
                crescimento do seu negócio e encantam seus usuários.
              </p>
            </div>
          </div>
          <div className="flex max-h-[302px] max-w-[234px] flex-col">
            <div className="mb-3">
              <Image src={iconDesign} alt="Icon azul circuito" />
            </div>
            <div>
              <strong className="font-lato text-[26px] text-blue-900">
                UX/UI Design
              </strong>
              <p className="mt-3 overflow-y-auto text-justify font-lato text-base text-black-900">
                Um layout limpo e moderno com elementos visuais atraentes para
                capturar a atenção do usuário. Utilizaremos das melhores
                estratégias para criarmos um produto incrível.
              </p>
            </div>
          </div>
          <div className="mt-16 flex max-h-[302px] max-w-[234px] flex-col">
            <div className="mb-3">
              <Image src={IconIdea} alt="Icon azul ideia" />
            </div>
            <div>
              <strong className="font-lato text-[26px] text-blue-900">
                Consultoria em Tecnologia
              </strong>
              <p className="mt-3 overflow-y-auto text-justify font-lato text-base text-black-900">
                Assessoria e consultoria para ajudar os clientes a tomar
                decisões informadas sobre tecnologia. Análise de requisitos e
                recomendações de soluções.
              </p>
            </div>
          </div>
          <div className="mt-16 flex max-h-[302px] max-w-[234px] flex-col">
            <div className="mb-3">
              <Image src={IconOtherServices} alt="Icon azul ideia" />
            </div>
            <div>
              <strong className="font-lato text-[26px] text-blue-900">
                Outros Serviços
              </strong>
              <p className="mt-3 overflow-y-auto text-justify font-lato text-base text-black-900">
                Podemos oferecer uma ampla gama de qualidade produtos e soluções
                para problemas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
