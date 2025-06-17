import React from "react";
import authService from "../_services/auth.service";
import { Navigate } from "react-router-dom";

const AuthRequired = ({ children }) => {
  if (!authService.isLogged()) {
    return <Navigate to="/signin" />;
  }
  return children;
};

const AuthRequiredAdmin = ({ children }) => {
  if (
    authService.isLogged() &&
    authService.getCurrentUser().role === "ROLE_ADMIN"
  ) {
    return children;
  }
  return <Navigate to="/dashboard" />;
};

export { AuthRequired, AuthRequiredAdmin };
