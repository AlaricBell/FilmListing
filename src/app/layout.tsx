import './modules/common/styles/base/base.scss'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import Navigation from './modules/common/components/Navigaton/Navigation'
import Modal from './modules/common/components/modals/Modal'

const openSans = Open_Sans({ subsets: ['latin'] })

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
      <body className={openSans.className}>
      <Navigation/>
      <Modal />
        {children}
        </body>
    </html>
  )
}
