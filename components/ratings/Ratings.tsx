import { doc, getFirestore, updateDoc } from 'firebase/firestore';
import firebaseApp from '../../lib/firebase';
import styles from './Ratings.module.css';

const db = getFirestore(firebaseApp);


export default function Ratings({movie}) {
    
    const rateMovie = async (id: string, rating: number) => {
      await updateDoc(doc(db, 'users', 't6aEmLDMWEzR839g5XsP'), {
        ['ratings.' + id]: rating
      });
    };

    return <div className={styles.stars}>
    <span onClick={() => rateMovie(movie.id, 1)}>☆</span>
    <span onClick={() => rateMovie(movie.id, 2)}>☆</span>
    <span onClick={() => rateMovie(movie.id, 3)}>☆</span>
    <span onClick={() => rateMovie(movie.id, 4)}>☆</span>
    <span onClick={() => rateMovie(movie.id, 5)}>☆</span>
  </div>
}