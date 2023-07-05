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
        <div className="h-[190px] border border-gray-900 bg-white drop-shadow-xl max-sm:mb-10 max-sm:flex max-sm:w-[90%]">
          <div className="max-sm:flex max-sm:flex-row max-sm:items-center max-sm:justify-center ">
            <div className="w-[10%] max-sm:px-4 max-sm:py-5">
              <GlobeAltIcon className="h-11 w-11 text-blue-900" />
            </div>
            <div className="w-[90%] max-sm:items-center max-sm:px-6 max-sm:py-5">
              <h2 className="font-exo2  text-lg font-bold text-green-900 max-sm:text-center">
                Desenvolvimento web
              </h2>
              <span className="font-lato text-sm font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                interdum eleifend risus, eu lacinia tellus dignissim et. In
                fermentum quam et risus tristique, sit amet tristique quam
                bibendum. Fusce ac varius mauris.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-sm:flex max-sm:w-full max-sm:justify-center">
        <div className="h-[190px] border border-gray-900 bg-white drop-shadow-xl max-sm:mb-10 max-sm:flex max-sm:w-[90%]">
          <div className="max-sm:flex max-sm:flex-row max-sm:items-center max-sm:justify-center ">
            <div className="w-[10%] max-sm:px-4 max-sm:py-5">
              <CircleStackIcon className="h-11 w-11 text-blue-900" />
            </div>
            <div className="w-[90%] max-sm:items-center max-sm:px-6 max-sm:py-5">
              <h2 className="font-exo2  text-lg font-bold text-green-900 max-sm:text-center">
                Desenvolvimento Api's
              </h2>
              <span className="font-lato text-sm font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                interdum eleifend risus, eu lacinia tellus dignissim et. In
                fermentum quam et risus tristique, sit amet tristique quam
                bibendum. Fusce ac varius mauris.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-sm:flex max-sm:w-full max-sm:justify-center">
        <div className="h-[190px] border border-gray-900 bg-white drop-shadow-xl max-sm:mb-10 max-sm:flex max-sm:w-[90%]">
          <div className="max-sm:flex max-sm:flex-row max-sm:items-center max-sm:justify-center ">
            <div className="w-[10%] max-sm:px-4 max-sm:py-5">
              <DevicePhoneMobileIcon className="h-11 w-11 text-blue-900" />
            </div>
            <div className="w-[90%] max-sm:items-center max-sm:px-6 max-sm:py-5">
              <h2 className="font-exo2  text-lg font-bold text-green-900 max-sm:text-center">
                Desenvolvimento de Aplicativos
              </h2>
              <span className="font-lato text-sm font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                interdum eleifend risus, eu lacinia tellus dignissim et. In
                fermentum quam et risus tristique, sit amet tristique quam
                bibendum. Fusce ac varius mauris.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
