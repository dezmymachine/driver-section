import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AddTrip from "./pages/AddTrip";
import Trips from "./pages/Trips";
import SignUp from "./auth/SignUp";
import Login from "./auth/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/addtrip",
    element: <AddTrip />,
  },
  {
    path: "/trips",
    element: <Trips />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
