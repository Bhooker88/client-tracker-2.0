// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBMRhpCHmeYjxptVAQo3EG-QPuKVwNDAIQ",
  authDomain: "client-tracker-91a63.firebaseapp.com",
  projectId: "client-tracker-91a63",
  storageBucket: "client-tracker-91a63.appspot.com",
  messagingSenderId: "199365220538",
  appId: "1:199365220538:web:8f3f767f1d44b319608a83",
  measurementId: "G-K77Y2PZGQF"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

export default app;