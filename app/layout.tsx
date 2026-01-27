import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kshitij Panchal | Data Scientist Portfolio',
  description: 'Portfolio of Kshitij Surendra Panchal - Data Scientist passionate about Deep Learning and Analytics',
  keywords: ['Data Science', 'Deep Learning', 'Analytics', 'Machine Learning', 'AI'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
