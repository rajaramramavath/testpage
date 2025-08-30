// firebase.js

// Import the functions you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEfI4QzJU2kc2PEp02x36BftvO6P5qJps",
  authDomain: "admindemon-b3823.firebaseapp.com",
  projectId: "admindemon-b3823",
  storageBucket: "admindemon-b3823.firebasestorage.app",
  messagingSenderId: "33424574422",
  appId: "1:33424574422:web:96db3c6388d89d162c4677",
  measurementId: "G-188H3B2LSZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);

// Export the modules so you can import in other files
export { app, analytics, auth, db };
