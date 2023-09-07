import { PropsWithChildren } from 'react'

type WrapperPageProps = PropsWithChildren & {
  title: string
}

export const WrapperPage = ({ children, title }: WrapperPageProps) => {
  return (
    <div className="mx-auto max-w-screen-lg">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-xl font-bold sm:text-3xl mb-6">{title}</h1>
      </div>
      {children}
    </div>
  )
}
