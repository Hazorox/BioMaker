// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "biomaker3.firebaseapp.com",
  projectId: "biomaker3",
  storageBucket: "biomaker3.appspot.com",
  messagingSenderId: "576145308377",
  appId: "1:576145308377:web:4a4da8a21a89a55d4b9cc8",
  measurementId: "G-VP9R47D159",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app)
const storage = getStorage(app)
export { app, auth,db,storage };
