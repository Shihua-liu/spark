import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from "./pages/Homepage"
import Login from "./components/Login/Login"
import Collection from './components/collection/collection';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage  />
  },
  {
    path:"/login",
    element: <Login />
  },
  {
    path: "/collection",
    element: <Collection hallo="hallo" />,
},
])


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);