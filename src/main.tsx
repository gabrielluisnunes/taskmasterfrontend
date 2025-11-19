import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles.ts'; 
import Dashboard from './pages/Dashboard';
import App from './App'; 

// ----------------------------------------------------
// 1. Definição das Rotas
// ----------------------------------------------------
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />, // Rota raiz redireciona para o Dashboard (pode ser /login futuramente)
    errorElement: <div>Página não encontrada (404)</div>,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  // Futuramente, adicionaremos mais rotas aqui:
  /*
  {
    path: "/messages",
    element: <MessagesPage />,
  },
  {
    path: "/mytasks",
    element: <MyTasksPage />,
  },
  */
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Aplica estilos globais e injeta o roteador */}
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>,
);