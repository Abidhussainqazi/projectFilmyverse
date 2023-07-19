
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC5pOosQP2xr2AtFWlpvMI-BC2t7Tgfb5U",
  authDomain: "filmyverse-9a616.firebaseapp.com",
  projectId: "filmyverse-9a616",
  storageBucket: "filmyverse-9a616.appspot.com",
  messagingSenderId: "585191200492",
  appId: "1:585191200492:web:ad5ea1062b52c2ee78b7c9"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");
export default app;