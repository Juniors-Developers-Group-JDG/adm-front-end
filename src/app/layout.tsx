import { ToastsProvider } from '@/context/ToastContext'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ToastsContainer } from '@/components/ToastContainer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ToastsProvider>
        <body className={inter.className}>
          {children}
          <ToastsContainer />
        </body>
      </ToastsProvider>
    </html>
  )
}
