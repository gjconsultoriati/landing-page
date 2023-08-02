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
    <div className="mt-[30px] px-2">
      <div className=" rounded-[8px] shadow-lg  max-sm:h-[420px]   max-sm:w-[250px]  max-sm:bg-black-50">
        <div className="flex h-[175px] flex-col items-center justify-center">
          <Image
            src={source}
            alt=""
            className="rounded-t-[8px] max-sm:h-[180px]"
          />
        </div>
        <div className="max-sm:h-[230px] max-sm:bg-black-50 max-sm:px-2 max-sm:py-6">
          <h1 className="font-exo2 text-sm font-bold text-white">{h1}</h1>
          <p className=" mt-5 font-lato text-sm font-medium text-white">{p}</p>
        </div>
      </div>
    </div>
  )
}
