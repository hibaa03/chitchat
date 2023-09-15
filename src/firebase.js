// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCNXuTTx1kkB4nDHb_12KcDAVn_5haplqc",
  authDomain: "messaging-app-73e24.firebaseapp.com",
  projectId: "messaging-app-73e24",
  storageBucket: "messaging-app-73e24.appspot.com",
  messagingSenderId: "281842757083",
  appId: "1:281842757083:web:b6a31860f62bc9baf70bfe",
  measurementId: "G-GYW4KCZT3Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
