import firebase from '@firebase/app-compat';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApeLsMLlHXJcPPDnqbFtID64p1iwtH16s",
  authDomain: "discord-clone-6f85b.firebaseapp.com",
  projectId: "discord-clone-6f85b",
  storageBucket: "discord-clone-6f85b.appspot.com",
  messagingSenderId: "517556732025",
  appId: "1:517556732025:web:dda8783567d7371a2154a8",
  measurementId: "G-YV2EWGCXWH"
};


firebase.initializeApp(firebaseConfig);
export  const db = firebase.firestore();
export  const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
// googleprovider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(googleprovider);
 export default firebase;