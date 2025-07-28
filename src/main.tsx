import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./routes/home/home";
import Customers from "./routes/users/Customers";
import Error404 from "./routes/404/Error404";

const router = createBrowserRouter([
  {
    //Bloco Principal
    path:"/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path:"/",
        element:<Home  />,
      },
      {
        path:"/users/customers",
        element:<Customers  />,
      },
    ]
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
