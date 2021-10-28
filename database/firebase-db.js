// database/firebase-db.js

import * as firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9PUBCHTq2fLjuTDeSRi1NCMKslynvwZE",
  authDomain: "schu-e885a.firebaseapp.com",
  projectId: "schu-e885a",
  storageBucket: "schu-e885a.appspot.com",
  messagingSenderId: "891083953198",
  appId: "1:891083953198:web:8f4a65e6e7346ebee17bbf",
  measurementId: "G-T2QZTH1PQM"
};

firebase.initializeApp(firebaseConfig);

export default firebase;