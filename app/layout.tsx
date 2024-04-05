import type { Metadata } from 'next'
import { roboto } from '@/styles/fonts'
import '@/styles/reset.scss'
import '@/styles/common.scss'

const title = process.env.NEXT_PUBLIC_SITE_NAME
const url = process.env.NEXT_PUBLIC_BASE_URL

export const metadata: Metadata = {
  title: {
    template: `%s | ${title} `,
    default: 'Next Movie'
  },
  description: '',
  openGraph: {
    title: 'Next.js Movie App',
    type: 'website',
    images: `${url}/main.jpg`,
    url: url,
    description: '',
    siteName: title,
    locale: 'ko_KR'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
