

import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "logincart-96e4a.firebaseapp.com",
  projectId: "logincart-96e4a",
  storageBucket: "logincart-96e4a.appspot.com",
  messagingSenderId: "2130231643",
  appId: "1:2130231643:web:1f6499279ed3bf8d361a7e"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const provider = new GoogleAuthProvider();

export {auth, provider}

