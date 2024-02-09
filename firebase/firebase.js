// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, OAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDspy0MZSwQZgHoPKlHWh03bgGv5fkXpM",
  authDomain: "testapp-57ff9.firebaseapp.com",
  projectId: "testapp-57ff9",
  storageBucket: "testapp-57ff9.appspot.com",
  messagingSenderId: "1049823930264",
  appId: "1:1049823930264:web:83fce9ea590fdb3caaeded"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const appleProvider = new OAuthProvider('apple.com');

export const firestore = getFirestore(app);
export const storage = getStorage(app);

export default app; // Export the app if needed
