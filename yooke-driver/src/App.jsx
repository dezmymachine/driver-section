import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AddTrip from "./pages/AddTrip";
import Trips from "./pages/Trips";
import SignUp from "./auth/SignUp";
import Login from "./auth/Login";
import ConfirmTrips from "./pages/ConfirmTrips";
import FinishedTrips from "./pages/FinishedTrips";
import TripsInProgress from "./pages/TripsInProgress";
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
  {
    path: "/confirm",
    element: <ConfirmTrips />,
  },
  {
    path: "/finished",
    element: <FinishedTrips />,
  },
  {
    path: "/progress",
    element: <TripsInProgress />,
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
