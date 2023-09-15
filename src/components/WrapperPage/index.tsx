import { PropsWithChildren, Suspense } from 'react'

import { LoaderContent } from '@/components/LoaderContent'

type WrapperPageProps = PropsWithChildren & {
  title?: string
}

export const WrapperPage = ({ children, title }: WrapperPageProps) => {
  return (
    <div className="mx-auto max-w-5xl pb-6">
      {title ? (
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-matisse-600 text-xl font-bold sm:text-3xl mb-6">
            {title}
          </h1>
        </div>
      ) : null}
      <Suspense fallback={<LoaderContent />}>{children}</Suspense>
    </div>
  )
}
