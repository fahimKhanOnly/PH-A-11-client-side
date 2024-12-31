import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.init";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
  const [isLoading, setLoadingStatus] = useState(true);
  const [userAvailability, setUser] = useState(null);

  useEffect(() => {
    const user = onAuthStateChanged(auth, user => {
     setUser(user);
     setLoadingStatus(false);
    })
    return () => {
      user();
      setLoadingStatus(true);
    }
  }, [])

  const emailPassAuth = (email, password, displayName, photoURL) => createUserWithEmailAndPassword(auth, email, password, displayName, photoURL);

  const createUserWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const logOut = () => signOut(auth);
  const loginWithEmail = (email, pass) => signInWithEmailAndPassword(auth, email, pass);

  let authInfo = {
    emailPassAuth,
    createUserWithGoogle,
    logOut,
    loginWithEmail,
    isLoading,
    userAvailability,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;