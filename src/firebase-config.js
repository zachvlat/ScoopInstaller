// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3AnDKsr3v4WECdC-GKJ45FeWqErnafAQ",
  authDomain: "scoopinstaller-b76c0.firebaseapp.com",
  projectId: "scoopinstaller-b76c0",
  storageBucket: "scoopinstaller-b76c0.appspot.com",
  messagingSenderId: "579921949309",
  appId: "1:579921949309:web:e5a74154f145c1dd1fb714",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
