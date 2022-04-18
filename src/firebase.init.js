// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4PdJta5lvg__vdYybqOdkq5b4ZSgRr0s",
  authDomain: "independent-service-prov-34e04.firebaseapp.com",
  projectId: "independent-service-prov-34e04",
  storageBucket: "independent-service-prov-34e04.appspot.com",
  messagingSenderId: "451172344754",
  appId: "1:451172344754:web:22a8c8be55888e1c02baab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
