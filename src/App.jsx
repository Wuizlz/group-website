import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";

import Home from "./pages/Home";
import Daniel from "./pages/Daniel";
import Krish from "./pages/Krish";
const router = createBrowserRouter(
  [
    {
      element: <AppLayout />,
      children: [{ index: true, element: <Home /> },
        {path: "/Daniel" , element: <Daniel/>},
        {path: "/Krish" , element: <Krish/>} 
      ],

    },
  ],
  { basename: import.meta.env.BASE_URL }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
