// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyChDg9Fx5HzkG1amZGOxu0OzLog_AShTWM",
//   authDomain: "ecommerce-rp-1.firebaseapp.com",
//   projectId: "ecommerce-rp-1",
//   storageBucket: "ecommerce-rp-1.appspot.com",
//   messagingSenderId: "196477334657",
//   appId: "1:196477334657:web:f08028eb642b1b3db70980",
//   measurementId: "G-0MKMSFNFH5"
// };


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};



// Initialize Firebase
export const Firebase = initializeApp(firebaseConfig);