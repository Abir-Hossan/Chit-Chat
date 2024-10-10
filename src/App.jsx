import ReactDOM from "react-dom/client";

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { Rootlayout } from "./layout/Rootlayout";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/Signin" element={<Signin />}></Route>
      <Route path="/Signup" element={<Signup />}></Route>
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />}></Route>
      </Route>
    </>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
