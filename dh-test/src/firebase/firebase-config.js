import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBr3NSAhHX694QYDq0EBUkrybNOnLYZRcI",
    authDomain: "authentication-tutorial-2f952.firebaseapp.com",
    projectId: "authentication-tutorial-2f952",
    storageBucket: "authentication-tutorial-2f952.appspot.com",
    messagingSenderId: "1080942579320",
    appId: "1:1080942579320:web:a3984c14d693cfb6cf678d",
    measurementId: "G-Z1XHL18T3Z"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);