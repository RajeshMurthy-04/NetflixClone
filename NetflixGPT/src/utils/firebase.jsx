// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDawR_Noph4fcO5v9K2WkMWjDQf_BxQEzk",
  authDomain: "netflixgpt-b0de0.firebaseapp.com",
  projectId: "netflixgpt-b0de0",
  storageBucket: "netflixgpt-b0de0.firebasestorage.app",
  messagingSenderId: "854629733708",
  appId: "1:854629733708:web:e34735539c6c7028f06be9",
  measurementId: "G-BMSV060CB7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
