import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../pages/Login";
import { RegistrationPage } from "../pages/Registration";
import { NotFound } from "../pages/NotFound";
import { About } from "../pages/About";
import { AuthProvider, useAuth } from "../context/AuthContext";

interface PrivateRouteProps {
  element: React.ReactNode;
}

export function PrivateRoute({ element }: PrivateRouteProps) {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return element;
  }

  return <Navigate to="/LoginPage" />;
}

export const MyRouter = (
  <AuthProvider>
    <Routes>
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/register/*" element={<RegistrationPage />} />
      <Route path="*" element={<NotFound />} />
      <Route
        path="/about/*"
        element={<PrivateRoute element={<About />} />}
      />
    </Routes>
  </AuthProvider>
);