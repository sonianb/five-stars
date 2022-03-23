import Link from 'next/link';
import { useAuth } from "../../lib/firebase.auth";
import styles from './Header.module.css';


export default function Header() {
    const { user, signout } = useAuth();

    return <header className={styles.header}>Five Stars
        <nav className={styles.navitem}>
            <Link href="/">Home</Link>

            {user ?
                <div>
                    <div>{user.email}</div>
                    <img src={user.photoUrl} width={40} height={40}></img>
                    <button onClick={() => signout()}>Log out</button>
                </div>
                : <div></div>
            }
        </nav>
    </header>
}