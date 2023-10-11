// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSZwW-ZO_CQC6HMkxUXdGjvNNm0qbb-sA",
  authDomain: "firestore-vite.firebaseapp.com",
  projectId: "firestore-vite",
  storageBucket: "firestore-vite.appspot.com",
  messagingSenderId: "478273004916",
  appId: "1:478273004916:web:0de0a973c9befbcde83821",
  measurementId: "G-ZYB5J0CN30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);