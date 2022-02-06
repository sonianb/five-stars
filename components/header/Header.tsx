import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
    return <header className={styles.header}>Five Stars
        <nav className={styles.navitem}>
           <Link href="/">Home</Link>
        </nav>
    </header>
}