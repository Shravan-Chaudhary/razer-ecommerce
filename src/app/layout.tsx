import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Titillium_Web } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import { cn } from '@/lib/utils'

const inter = Titillium_Web({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Razer',
  description: 'An e-commerce website for Razer products',
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Server Components',
    'Server Actions',
    'Razer',
    'Razer-eccomerce',
    'Razer products',
    'Razer ecommerce',
    'Razer mouse',
    'Razer keyboard',
    'shravan razer ecommerce',
  ],
  authors: [
    {
      name: 'Shravan-Chaudhary',
      url: 'https://github.com/Shravan-Chaudhary',
    },
  ],
  creator: 'Shravan-Chaudhary',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background', inter.className)}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
