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
        element: <div>Root Route</div>
    }, 
    {
        path: "/register",
        element: <div>Register Route</div>
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
