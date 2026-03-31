import type { Metadata } from 'next'
import { DM_Sans, Sora, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css'
import { ConditionalLayout } from '@/components/conditional-layout'

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '600', '700']
})

const sora = Sora({ 
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['400', '500', '600', '700']
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ignixtech.ca'),
  title: {
    default: 'Ignixtech | Ignite Your Ideas, Transform Your Future',
    template: '%s | Ignixtech'
  },
  description: 'We revolutionize industries with dynamic digital solutions, tailored to meet contemporary demands and drive impactful transformations for businesses of all sectors.',
  keywords: ['software development', 'UI/UX design', 'mobile app development', 'DevOps', 'cybersecurity', 'quality assurance', 'tech partner', 'digital transformation'],
  authors: [{ name: 'Ignixtech' }],
  creator: 'Ignixtech',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://ignixtech.ca',
    title: 'Ignixtech | Ignite Your Ideas, Transform Your Future',
    description: 'We revolutionize industries with dynamic digital solutions, tailored to meet contemporary demands and drive impactful transformations.',
    siteName: 'Ignixtech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ignixtech | Ignite Your Ideas, Transform Your Future',
    description: 'We revolutionize industries with dynamic digital solutions.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/fav.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

import { ThemeProvider } from '@/components/theme-provider'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${sora.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
