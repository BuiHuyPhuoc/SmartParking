import { CheckOTPRequest, LoginRequest, LoginResponse, RegisterRequest } from "@/lib/models";
import http from "./https";

const authService = {
  login: async (credentials: LoginRequest) => {
    const response = await http.post<LoginResponse>("/login", credentials);
    return response;
  },

  logout: async () => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("loginResponse");
    } catch (error) {
      localStorage.removeItem("token");
      localStorage.removeItem("loginResponse");
      throw error;
    }
  },

  getOTP: async (email: string) => {
    const response = await http.post("/getOtp", { email });
    return response;
  },

  register: async (userData: RegisterRequest) => {
    const response = await http.post<LoginResponse>("/register", userData);
    return response;
  },

  checkOtp: async (payload: CheckOTPRequest) => {
    const response = await http.post("/checkOtp", payload);
    return response;
  },
};

export default authService;
