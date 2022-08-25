// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHQG9BYFbsh_ZB2IBEjCh6_u-US__U-Zo",
  authDomain: "test01-3dc91.firebaseapp.com",
  projectId: "test01-3dc91",
  storageBucket: "test01-3dc91.appspot.com",
  messagingSenderId: "496552568525",
  appId: "1:496552568525:web:ce2ea09995b8d412096b84",
  measurementId: "G-T40F6EP9DB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
