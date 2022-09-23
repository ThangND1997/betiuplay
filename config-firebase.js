// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBeyG8kQr6OH8mO6bXLYWP9rrOI287WdmQ",
    authDomain: "betiuplay-1997.firebaseapp.com",
    projectId: "betiuplay-1997",
    storageBucket: "betiuplay-1997.appspot.com",
    messagingSenderId: "896936357941",
    appId: "1:896936357941:web:45051c0e6d9cd74c9a817c",
    measurementId: "G-XG3XZ4JFB6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
export default firebase