import { createBrowserRouter } from "react-router-dom";
import NotFound from "../modules/NotFound/NotFound";
import Profile from "../modules/Profile/Profile";
import Layout from "../modules/Layout";
import Login from "../modules/Login/Login";
import Signup from "../modules/Signup/Signup";
import AllBooks from "../modules/AllBooks/AllBooks";
import EachBook from "../modules/EachBook/EachBook";
import AddNewBook from "../modules/AddNewBook/AddNewBook";
import ProtectedRoute from "../Utils/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <AllBooks />,
      },
      {
        path: "/add-new-book",
        element: (<ProtectedRoute>
        <AddNewBook />,
        </ProtectedRoute>)
      },
      {
        path: "/profile",
        element: <Profile />,
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
