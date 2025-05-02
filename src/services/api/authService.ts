import http from "./https";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  id: number;
  fullName: string;
  email: string;
  password: string;
  phone: string;
  role: string;
  token: string;
}

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

  // register: async (userData: RegisterData) => {
  //   const response = await http.post<AuthResponse>(
  //     "/auth/Auth/Register",
  //     userData
  //   );
  //   return response.data;
  // },

  // forgotPassword: async (email: string) => {
  //   const response = await http.post("/auth/forgot-password", { email });
  //   return response.data;
  // },

  // resetPassword: async (
  //   token: string,
  //   password: string,
  //   password_confirmation: string
  // ) => {
  //   const response = await http.post("/auth/reset-password", {
  //     token,
  //     password,
  //     password_confirmation,
  //   });
  //   return response.data;
  // },
};

export default authService;
