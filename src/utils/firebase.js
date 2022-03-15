import {initializeApp} from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import {doc, getDoc, getFirestore, setDoc} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBrHZCMOcPmZkpmemNfsHEqqgyv8q3S3Ug",
    authDomain: "cloth-shop-85fa2.firebaseapp.com",
    projectId: "cloth-shop-85fa2",
    storageBucket: "cloth-shop-85fa2.appspot.com",
    messagingSenderId: "63982873120",
    appId: "1:63982873120:web:82d9497b544f282b61aa45",
    measurementId: "G-KY77SZ4Q59",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const db = getFirestore()
export const auth = getAuth();

export const signInWithGoogle = async () => {
    const userCredential = await signInWithPopup(auth, provider);
    await createUserProfileDocument(userCredential.user);
    console.log("Signed in from Google as: ", userCredential);
    return userCredential.user;
};

export const signInWithEmail = async (email, password) => {
    if (!email || !password) return;
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    await createUserProfileDocument(userCredential.user);
    console.log("Signed in with email: " + email);
    return userCredential.user;
}

export const signOutUser = async () => {
    await signOut(auth);
    console.log("signed out successfully.");
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    console.log("createUserProfileDocument", userAuth);
    if (!userAuth) return;

    const userRef = doc(db, "users", userAuth.uid);
    const snapShot = await getDoc(userRef);

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        await setDoc(userRef, {
            displayName,
            email,
            createdAt,
            ...additionalData,
        }).then(() => {
            console.log("User Profile Document created for user");
        });
    }

    return userRef;
};

export const createUserWithEmail = async (email, password, displayName) => {
    if (!email || !password) return;
    console.log("Creating user with email: " + email);
    const user = await createUserWithEmailAndPassword(auth, email, password);
    // User do not have a display name associated, so we need to create one
    await createUserProfileDocument(user, {displayName});
    return user;
};
