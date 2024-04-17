// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC080XVQCyM5K6OyIIA5ScgJE0iTKs_QG8",
  authDomain: "smart-irrigation-pfe.firebaseapp.com",
  projectId: "smart-irrigation-pfe",
  storageBucket: "smart-irrigation-pfe.appspot.com",
  messagingSenderId: "297898293095",
  appId: "1:297898293095:web:de508565c3bc46ac1661c2",
  measurementId: "G-2G4SD1ZP63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);