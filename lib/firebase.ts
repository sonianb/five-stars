import { initializeApp } from 'firebase/app';


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

export default firebaseApp;