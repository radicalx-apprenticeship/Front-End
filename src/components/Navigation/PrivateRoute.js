// Why this is required - to prevent users to access Dashboard/other components that only
// users that are logged in should be given access
// - otherwise redirect them to login!
import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const PrivateRoute = () => {
  const { currentUser } = useAuth();
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
