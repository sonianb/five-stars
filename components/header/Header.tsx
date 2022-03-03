import Image from 'next/image';
import Link from 'next/link';

import styles from './Header.module.css';
import { useAuth } from '../../lib/firebase';

export default function Header() {
    const { user, signOutUser } = useAuth();

    return <header className={styles.header}>Five Stars
        <nav className={styles.navitem}>
           <Link href="/">Home</Link>

           { user ? 
            <div>
                <div>{ user.email }</div>
                <img src={user.photoURL} width={40} height={40}></img>
                <button onClick={() => signOutUser()}>Log out</button>
            </div>
           : <div></div>
           }
        </nav>
    </header>
}