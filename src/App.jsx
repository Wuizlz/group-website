import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";

import Home from "./pages/Home";
import Daniel from "./pages/Daniel";
import Dimitri from "./pages/Dimitri";
const router = createBrowserRouter(
  [
    {
      element: <AppLayout />,
      children: [{ index: true, element: <Home /> },
        {path: "/Daniel" , element: <Daniel/>},
        {path: "/Dimitri" , element: <Dimitri/>}
      ],

    },
  ],
  { basename: import.meta.env.BASE_URL }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
