import Layout from '@/components/common/layout/Layout'
import Providers from '@/components/common/providers/Providers'
import '@styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RadioCopilot Admin Dashboard',
  description: 'Admin dashboard for managing RadioCopilot clients, stations, and AI voices',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={`dark`} lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}
