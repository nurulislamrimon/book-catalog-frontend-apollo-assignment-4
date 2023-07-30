import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../modules/home";
import NotFound from "../modules/NotFound/NotFound";


export const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>
},
{
  path:"/*",
  element:<NotFound/>
}
])