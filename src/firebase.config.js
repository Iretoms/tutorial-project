import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-tkNf8rLpDPoMBN5O8jD9RptcRajpkzA",
  authDomain: "house-market-app-2464e.firebaseapp.com",
  projectId: "house-market-app-2464e",
  storageBucket: "house-market-app-2464e.appspot.com",
  messagingSenderId: "700217064168",
  appId: "1:700217064168:web:57a604001752bd844da75d",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
