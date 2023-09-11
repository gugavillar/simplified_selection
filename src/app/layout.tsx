import '../styles/global.css'
import { SideMenu, Header } from '@/components'

export const metadata = {
  title: 'Seleção simplificada',
  description: 'Sistema de seleção simplificada para municípios.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col h-screen">
        <Header>
          <SideMenu />
          <div className="flex-grow pb-4 pr-4">{children}</div>
        </Header>
      </body>
    </html>
  )
}
