import { useRoutes } from "react-router-dom";
import MasterLayout from "./common/MasterLayout";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import AuthForm from "./pages/Login";
import SearchPage from "./pages/SearchPage";

export default function useRouteElements() {
  const routes = useRoutes([
    {
      element: <MasterLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/search",
          element: <SearchPage />,
        },
      ],
    },
    { element: <AuthForm />, path: "/auth/:state" },
  ]);

  return routes;
}
