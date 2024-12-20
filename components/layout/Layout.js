import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href={"/"}>
          <h2>Car shop</h2>
          <p>Choose and buy your car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>Amirmfth Next.js project | Car shop &copy;</footer>
    </>
  );
}

export default Layout;
