import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Image from 'next/image'
import { useState } from 'react'
import FlagBrazil from '../../../public/assets/flagbr.svg'
import FlagEUA from '../../../public/assets/flageua.svg'

export function DropmenuLangauge() {
  const [flagSelect, setFlagSelected] = useState('pt')

  function handleChangeLanguage() {
    setFlagSelected(flagSelect === 'pt' ? 'en' : 'en')
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="flex flex-row gap-2 rounded-xl bg-zinc-100 px-2 py-2  hover:bg-zinc-200 hover:transition hover:duration-700 hover:ease-in-out">
          {flagSelect === 'pt' ? (
            <Image
              src={FlagBrazil}
              alt="Flag Brazil select language"
              width={22}
              height={22}
            />
          ) : (
            <Image
              src={FlagEUA}
              alt="Flag United States select language"
              width={22}
              height={22}
            />
          )}
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="mt-2">
          <DropdownMenu.Item>
            <button
              className="flex flex-row gap-2 rounded-xl bg-gray-900 px-2 py-2 "
              onClick={handleChangeLanguage}
            >
              {flagSelect === 'pt' ? (
                <Image
                  src={FlagEUA}
                  alt="Flag United States select language"
                  width={22}
                  height={22}
                />
              ) : (
                <Image
                  src={FlagBrazil}
                  alt="Flag Brazil select language"
                  width={22}
                  height={22}
                />
              )}
            </button>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
