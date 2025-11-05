import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "@/App.css";

// 🔹 Pages
import Login from "@/Pages/Auth/Login";
import Dashboard from "@/Pages/Admin/Dashboard";
import Mahasiswa from "@/Pages/Admin/Mahasiswa";
import MahasiswaDetail from "@/Pages/Admin/MahasiswaDetail";
import PageNotFound from "@/Pages/PageNotFound";

// 🔹 Layouts
import AuthLayout from "@/Pages/Layouts/AuthLayout";
import AdminLayout from "@/Pages/Layouts/AdminLayout";
import ProtectedRoute from "@/Pages/Layouts/ProtectedRoute";

// 🔹 Komponen utama
const App = () => {
  return (
    <>
      <Toaster position="top-right"/>
      <RouterProvider router={router} />
    </>
  );
};

// 🔹 Konfigurasi router
const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
      path: "dashboard",      
      element: <Dashboard />,
      },
      {
        path: "mahasiswa",
        element: <Mahasiswa />,
      },
      {
        path: "mahasiswa/:nim",
        element: <MahasiswaDetail />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

// 🔹 Render aplikasi
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

export default App;
