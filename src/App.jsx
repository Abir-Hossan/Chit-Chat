import Login from "./pages/Login";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}