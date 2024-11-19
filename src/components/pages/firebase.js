import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAilgys3Y8YpwHYmwDBSQ5nQQH4flqN0X0",
  authDomain: "myproject-10599.firebaseapp.com",
  projectId: "myproject-10599",
  storageBucket: "myproject-10599.appspot.com",
  messagingSenderId: "992930142092",
  appId: "1:992930142092:web:54463fa742e6181584a8a9",
  measurementId: "G-43BNJQJHZ1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebase.auth();
