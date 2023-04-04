import { initializeApp } from "firebase/app";
import { serverTimestamp, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZswMsaNe5xjrq-itgMLG8CUDmj5tvW_o",
  authDomain: "testvue-f0af2.firebaseapp.com",
  projectId: "testvue-f0af2",
  storageBucket: "testvue-f0af2.appspot.com",
  messagingSenderId: "962153115118",
  appId: "1:962153115118:web:22242135f7de3858d632ff",
  measurementId: "G-KBVQF6B1WB",
};

const app = initializeApp(firebaseConfig);

const projectFileStore = getFirestore(app);
const projectAuth = getAuth(app);

const timestamp = serverTimestamp();

export { projectAuth, projectFileStore, timestamp };
