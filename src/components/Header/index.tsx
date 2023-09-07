import Image from 'next/image'
import { Fragment, PropsWithChildren } from 'react'

export const Header = ({ children }: PropsWithChildren) => {
  return (
    <Fragment>
      <header className="h-32 flex align-middle justify-center">
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
      <main className="flex flex-grow gap-4">{children}</main>
    </Fragment>
  )
}
