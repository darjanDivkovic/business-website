import type { Metadata } from 'next'
import '@/app/styles/globals.css'

export const metadata: Metadata = {
  title: 'darjan.dev',
  description: 'Freelance developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}