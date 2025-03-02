import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {


  // Write Your Own Firebase Credentials or connect your firebase


  
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
