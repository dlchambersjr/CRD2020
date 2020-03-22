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
  measurementId: 'G-R1TWD90ME1'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
