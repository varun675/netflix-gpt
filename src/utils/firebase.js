// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8Vy-bn5hNMdWuVK58UndkONXfJqWnYhY",
  authDomain: "netflixgpt-31cb8.firebaseapp.com",
  projectId: "netflixgpt-31cb8",
  storageBucket: "netflixgpt-31cb8.firebasestorage.app",
  messagingSenderId: "388677336509",
  appId: "1:388677336509:web:0c54d04f94b94ec465e6d4",
  measurementId: "G-87N65D4Q6Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };