// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIqkwGhBgJG6NvdwfK82HCxH3fWxCAF-w",
  authDomain: "shuvokkhon-36e3b.firebaseapp.com",
  projectId: "shuvokkhon-36e3b",
  storageBucket: "shuvokkhon-36e3b.appspot.com",
  messagingSenderId: "573525679289",
  appId: "1:573525679289:web:4f17c6c84c17a81b8ecf68",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
