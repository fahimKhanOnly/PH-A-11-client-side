import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.init";
import axios from "axios";


export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
  const [isLoading, setLoadingStatus] = useState(true);
  const [userAvailability, setUser] = useState(null);

  useEffect(() => {
    const user = onAuthStateChanged(auth, user => {
      setUser(user);
      setLoadingStatus(false);
      if(user?.email){
        const userEmail = {email: user.email};
        axios.post('https://ph-a-11-server-side.vercel.app/jwt', userEmail, {withCredentials: true})
      }
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