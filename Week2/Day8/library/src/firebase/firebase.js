// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuFHN-XJgc1MCXkPS-cK-kuNcI24eBgQI",
  authDomain: "library-541f9.firebaseapp.com",
  projectId: "library-541f9",
  storageBucket: "library-541f9.appspot.com",
  messagingSenderId: "586530049158",
  appId: "1:586530049158:web:28a164f5cfc45beaecd507",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
