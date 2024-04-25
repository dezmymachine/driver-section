// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX5JCKUqm0oL0RSHp4ad7NsAV2_rjNPr0",
  authDomain: "driver-portal-1aa5f.firebaseapp.com",
  projectId: "driver-portal-1aa5f",
  storageBucket: "driver-portal-1aa5f.appspot.com",
  messagingSenderId: "791779606006",
  appId: "1:791779606006:web:d9cefb487df12f65409bd7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

//firebase login, firebase init , firebase deploy
