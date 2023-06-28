import * as Dialog from '@radix-ui/react-dialog'
import Link from 'next/link'

type DialogProps = {
  visibleModal: boolean
  openModal: () => void
  titles: any[]
}
export function DialogComponent({
  visibleModal,
  openModal,
  titles,
}: DialogProps) {
  return (
    <div className="flex w-[90%] items-center  justify-center rounded-2xl  bg-white">
      <Dialog.Root open={visibleModal} onOpenChange={openModal}>
        <Dialog.Trigger asChild />
        <Dialog.Overlay />
        <Dialog.Content className="">
          {titles?.map((title) => (
            <Link
              key={title}
              href=""
              className="text-md  min-sm:hidden font-text  relative text-blue-600 hover:border-b-2 hover:border-b-blue-900  hover:font-bold hover:text-blue-900"
            >
              <p className="transform p-2 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-b-2 hover:border-b-blue-900 ">
                {title}
              </p>
            </Link>
          ))}
        </Dialog.Content>
      </Dialog.Root>
    </div>
  )
}
