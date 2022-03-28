import { doc, getFirestore, setDoc } from "firebase/firestore";
import firebaseApp from "./firebase";

const db = getFirestore(firebaseApp);

export const createUser = (uid, data) => {
  return setDoc(doc(db, 'users', uid), { uid, ...data }, { merge: true });
};

export const dbRateMovie = async (userId: string, id: string, rating: number) => {
  await setDoc(doc(db, 'users', userId), {
    ratings: {
      [id]: rating
    }
  }, { merge: true });
};
