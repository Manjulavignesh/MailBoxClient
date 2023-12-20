import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyA5Bb4tXZJ4LJeJt46O9B3xwuI7UPpGNuE",
  authDomain: "mailboxclient-481c2.firebaseapp.com",
  projectId: "mailboxclient-481c2",
  storageBucket: "mailboxclient-481c2.appspot.com",
  messagingSenderId: "963995916181",
  appId: "1:963995916181:web:bbaa8a74547c3870f0c89c"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
export {db};