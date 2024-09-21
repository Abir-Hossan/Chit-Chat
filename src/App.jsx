// import  ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/",
    element: <Signin/>,
  },
  
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}