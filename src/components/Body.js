import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import SignUp from "./SignUp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body = () => {
const appRouter = createBrowserRouter([ 

    {
        path:"/",
        element: <Login />,
    },
    {
        path: "/browse",
        element: <Browse />
    },
    {
        path: "/signup",
        element: <SignUp />
    },
]);


  return (
    <div>
      <RouterProvider router={appRouter} />
        
    </div>
  );
};

export default Body;
