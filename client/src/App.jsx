import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";

import Error404 from "./pages/Error404";
import Password from "./pages/Password";
import Profile from "./pages/Profile";
import Recovery from "./pages/Recovery";
import Register from "./pages/Register";
import Reset from "./pages/Reset";
import UserName from "./pages/UserName";




const router = createBrowserRouter([
    {
        path: "/",
        element: <UserName></UserName>
    }, 
    {
        path: "/register",
        element: <Register></Register>
    },
    {
        path: "/recovery",
        element: <Recovery></Recovery>
    },
    {
        path: "/reset",
        element: <Reset></Reset>
    },
    {
        path: "/password",
        element: <Password></Password>
    },
    {
        path: "/profile",
        element: <Profile></Profile>
    },
    {
        path: "*",
        element: <Error404></Error404>
    }
]);
export default function App() {
    return (
        <main>
            <RouterProvider router={router}>

            </RouterProvider>
      </main>
    )
  }
