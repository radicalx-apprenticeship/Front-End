import React, { useContext, useState, useEffect } from "react";
import { auth } from "../Firebase";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  setPersistence,
  browserSessionPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import axios from "axios";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const url = process.env.REACT_APP_SERVER_URL;
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  // - Login Function
  async function login(email, password, rememberMe) {
    const persistenceMethod = rememberMe
      ? browserLocalPersistence
      : browserSessionPersistence;
    await setPersistence(auth, persistenceMethod);
    await signInWithEmailAndPassword(auth, email, password);

    auth.currentUser
      .getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        // Send token to your backend via HTTPS
        // Sending token
        const config = {
          headers: { Authorization: `Bearer ${idToken}` },
        };
        axios.post(url, config).then(console.log).catch(console.log);
      })
      .catch(function (error) {
        // Handle error
        console.log(error);
      });
  }

  // Logout function
  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
