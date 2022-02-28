import { initializeApp } from 'firebase/app';
import { FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';


const firebaseConfig = {
  apiKey: "AIzaSyBlazGlIWRSB5SuBk_rP8mCofOPE_Dwms8",
  authDomain: "five-stars-areeltrip.firebaseapp.com",
  databaseURL: "https://five-stars-areeltrip-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "five-stars-areeltrip",
  storageBucket: "five-stars-areeltrip.appspot.com",
  messagingSenderId: "189009950416",
  appId: "1:189009950416:web:304a18ade6c99c466910d5",
  measurementId: "G-TH67C7W223"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth();

export const useAuth = () => {
  const [user, setUser] = useState<undefined | { email: string, photoURL: string }>(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    onAuthStateChanged(auth, function handleAuth(user) {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false)
      }
    });
  }, [user]);

  const signInWithGoogle = () => signInWithPopup(auth, new GoogleAuthProvider());

  const signInWithPassword = async (email, password) => await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    });

  const signOutUser = () => signOut(auth);

  return { user, loading, signInWithGoogle, signInWithPassword, signOutUser };
}


export default firebaseApp;