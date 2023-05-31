// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAioTN63MFW5ED-Av54w3kkT-Vymqz8wrU",
  authDomain: "primerfire-68d2f.firebaseapp.com",
  projectId: "primerfire-68d2f",
  storageBucket: "primerfire-68d2f.appspot.com",
  messagingSenderId: "445316341179",
  appId: "1:445316341179:web:3f915fb7204f2a24a3789e",
  measurementId: "G-T222H9GTEP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth()

export { app, auth}