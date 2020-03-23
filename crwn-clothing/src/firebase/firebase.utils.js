import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC7B3ShAsgya_pKo5PtF9RNgrTNmoyABZU',
  authDomain: 'crwn-db-9af3d.firebaseapp.com',
  databaseURL: 'https://crwn-db-9af3d.firebaseio.com',
  projectId: 'crwn-db-9af3d',
  storageBucket: 'crwn-db-9af3d.appspot.com',
  messagingSenderId: '882035458041',
  appId: '1:882035458041:web:4362e8e0661abda72dc728',
  measurementId: 'G-R1TWD90ME1',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

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
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
