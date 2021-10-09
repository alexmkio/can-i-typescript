import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyBse-FqQnF_qxu8L80qh4vp7vqi_dzX1ZE",
  authDomain: "can-i-typescript.firebaseapp.com",
  projectId: "can-i-typescript",
  storageBucket: "can-i-typescript.appspot.com",
  messagingSenderId: "1014837999040",
  appId: "1:1014837999040:web:ea861af5eac6cd31878425"
})

export const db = getFirestore()