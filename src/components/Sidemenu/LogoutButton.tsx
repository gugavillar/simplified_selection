import Link from 'next/link'
import { PropsWithChildren } from 'react'

type LogoutButtonProps = PropsWithChildren & {
  link: string
  label: string
}

export const LogoutButton = ({ label, link, children }: LogoutButtonProps) => {
  return (
    <div className="sticky bottom-0 p-2">
      <Link
        href={link}
        className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
      >
        {children}
        <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
          {label}
        </span>
      </Link>
    </div>
  )
}
