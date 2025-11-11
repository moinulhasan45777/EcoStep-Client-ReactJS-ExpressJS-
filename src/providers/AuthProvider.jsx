import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
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
    return signInWithEmailAndPassword(auth, email, password);
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
  };

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
