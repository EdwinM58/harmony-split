// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6bNOIFKyEZMWiQ2oPYb2CGvU_IV-VFqk",
  authDomain: "harmony-split.firebaseapp.com",
  projectId: "harmony-split",
  storageBucket: "harmony-split.appspot.com",
  messagingSenderId: "685348382857",
  appId: "1:685348382857:web:3e37fc9336b5f8e821be58",
  measurementId: "G-R033BQ64KW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);