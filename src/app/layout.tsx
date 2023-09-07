import { Header } from '@/components/Header'
import '../styles/global.css'

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
      <body className="h-screen">
        <Header>{children}</Header>
      </body>
    </html>
  )
}
