import Image from 'next/image'
import { PropsWithChildren } from 'react'

export const Header = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full flex flex-col">
      <header className="h-32 flex align-middle justify-center my-4">
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
      <main className="flex flex-grow overflow-y-auto mb-6">{children}</main>
    </div>
  )
}
