import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import firebaseApp from "./firebase";
import { useAuth } from "./firebase.auth";

const db = getFirestore(firebaseApp);

export function createUser(uid, data) {
  return setDoc(doc(db, 'users', uid), { uid, ...data }, { merge: true });
}

export const useDB = () => {
  const { user } = useAuth();
  const [ratings, setRatings] = useState({});
  const [loading, setLoading] = useState(false);

  const getRatings = async () => {
    if (user) {
      const userRatings = await getDoc(doc(db, 'users', user.uid));
      return userRatings.data().ratings;
    }
  };

  useEffect(() => {
    setLoading(true);
    getRatings().then(ratings => {
      setRatings(ratings);
      setLoading(false);
    })
  }, [user]);

  return { ratings, loading, };
}
