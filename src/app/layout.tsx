import type { Metadata } from 'next'
import '../styles/globals.css'
import { CustomCursor } from '@/components/CustomCursor'

export const metadata: Metadata = {
  title: 'Curtis Lee | Builder',
  description: 'Full-stack engineer building serverless apps on AWS. Cloud • DevOps • Product Engineering.',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#fafaf9" />
      </head>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}