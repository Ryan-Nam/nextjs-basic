import Link from 'next/link';
import styles from './layout.module.css';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'nice website | All products',
  description: 'Check our amazing products'
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href='/products/women'>Women Clothes</Link>
        <Link href='/products/men'>Men Clothes</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}
