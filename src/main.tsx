import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./routes/login/Login";
import Home from "./routes/home/Home";
//Import Users
import Users from "./routes/users/Users";
import Customers from "./routes/users/customers/Customers";
import Provider from "./routes/users/Provider";
import Admin from "./routes/users/Admin";
//Import 404
// import Error404 from "./routes/404/Error404";

const router = createBrowserRouter([
  {
    // Rota de Login, sozinha na raiz
    path: "/",
    element: <Login />,
    // errorElement: <Error404 />,
  },
  {
    // Este objeto aplica o layout <App /> a todos os filhos,
    // mas NÃO adiciona um prefixo ao URL.
    element: <App />,
    // errorElement: <Error404 />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      // ROTAS DOS USUÁRIOS
      {
        path: "/users/",
        element: <Users />,
      },
      {
        path: "/users/customers",
        element: <Customers />,
      },
      {
        path: "/users/provider",
        element: <Provider />,
      },
      {
        path: "/users/admin",
        element: <Admin />,
      },
    ]
  }
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
