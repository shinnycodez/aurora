// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
  apiKey: "AIzaSyBKp1N439Y4q2ifbHpo4zYee3LL7CY89i4",
  authDomain: "aurora-3afde.firebaseapp.com",
  projectId: "aurora-3afde",
  storageBucket: "aurora-3afde.firebasestorage.app",
  messagingSenderId: "750212308228",
  appId: "1:750212308228:web:1460d4b3d68573f07bc451",
  measurementId: "G-GTYECMY12H"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
export const storage = getStorage(app);

// ✅ Export the db
export { db };