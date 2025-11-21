import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles'; 
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import { useAppStore } from './store/useAppStore'; 
import MainLayout from './layout/MainLayout'; 


const ProtectedRoute: React.FC = () => {
  
  const isLoggedIn = useAppStore((state) => state.user.isLoggedIn);

  
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

 
  return (
    <MainLayout>
        <Outlet /> 
    </MainLayout>
  );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/dashboard" replace />, 
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register", 
    element: <Register />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      // Rotas futuras aninhadas 
    ],
  },
  {
    path: "*",
    element: <Navigate to="/login" replace />, 
  },
]);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>,
);