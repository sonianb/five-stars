import {doc, updateDoc} from 'firebase/firestore';
import styles from './Ratings.module.css';

export default function Ratings({movie}) {
    
    const rateMovie = async (id: string, rating: number) => {
        console.log('not implemented yet');
    };

    return <div className={styles.stars}>
    <span onClick={() => rateMovie(movie.id, 1)}>☆</span>
    <span onClick={() => rateMovie(movie.id, 2)}>☆</span>
    <span onClick={() => rateMovie(movie.id, 3)}>☆</span>
    <span onClick={() => rateMovie(movie.id, 4)}>☆</span>
    <span onClick={() => rateMovie(movie.id, 5)}>☆</span>
  </div>
}