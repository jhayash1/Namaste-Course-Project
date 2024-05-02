import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Body } from "./component/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Error } from "./component/Error";
import { Navbar } from "./component/Navbar";
import { RestaurantMenu } from "./component/RestaurantMenu";
import { Shemmer } from "./component/Shemmer";
import "./index.css";
import UserContext from "./component/constants/UserContext";
import { Provider } from "react-redux";
import appStore from "./component/Redux/appStore";
import { CartItems } from "./component/CartItems";

const Grocerry = lazy(() => import("./component/Grocerry"));
const About = lazy(() => import("./component/About"));

const App = () => {
  const [userName, setuserName] = useState();

  //Autthentication
  useEffect(() => {
    const data = {
      name: "Yashwant",
    };
    setuserName(data.name);
  }, []);

  return (
    <>
      <Provider store={appStore}>
        <UserContext.Provider value={{ logginUser: userName, setuserName }}>
          <Navbar />
          <div className="mt-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </UserContext.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shemmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shemmer />}>
            <Grocerry />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId", //for dynamic id we can use :resId
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <CartItems />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
