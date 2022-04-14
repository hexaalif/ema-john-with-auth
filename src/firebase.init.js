// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6RnvlDlDzcf6TgZYDNwFb9IVioX5DA9Q",
  authDomain: "ema-john-react-235ea.firebaseapp.com",
  projectId: "ema-john-react-235ea",
  storageBucket: "ema-john-react-235ea.appspot.com",
  messagingSenderId: "741880259898",
  appId: "1:741880259898:web:5f4194ebe326fbadc4dc03",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
