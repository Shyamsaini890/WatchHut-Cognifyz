import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpBc2OLxsYrC-DAucAViuCZsjfR2RZOFY",
  authDomain: "task4-ff1b4.firebaseapp.com",
  projectId: "task4-ff1b4",
  storageBucket: "task4-ff1b4.appspot.com",
  messagingSenderId: "576053025365",
  appId: "1:576053025365:web:a76293d4f242549aa212dc",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
