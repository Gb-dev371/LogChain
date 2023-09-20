import { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  useLocation,
  useRoutes,
} from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import Delivery from "./pages/delivery";
import Sell from "./pages/Sell";
import Consumer from "./pages/consumer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sell",
    element: <Sell />,
  },
  {
    path: "/delivery",
    element: <Delivery />,
  },
  {
    path: "/consumer",
    element: <Consumer />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
