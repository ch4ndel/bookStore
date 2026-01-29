import React, { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true); // IMPORTANT: Add this

  const storeToken = (serverToken) => {
    if (!serverToken) return;

    localStorage.setItem("token", serverToken);
    try {
      const decoded = jwtDecode(serverToken);
      setAuthUser(decoded);
      console.log("Decoded user:", decoded);
    } catch (err) {
      console.error("Invalid token", err);
    }
  };

  const logout = () => {
    setAuthUser(null);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    console.log("AuthProvider: Checking for token...");
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        
        // Check if token is expired
        if (decoded.exp && decoded.exp * 1000 < Date.now()) {
          console.error("Token expired");
          localStorage.removeItem("token");
          setAuthUser(null);
        } else {
          console.log("Token valid, user authenticated");
          setAuthUser(decoded);
        }
      } catch (err) {
        console.error("Token expired or invalid", err);
        localStorage.removeItem("token");
        setAuthUser(null);
      }
    } else {
      console.log("No token found");
    }
    
    setLoading(false); // IMPORTANT: Set loading to false
    console.log("AuthProvider: Loading complete");
  }, []);

  return (
    <AuthContext.Provider value={{ authUser, storeToken, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);