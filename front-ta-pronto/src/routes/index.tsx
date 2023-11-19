import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../pages/Login";
import { RegistrationPage } from "../pages/Registration";
import { NotFound } from "../pages/NotFound";
import { About } from "../pages/About";
import { AuthProvider, useAuth } from "../context/AuthContext";
import { Menu } from "../pages/Menu";
import { Pedidos } from "../pages/Pedidos";
import { Pay } from "../pages/Pay";

interface ProtectedRouteProps {
  element: React.ReactNode;
}

export function ProtectedRoute({ element }: ProtectedRouteProps) {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    console.log('router:',isLoggedIn); 
    //.quando acesso essa var isLoggedIn retorna true nos outros componentes
    
    return element;
  }

  return <Navigate to="/LoginPage" />;
}

export const MyRouter = (
  // <AuthProvider>
    <Routes>
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/register/*" element={<RegistrationPage />} />
      <Route path="/pedidos/*" element={<Pedidos />} />
      <Route path="/pagamento/*" element={<Pay />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/about/*" element={<ProtectedRoute element={<About />} />} />
      <Route path="/cardapio/*" element={<ProtectedRoute element={<Menu />} />}
      />
    </Routes>
  // </AuthProvider>
);
