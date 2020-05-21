import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCWjqiOekRxG3YZHnALg78sIwbME-vu5AE',
  authDomain: 'crwn-clothing-183e0.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-183e0.firebaseio.com',
  projectId: 'crwn-clothing-183e0',
  storageBucket: 'crwn-clothing-183e0.appspot.com',
  messagingSenderId: '1055041863356',
  appId: '1:1055041863356:web:c9cb7e240e662d63cd9ab9',
  measurementId: 'G-XEPYWHPVME',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
