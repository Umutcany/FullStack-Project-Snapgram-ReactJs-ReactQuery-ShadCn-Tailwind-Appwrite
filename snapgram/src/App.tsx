import React from "react";
import { Routes, Route } from "react-router-dom";
import "./globals.css";
import { Home } from "./_root/pages";
import SıgninForm from "./_auth/forms/SıgninForm";
import SignupForm from "./_auth/forms/SignupForm";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import { Toaster } from "./components/ui/toaster";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/kayit-ol" element={<SignupForm />} />
          <Route path="/giris-yap" element={<SıgninForm />} />
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <Toaster />
    </main>
  );
};

export default App;
