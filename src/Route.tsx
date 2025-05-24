import { Navigate, Outlet, useRoutes } from "react-router-dom";
import MasterLayout from "./common/MasterLayout";
import { customToast } from "./components/custom/Toast";
import AboutPage from "./pages/AboutPage";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import HowItWorkPage from "./pages/HowItWorkPage";
import AuthForm from "./pages/Login";
import NotFoundPage from "./pages/NotFoundPage";
import PaymentPage from "./pages/PaymentPage";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import SendSupportMailSuccessPage from "./pages/SendSupportMailSuccessPage";
import VerifyPage from "./pages/VerifyOTPPage";

// eslint-disable-next-line react-refresh/only-export-components
const ProtectedRoutes = () => {
  const accessToken = localStorage.getItem("token");
  if (!accessToken) {
    customToast.warning("Warning!", "You need to login to access this page!");
  } else {
    return <Outlet />;
  }
};

// eslint-disable-next-line react-refresh/only-export-components
const RejectedRoutes = () => {
  const accessToken = localStorage.getItem("token");
  return !accessToken ? <Outlet /> : <Navigate to={"/"} />;
};

export default function useRouteElements() {
  const routes = useRoutes([
    {
      element: <MasterLayout />,
      children: [
        {
          element: <ProtectedRoutes />,
          children: [
            {
              path: "/profile",
              element: <ProfilePage />,
            },
            {
              path: "/result",
              element: <PaymentPage />,
            },
          ],
        },
        {
          path: "/",
          element: <HomePage />,
        },
        // {
        //   path: "/message",
        //   element: <ChatMessage />,
        // },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/search",
          element: <SearchPage />,
        },
        {
          path: "/detail/:id",
          element: <DetailPage />,
        },
        {
          path: "/success",
          element: <SendSupportMailSuccessPage />,
        },
        {
          path: "/howitwork",
          element: <HowItWorkPage />,
        },
      ],
    },
    {
      element: <RejectedRoutes />,
      children: [
        { path: "/auth/:state", element: <AuthForm /> },
        {
          path: "/verify",
          element: <VerifyPage />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return routes;
}
