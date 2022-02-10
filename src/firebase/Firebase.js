import { initializeApp } from "firebase/app";
//import firebase from "firebase/compat/app"
import {getFirestore, collection} from "firebase/firestore"
import {getAuth} from 'firebase/auth'

const app = initializeApp({
  apiKey: "AIzaSyAa997StgmfCpFPG8ENEMJ11rEXoIoO4jc",
  authDomain: "proyecto-afrodita.firebaseapp.com",
  projectId: "proyecto-afrodita",
  storageBucket: "proyecto-afrodita.appspot.com",
  messagingSenderId: "860694661303",
  appId: "1:860694661303:web:e3422d1e091c0b2fa06532",
  measurementId: "G-M4JFB2X3S2"
});

//const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const coleccion = collection(db, "productos")
export const auth =  getAuth(app);

