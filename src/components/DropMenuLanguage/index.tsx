import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Image from 'next/image'
import FlagBrazil from '../../../assets/flagbr.svg'
import FlagEUA from '../../../assets/flageua.svg'
export function DropmenuLangauge() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="flex flex-row gap-2 rounded-xl bg-gray-900 px-2 py-2">
          <Image
            src={FlagBrazil}
            alt="Flag Brazil select language"
            width={22}
            height={22}
          />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="mt-2">
          <DropdownMenu.Item>
            <button className="flex flex-row gap-2 rounded-xl bg-gray-900 px-2 py-2">
              <Image
                src={FlagEUA}
                alt="Flag United States select language"
                width={22}
                height={22}
              />
            </button>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
