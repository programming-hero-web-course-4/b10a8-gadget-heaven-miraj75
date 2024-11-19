import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';
import ErrorElement from './Components/ErrorElement/ErrorElement';
import Home from './Components/Home/Home';
import ProductsDetails from './Components/ProductsDetails/ProductsDetails';
import Statistics from './Components/Statistics/Statistics';
import Root from './Root';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/statistics',
        element: <Statistics />
      },
      {
        path: 'product/:productId',
        element: <ProductsDetails />,
        loader: () => fetch('/Products.json') // Corrected path
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
