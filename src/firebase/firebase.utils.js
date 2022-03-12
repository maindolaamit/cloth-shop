import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrHZCMOcPmZkpmemNfsHEqqgyv8q3S3Ug",
  authDomain: "cloth-shop-85fa2.firebaseapp.com",
  projectId: "cloth-shop-85fa2",
  storageBucket: "cloth-shop-85fa2.appspot.com",
  messagingSenderId: "63982873120",
  appId: "1:63982873120:web:82d9497b544f282b61aa45",
  measurementId: "G-KY77SZ4Q59",
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

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
