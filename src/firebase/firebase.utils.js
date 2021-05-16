import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDjHc5ZYSEUFko0oZY86f8ybmUZOputpFw",
  authDomain: "crwn-db-3d9a7.firebaseapp.com",
  projectId: "crwn-db-3d9a7",
  storageBucket: "crwn-db-3d9a7.appspot.com",
  messagingSenderId: "827179362392",
  appId: "1:827179362392:web:e5ec8ca53caa304598c22d",
  measurementId: "G-MJ36L7KNH7",
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
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
