import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuYJ_J6a45bRtlz_-HP2lcCbHIw2jpInY",
  authDomain: "twitch-panel.firebaseapp.com",
  projectId: "twitch-panel",
  storageBucket: "twitch-panel.appspot.com",
  messagingSenderId: "228823643631",
  appId: "1:228823643631:web:221de6509a12693d6a721a",
  measurementId: "G-XDV4TXT8EV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
