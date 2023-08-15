import './globals.css'
import type { Metadata } from 'next'
import { Inter, IBM_Plex_Mono, Victor_Mono } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
const victor_mono = Victor_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-victor',
})

export const metadata: Metadata = {
  title: 'Pedro Henrique',
  description: 'Desenvolvedor de Software - Back end e Mobile',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${victor_mono.variable}`}>{children}</body>
    </html>
  )
}
