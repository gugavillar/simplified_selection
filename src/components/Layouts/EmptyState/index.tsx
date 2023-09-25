import { EmptyFolder } from '@/Icons'

type EmptyStateProps = {
  title?: string
  description?: string
}

const EMPTY_STATE_DEFAULT_VALUES = {
  description:
    'No momento, não temos dados para serem listados. Fique tranquilo, assim que tivermos dados, você poderá visualizar suas informações aqui.',
  title: 'Ainda não há dados cadastrados aqui.',
}

export const EmptyState = ({ description, title }: EmptyStateProps) => {
  return (
    <div className="flex h-3/4 items-center justify-center">
      <article className="mx-auto max-w-3xl rounded-xl bg-white p-4 ring ring-matisse-600 sm:p-6 lg:p-8">
        <div className="flex items-start sm:gap-8">
          <div
            className="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-matisse-600"
            aria-hidden="true"
          >
            <EmptyFolder width="48" height="48" />
          </div>

          <div>
            <h3 className="mt-4 text-lg font-medium sm:text-xl">
              {title ?? EMPTY_STATE_DEFAULT_VALUES.title}
            </h3>

            <p className="mt-1 text-sm text-gray-700">
              {description ?? EMPTY_STATE_DEFAULT_VALUES.description}
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}
