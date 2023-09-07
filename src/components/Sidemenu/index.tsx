import { UserPlus, Gauge, SignOut } from '@/Icons'

import { List } from './List'
import { ListItem } from './ListItem'
import { LogoutButton } from './LogoutButton'

export const MENU_LINKS = [
  {
    label: 'Dashboard',
    link: '/',
    children: <Gauge />,
  },
  {
    label: 'Candidato',
    link: '/',
    children: <UserPlus />,
  },
] as const

export const SideMenu = () => {
  return (
    <div className="flex w-16 flex-col justify-between bg-matisse-600">
      <div className="px-2">
        <List>
          {MENU_LINKS.map((option, index) => (
            <ListItem key={index} label={option.label} link={option.link}>
              {option.children}
            </ListItem>
          ))}
        </List>
      </div>

      <LogoutButton label="Sair" link="/">
        <SignOut />
      </LogoutButton>
    </div>
  )
}
