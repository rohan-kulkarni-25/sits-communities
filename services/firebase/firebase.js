// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI5MuyZXyjY-xf50brpu4rXvjU4uWRZeQ",
  authDomain: "sits-communities.firebaseapp.com",
  projectId: "sits-communities",
  storageBucket: "sits-communities.appspot.com",
  messagingSenderId: "484744715563",
  appId: "1:484744715563:web:c50055f9a7593014db396e",
  measurementId: "G-YPN78R30MP",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export { firebaseApp };
