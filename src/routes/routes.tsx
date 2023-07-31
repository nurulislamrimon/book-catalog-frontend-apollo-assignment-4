import { createBrowserRouter } from "react-router-dom";
import Home from "../modules/Home/home";
import NotFound from "../modules/NotFound/NotFound";
import Profile from "../modules/Profile/Profile";
import Layout from "../modules/Layout";
import Login from "../modules/Login/Login";
import Signup from "../modules/Signup/Signup";
import Books from "../modules/Books/Books";
import EachBook from "../modules/EachBook/EachBook";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/books/:id",
        element: <EachBook />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);
