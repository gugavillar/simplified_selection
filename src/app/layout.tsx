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
        <div className="flex w-screen h-screen">
          <SideMenu />
          <Header>
            <div className="flex-grow px-4">{children}</div>
          </Header>
        </div>
      </body>
    </html>
  )
}
