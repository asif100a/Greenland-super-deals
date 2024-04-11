// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdd00HayCcti9izu-b8eA4N-i5882yY0k",
  authDomain: "assignment-9-e061d.firebaseapp.com",
  projectId: "assignment-9-e061d",
  storageBucket: "assignment-9-e061d.appspot.com",
  messagingSenderId: "92066327048",
  appId: "1:92066327048:web:562ea7108ee836929c7fbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Provide auth
const auth = getAuth(app);
export default auth;