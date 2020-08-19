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

export const auth = firebase.auth(); // 파이어베이스 콘솔의 development의 auth
export const firestore = firebase.firestore(); // 파아베이스의 developmnet의 DB 사용

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // db에 없는 새로운 사용자일 경우 db에 저장
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error(error.message);
    }
  }
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
