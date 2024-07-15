import "@/styles/globals.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

// Pages
import HomePage from "./components/pages/Home";
import AddonsPage from "./components/pages/Addons";
import ThemesPage from "./components/pages/Themes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
      {
        path: "/addons",
        element: <AddonsPage />,
      },
      {
        path: "/themes",
        element: <ThemesPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} future={{ v7_startTransition: true }} />
);
