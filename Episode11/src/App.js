import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./components/AboutUs.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Error from "./components/Error.jsx";
import RestaurentMenu from "./components/RestaurentMenu.jsx";
import { useState, useEffect } from "react";
import userContext1 from "./utils/userContext.js";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    //make an api call by sending the username and the password and we will get the data if user is valid
    const data = {
      name: "akshay saini",
    };
    setUserName(data.name);
  }, []);

  return (
    <userContext1.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </userContext1.Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/restaurent/:resId",
        element: <RestaurentMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense
            fallback={<h1>waiting until the grocery file is coming</h1>}
          >
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
