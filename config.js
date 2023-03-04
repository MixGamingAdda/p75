import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBBNTfVqFiJe1LaqdE-kBgxPh47cebIMrE",
  authDomain: "e-library-c7dd0.firebaseapp.com",
  projectId: "e-library-c7dd0",
  storageBucket: "e-library-c7dd0.appspot.com",
  messagingSenderId: "958884468389",
  appId: "1:958884468389:web:6e92f284e6ab1c8e989f4c",
  measurementId: "G-XBY2YF128T"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
