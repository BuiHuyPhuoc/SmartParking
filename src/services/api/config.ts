import { customToast } from "@/components/custom/Toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

// Request interceptor for adding auth token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling common errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    const navigate = useNavigate();
    
    if (response && response.status === 401) {
      localStorage.removeItem("token");
      navigate("/auth/login");
    }

    if (response && response.status === 500) {
      customToast.warning("Warning!", "Server error! Please try again later.");
    }

    if (response && response.status === 404) {
      customToast.warning("Warning!", "Resource not found!");
      navigate("/notfound");
    }

    return Promise.reject(error);
  }
);

export default apiClient;
