import Image from 'next/image'
import { PropsWithChildren } from 'react'

export const Header = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex w-full flex-col">
      <header className="my-4 flex h-32 justify-center align-middle">
        <div className="p-4">
          <Image
            src="/assets/brasao.png"
            alt="teste"
            width={400}
            height={96}
            priority
          />
        </div>
      </header>
      <main className="mb-6 flex flex-grow overflow-y-auto">{children}</main>
    </div>
  )
}
