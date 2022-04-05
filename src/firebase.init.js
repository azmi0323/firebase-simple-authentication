// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA5XsML6mdpodjzNxg8aQEZ1Spb9qKNKk",
  authDomain: "fir-simple-authenticatio-cdedc.firebaseapp.com",
  projectId: "fir-simple-authenticatio-cdedc",
  storageBucket: "fir-simple-authenticatio-cdedc.appspot.com",
  messagingSenderId: "145160100203",
  appId: "1:145160100203:web:579a40e5ee579c3342942e",
  measurementId: "G-XKJ83YM3N6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;