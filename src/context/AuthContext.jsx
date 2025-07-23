import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const logout = async (navigate) => {
    await signOut(auth);
    setUser(null);
    if (navigate) navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, logout, loading }}>
      {!loading ? children : null} 
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
