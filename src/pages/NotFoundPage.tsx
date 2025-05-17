import { useState, useEffect } from "react";
import { Home, ArrowLeft, RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [counter, setCounter] = useState(7);
  const navigate = useNavigate();
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (counter > 0) {
      timer = setInterval(() => {
        setCounter(counter - 1);
      }, 1000);
    }

    if (counter === 0) {
      navigate("/");
    }

    return () => {
      if (timer !== undefined) {
        clearInterval(timer);
      }
    };
  }, [counter, navigate]);

  const handleRefresh = () => {
    setIsAnimating(true);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  const goBack = () => {
    window.history.back();
  };

  const goHome = () => {
    // You would typically use React Router's navigate here
    console.log("Would navigate to home page");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="space-y-2">
          <h1 className="text-9xl font-extrabold text-gray-700">404</h1>
          <div className="h-2 w-20 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <h2 className="mt-6 text-3xl font-bold text-gray-800">
          Page Not Found
        </h2>
        <p className="mt-2 text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          <button
            onClick={goBack}
            className="flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </button>

          <button
            onClick={handleRefresh}
            className="flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <RefreshCw
              className={`mr-2 h-4 w-4 ${isAnimating ? "animate-spin" : ""}`}
            />
            Refresh Page
          </button>

          <button
            onClick={goHome}
            className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-on-primary bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Home className="mr-2 h-4 w-4" />
            Go Home
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-primary/50">
            Redirecting to home page in{" "}
            <span className="font-bold text-2xl">{counter}</span> seconds...
          </p>
          <div className="mt-2 bg-gray-200 h-1 w-full rounded-full overflow-hidden">
            <div
              className="bg-background h-1 rounded-full transition-all duration-1000 ease-linear"
              style={{ width: `${(counter / 5) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
