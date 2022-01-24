// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//import {getFirestore} from ""
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa997StgmfCpFPG8ENEMJ11rEXoIoO4jc",
  authDomain: "proyecto-afrodita.firebaseapp.com",
  projectId: "proyecto-afrodita",
  storageBucket: "proyecto-afrodita.appspot.com",
  messagingSenderId: "860694661303",
  appId: "1:860694661303:web:e3422d1e091c0b2fa06532",
  measurementId: "G-M4JFB2X3S2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);