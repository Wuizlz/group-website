import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";

import Home from "./pages/Home";
import Daniel from "./pages/Daniel";
import Dimitri from "./pages/Dimitri";
import Nick from "./pages/Nick"
import Krish from "./pages/Krish";
const router = createBrowserRouter(
  [
    {
      element: <AppLayout />,
      children: [{ index: true, element: <Home /> },
        {path: "daniel" , element: <Daniel/>},
        {path: "dimitri" , element: <Dimitri/>},
        {path: "nick", element: <Nick/>},
        {path: "krish", element: <Krish/>}
      ],

    },
  ],
  { basename: import.meta.env.BASE_URL }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
