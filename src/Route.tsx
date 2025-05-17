import { Navigate, Outlet, useRoutes } from "react-router-dom";
import MasterLayout from "./common/MasterLayout";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import AuthForm from "./pages/Login";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";
import SendSupportMailSuccessPage from "./pages/SendSupportMailSuccessPage";
import ProfilePage from "./pages/ProfilePage";
import { customToast } from "./components/custom/Toast";
import NotFoundPage from "./pages/NotFoundPage";
import VerifyPage from "./pages/VerifyOTPPage";
import PaymentPage from "./pages/PaymentPage";

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
            }
          ],
        },
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
          path: "/detail/:id",
          element: <DetailPage />,
        },
        {
          path: "/success",
          element: <SendSupportMailSuccessPage />,
        }
      ],
    },
    {
      element: <RejectedRoutes />,
      children: [{ path: "/auth/:state", element: <AuthForm /> }, {
        path: "/verify",
        element: <VerifyPage />
      },],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    }
  ]);

  return routes;
}
