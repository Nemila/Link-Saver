import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithRedirect,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  let navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Signin systems
  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      // await signInWithPopup(auth, provider);
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.log(error.message);
    }
  };
  const githubSignIn = async () => {
    const provider = new GithubAuthProvider();
    try {
      signInWithRedirect(auth, provider);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, githubSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};
