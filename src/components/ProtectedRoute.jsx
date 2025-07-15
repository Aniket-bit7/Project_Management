import React from "react";
import { Navigate } from "react-router-dom";
import { useFirebase } from "../context/Firebase";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn, loading } = useFirebase();

  if (loading) return null; 

  return isLoggedIn ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
