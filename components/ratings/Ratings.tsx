import { getFirestore } from 'firebase/firestore';
import firebaseApp from '../../lib/firebase';
import { useAuth } from '../../lib/firebase.auth';
import styles from './Ratings.module.css';

const db = getFirestore(firebaseApp);


export default function Ratings({ movie }) {

  const { user, rateMovie } = useAuth();

  return <div className={styles.stars}>
    {user?.ratings && user.ratings[movie.id] && <span>{user.ratings[movie.id]}</span>}
    <span className='dd' onClick={() => rateMovie(movie.id, 5)}>☆</span>
    <span onClick={() => rateMovie(movie.id, 4)}>☆</span>
    <span onClick={() => rateMovie(movie.id, 3)}>☆</span>
    <span onClick={() => rateMovie(movie.id, 2)}>☆</span>
    <span onClick={() => rateMovie(movie.id, 1)}>☆</span>
  </div>
}
