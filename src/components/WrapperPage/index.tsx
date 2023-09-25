import { PropsWithChildren, Suspense } from 'react'

import { LoaderContent } from '@/components/LoaderContent'

type WrapperPageProps = PropsWithChildren & {
  title?: string
}

export const WrapperPage = ({ children, title }: WrapperPageProps) => {
  return (
    <div className="mx-auto h-full max-w-5xl pb-6">
      {title ? (
        <div className="mx-auto max-w-lg text-center">
          <h1 className="mb-6 text-2xl font-bold text-matisse-600 sm:text-4xl">
            {title}
          </h1>
        </div>
      ) : null}
      <Suspense fallback={<LoaderContent />}>{children}</Suspense>
    </div>
  )
}
