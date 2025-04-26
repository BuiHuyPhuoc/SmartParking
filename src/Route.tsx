import { useRoutes } from "react-router-dom";
import MasterLayout from "./common/MasterLayout";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import AuthForm from "./pages/Login";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";
import SendSupportMailSuccessPage from "./pages/SendSupportMailSuccessPage";

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
        {
          path: "/detail",
          element: <DetailPage />,
        },
        {
          path: "/success",
          element: <SendSupportMailSuccessPage />,
        },
      ],
    },
    { element: <AuthForm />, path: "/auth/:state" },
  ]);

  return routes;
}
