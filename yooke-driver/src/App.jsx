import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignIn from "./auth/SignIn";
import Reservations from "./pages/Reservations";
const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/reserve",
    element: <Reservations />,
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
