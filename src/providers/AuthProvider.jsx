import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.init";
import LoadingSpinner from "../components/LoadingSpinner";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(user);
  console.log(loading);
  //   Registration
  const handleEmailRegistration = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  //   Getting LoggedIn User
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, [auth]);

  //   Updating User Profile
  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  // SignIn
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google SignIn
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //   Signing Out
  const logOut = () => {
    return signOut(auth);
  };

  const authData = {
    user,
    setUser,
    loading,
    setLoading,
    handleEmailRegistration,
    updateUser,
    logOut,
    logIn,
    googleSignIn,
  };

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
