import { PropsWithChildren } from 'react'

export const List = ({ children }: PropsWithChildren) => {
  return <ul className="space-y-1 pt-4">{children}</ul>
}
