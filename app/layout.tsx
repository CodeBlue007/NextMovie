import type { Metadata } from 'next'
import {roboto} from '@/styles/fonts'
import '@/styles/reset.scss'
import '@/styles/common.scss'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
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
