// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyiOBsyjH-elqTHuSKkwSLNM8FTw6dgGc",
  authDomain: "react-curso-f4f9d.firebaseapp.com",
  projectId: "react-curso-f4f9d",
  storageBucket: "react-curso-f4f9d.appspot.com",
  messagingSenderId: "365215055743",
  appId: "1:365215055743:web:f378849f75cf5facd1a44a"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
