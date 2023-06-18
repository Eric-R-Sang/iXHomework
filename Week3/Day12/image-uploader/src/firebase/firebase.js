// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaQe-kiWekpP0cH8QsLEB3_PwqPl6_-mI",
  authDomain: "movie-list-af1ef.firebaseapp.com",
  projectId: "movie-list-af1ef",
  storageBucket: "movie-list-af1ef.appspot.com",
  messagingSenderId: "1048507819607",
  appId: "1:1048507819607:web:d6365dcccd0dc4bc30a512"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };