import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyCSZwW-ZO_CQC6HMkxUXdGjvNNm0qbb-sA",
    authDomain: "firestore-vite.firebaseapp.com",
    projectId: "firestore-vite",
    storageBucket: "firestore-vite.appspot.com",
    messagingSenderId: "478273004916",
    appId: "1:478273004916:web:0de0a973c9befbcde83821",
    measurementId: "G-ZYB5J0CN30"
  };

const app = initializeApp(firebaseConfig);


function AuthComponent() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
  
    const handleGoogleSignIn = async () => {
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log(`Signed in as: ${user.displayName}`);
      } catch (error) {
        console.error('Error signing in with Google:', error);
      }
    };
  
    return (
      <div>
        <h2>Sign In with Google</h2>
        <button onClick={handleGoogleSignIn}>Sign In with Google</button>
      </div>
    );
  }
  
  export default AuthComponent;