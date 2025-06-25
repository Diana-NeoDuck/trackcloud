import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './src/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TrackCloud',
  description: 'Plataforma de gestión logística',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-50`}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
