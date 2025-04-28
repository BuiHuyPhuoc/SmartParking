import http from "./config";

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  password_confirmation?: string;
}

interface AuthResponse {
  status: number;
  message: string;
  success: boolean;
  value: {
      id: number;
      fullName: string;
      email: string;
      password: string;
      phone: string;
      role: string;
      token: string;
  };
}



const authService = {
  login: async (credentials: LoginCredentials) => {
    const response = await http.post<AuthResponse>(
      "/login",
      credentials
    );
    return response.data;
  },

  register: async (userData: RegisterData) => {
    const response = await http.post<AuthResponse>(
      "/auth/Auth/Register",
      userData
    );
    return response.data;
  },

  logout: async () => {
    try {
      await http.post("/auth/logout");
      localStorage.removeItem("token");
    } catch (error) {
      console.error("Logout error:", error);
      localStorage.removeItem("token");
      throw error;
    }
  },

  forgotPassword: async (email: string) => {
    const response = await http.post("/auth/forgot-password", { email });
    return response.data;
  },

  resetPassword: async (
    token: string,
    password: string,
    password_confirmation: string
  ) => {
    const response = await http.post("/auth/reset-password", {
      token,
      password,
      password_confirmation,
    });
    return response.data;
  },
};

export default authService;
