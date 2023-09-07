import Link from 'next/link'
import { PropsWithChildren } from 'react'

type ListItemProps = PropsWithChildren & {
  link: string
  label: string
}

export const ListItem = ({ children, label, link }: ListItemProps) => {
  return (
    <li className="group relative flex justify-center rounded px-2 py-1.5 text-white hover:bg-matisse-500 hover:text-white">
      <Link href={link}>
        {children}
        <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-matisse-600 px-2 py-1.5 text-xs font-medium text-white hidden group-hover:flex">
          {label}
        </span>
      </Link>
    </li>
  )
}
