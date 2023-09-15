import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="px-4 bg-white flex flex-col items-center justify-center text-center h-full">
      <h1 className="font-black text-gray-300 text-9xl">404</h1>
      <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Ops!
      </p>
      <p className="mt-4 text-gray-500">
        Não conseguimos encontrar essa página.
      </p>

      <Link
        prefetch
        href="/"
        className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-matisse-600 rounded hover:bg-matisse-700 focus:outline-none focus:ring"
      >
        Voltar para a página inicial
      </Link>
    </div>
  )
}
