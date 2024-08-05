// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAePOmZPSpuJXOsRB0-qQ3KbiF2k05-8m0",
  authDomain: "pantry-6f479.firebaseapp.com",
  projectId: "pantry-6f479",
  storageBucket: "pantry-6f479.appspot.com",
  messagingSenderId: "286653623844",
  appId: "1:286653623844:web:00d1ae773a42ee6d22b2b1",
  measurementId: "G-PDRJW87ENB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app); // Initialize Firestore

export { firestore };