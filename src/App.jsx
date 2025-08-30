import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";

import Home from "./pages/Home";
const router = createBrowserRouter(
  [
    {
      element: <AppLayout />,
      children: [{ index: true, element: <Home /> }],
    },
  ],
  { basename: import.meta.env.BASE_URL }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
