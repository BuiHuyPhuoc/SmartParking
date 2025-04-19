import apiClient from "./config";

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
  user: {
    id: number;
    name: string;
    email: string;
    // Add other user properties as needed
  };
  token: string;
}

const authService = {
  login: async (credentials: LoginCredentials) => {
    const response = await apiClient.post<AuthResponse>(
      "/api/Auth/Login",
      credentials
    );
    return response.data;
  },

  register: async (userData: RegisterData) => {
    const response = await apiClient.post<AuthResponse>(
      "/auth/Auth/Register",
      userData
    );
    return response.data;
  },

  logout: async () => {
    try {
      await apiClient.post("/auth/logout");
      localStorage.removeItem("token");
    } catch (error) {
      console.error("Logout error:", error);
      localStorage.removeItem("token");
      throw error;
    }
  },

  forgotPassword: async (email: string) => {
    const response = await apiClient.post("/auth/forgot-password", { email });
    return response.data;
  },

  resetPassword: async (
    token: string,
    password: string,
    password_confirmation: string
  ) => {
    const response = await apiClient.post("/auth/reset-password", {
      token,
      password,
      password_confirmation,
    });
    return response.data;
  },
};

export default authService;
