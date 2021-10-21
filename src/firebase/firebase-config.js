
import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCRFX8xYhZQDdom3D_ryd8lMHAoEVpPhZw",
    authDomain: "react-app-testing-cc944.firebaseapp.com",
    projectId: "react-app-testing-cc944",
    storageBucket: "react-app-testing-cc944.appspot.com",
    messagingSenderId: "198723751082",
    appId: "1:198723751082:web:813636b4f0eb97c0ecd4d3",
    measurementId: "G-K8BRK864XR"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore();

  const googleAuthProvider = new GoogleAuthProvider();
 
export{
    db,
    googleAuthProvider
}