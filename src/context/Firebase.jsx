import { initializeApp } from "firebase/app";
import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyBKZ8X1OOsRzR7fSbmsr7ljuFa5eTtBD54",
  authDomain: "projectmanagement-e7545.firebaseapp.com",
  projectId: "projectmanagement-e7545",
  storageBucket: "projectmanagement-e7545.firebasestorage.app",
  messagingSenderId: "567699248393",
  appId: "1:567699248393:web:dbab4ea65a742c8beb6fd8",
};

export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider(null);

export const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); 
    });

    return () => unsubscribe();
  }, []);

  const signUpUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password);

  const signinUserWithEmailAndPassword = (email, password) =>
    signInWithEmailAndPassword(firebaseAuth, email, password);

  const signinWithGoogle = () =>
    signInWithPopup(firebaseAuth, googleProvider);

  const signOutUser = () => signOut(firebaseAuth);

  const isLoggedIn = !!user;

  return (
    <FirebaseContext.Provider
      value={{
        signinWithGoogle,
        signUpUserWithEmailAndPassword,
        signinUserWithEmailAndPassword,
        signOutUser,
        isLoggedIn,
        user,
        loading, 
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
