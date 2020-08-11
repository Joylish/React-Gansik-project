import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const gansikConfig = {
  apiKey: 'AIzaSyALPsKHmYGbTcm_Ps_OHCBTqcfnAax-Q8M',
  authDomain: 'gansik-db.firebaseapp.com',
  databaseURL: 'https://gansik-db.firebaseio.com',
  projectId: 'gansik-db',
  storageBucket: 'gansik-db.appspot.com',
  messagingSenderId: '545694629158',
  appId: '1:545694629158:web:642ef5c7b67b342aea95e7',
  measurementId: 'G-EJ9FCHFGJ3',
};

firebase.initializeApp(gansikConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
