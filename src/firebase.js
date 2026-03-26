// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB1eNjZWCYfbT3Z5vgtBEQn9Or7nP9NJY",
  authDomain: "mindtrack-757d7.firebaseapp.com",
  projectId: "mindtrack-757d7",
  storageBucket: "mindtrack-757d7.firebasestorage.app",
  messagingSenderId: "1087319095910",
  appId: "1:1087319095910:web:195d3989e4a5e309238ba7",
  measurementId: "G-CSRYS42W9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);