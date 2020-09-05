import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCuE6lzKxT5pjH2l-Ig876-MFDRGihQH6E",
    authDomain: "crwn-db-bddf4.firebaseapp.com",
    databaseURL: "https://crwn-db-bddf4.firebaseio.com",
    projectId: "crwn-db-bddf4",
    storageBucket: "crwn-db-bddf4.appspot.com",
    messagingSenderId: "162506952686",
    appId: "1:162506952686:web:8578c35c06be41a0e108ff",
    measurementId: "G-P97P89643L"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: "select_account"});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;