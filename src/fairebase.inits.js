// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1XzCOwKFJ3Yv6D9_x9BmQUC4fAlIAx4I",
  authDomain: "dragons-news-e9c95.firebaseapp.com",
  projectId: "dragons-news-e9c95",
  storageBucket: "dragons-news-e9c95.firebasestorage.app",
  messagingSenderId: "294393188028",
  appId: "1:294393188028:web:31798330a53a1be0c00ab9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);
export default Auth;