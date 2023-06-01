import Link from 'next/link'
import './globals.css'
import styles from './layout.module.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { Nanum_Gothic } from 'next/font/google'

export const metadata: Metadata = {
  title: 'nice website',
  description: 'We are ecommerce website in Sydney'
}

// const inter = Inter({ subsets: ['latin'] })
const sans = Open_Sans({subsets: ['latin']});
const gothic = Nanum_Gothic({
  weight: '700',
  subsets: ['latin'],
});

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body className={sans.className}>
        <header className={styles.header}>
          <h1 className={gothic.className}>Demo Note App</h1>
          <nav className={styles.nav}>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        {children}  
      </body>
    </html>
  )
}
