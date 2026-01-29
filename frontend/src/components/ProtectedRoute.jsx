import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function ProtectedRoute({ children }) {
  const { authUser, loading } = useAuth();
  const location = useLocation();

  console.log("ProtectedRoute - loading:", loading);
  console.log("ProtectedRoute - authUser:", authUser);

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  // Agar user login nahi hai, login page pe redirect karo
  if (!authUser) {
    // Save the location they were trying to access
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Agar login hai, children render karo
  return children;
}

export default ProtectedRoute;