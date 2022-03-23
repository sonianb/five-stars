import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
import firebaseApp from '../../lib/firebase';
import { useAuth } from '../../lib/firebase.auth';
import { useDB } from '../../lib/firebase.db';
import styles from './Ratings.module.css';

const db = getFirestore(firebaseApp);


export default function Ratings({ movie }) {

  const { user } = useAuth();
  const { ratings } = useDB();

  const rateMovie = async (id: string, rating: number) => {
    await setDoc(doc(db, 'users', user.uid), {
      ratings: {
        [id]: rating
      }
    }, { merge: true });
  };

  return <div className={styles.stars}>
    {ratings && ratings[movie.id] && <span>{ratings[movie.id]}</span>}
    <span className='dd' onClick={() => rateMovie(movie.id, 1)}>☆</span>
    <span onClick={() => rateMovie(movie.id, 2)}>☆</span>
    <span onClick={() => rateMovie(movie.id, 3)}>☆</span>
    <span onClick={() => rateMovie(movie.id, 4)}>☆</span>
    <span onClick={() => rateMovie(movie.id, 5)}>☆</span>
  </div>
}