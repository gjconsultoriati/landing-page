import Image, { StaticImageData } from 'next/image'
type LineUpServicesCardsProps = {
  source: StaticImageData
  h1: string
  p: string
}

export function LineUpServicesCards({
  h1,
  p,
  source,
}: LineUpServicesCardsProps) {
  return (
    <div className=" mt-[30px] px-2">
      <div className=" rounded-[8px] bg-black-50  shadow-xl   max-sm:h-[420px]  max-sm:w-[250px] md:h-[420px] md:w-[250px]">
        <div className="flex h-[180px] flex-col items-center justify-center">
          <Image
            src={source}
            alt=""
            className="rounded-t-[8px]  border border-gray-800 shadow-lg max-sm:h-[180px] md:h-[180px]"
          />
        </div>
        <div className="bg-black-50 px-2 py-2 max-sm:h-[230px] max-sm:px-2 max-sm:py-4">
          <h1 className="font-exo2 text-sm font-bold text-white">{h1}</h1>
          <p className=" mt-5 font-lato text-sm font-medium text-white">{p}</p>
        </div>
      </div>
    </div>
  )
}
