// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCESVrHO9Tza-z2SMuYBe-3HhSL9EZd8Bs",
  authDomain: "howa-a9f06.firebaseapp.com",
  projectId: "howa-a9f06",
  storageBucket: "howa-a9f06.appspot.com",
  messagingSenderId: "328300805498",
  appId: "1:328300805498:web:5f81d7071f7b930fe9eac3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);