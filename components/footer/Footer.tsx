import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
    return <footer className={styles.footer}>Developed by <a href="https://github.com/sonianb">Sonia</a> &amp; <a href="https://github.com/romanlp">Roman</a>. 

    </footer>
}