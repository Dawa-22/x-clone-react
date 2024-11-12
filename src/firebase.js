// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcd4tl4lA3INMJ5GC9niDexPrjq7i8ai0",
  authDomain: "x-clone-reactjs.firebaseapp.com",
  projectId: "x-clone-reactjs",
  storageBucket: "x-clone-reactjs.firebasestorage.app",
  messagingSenderId: "637810822726",
  appId: "1:637810822726:web:f56732dddf712a1d84c447",
  measurementId: "G-V6MV5BDZZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
