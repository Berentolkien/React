import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZZJf0AjFXzH8UJ-Vo7ZejLdfS3TImAbU",
  authDomain: "coderhouse-7ff30.firebaseapp.com",
  projectId: "coderhouse-7ff30",
  storageBucket: "coderhouse-7ff30.appspot.com",
  messagingSenderId: "277028443052",
  appId: "1:277028443052:web:2c204adbeec327b7b22009",
  measurementId: "G-X5ZZ5Z1PG4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };