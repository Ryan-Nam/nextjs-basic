import styles from './layout.module.css';

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={styles.nav}>
        <a href=''>Women's Clothes</a>
        <a href=''>Men's Clothes</a>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}
