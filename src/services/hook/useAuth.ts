import { customToast } from "@/components/custom/Toast";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import authService, {
  CheckOTPRequest,
  LoginRequest,
  RegisterRequest,
} from "../api/authService";

export const useCheckOTP = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (payload: CheckOTPRequest) => {
      const email = payload.email;
      const response = await authService.checkOtp(payload);
      return { response, email };
    },
    onSuccess: (data) => {
      const { response, email } = data;
      if (response.status === 200) {
        customToast.success("Success!", response.message);
        navigate("/auth/login", { state: { email } });
      } else {
        customToast.warning("Warning!", response.message);
      }
    },
    onError: () => {
      customToast.warning("Error!", "OTP verification failed");
    },
  });
};

export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (payload: RegisterRequest) => {
      const email = payload.email;
      const response = await authService.register(payload);
      return { response, email };
    },
    onSuccess: (data) => {
      const { response, email } = data;

      if (response.status === 200) {
        customToast.success("Success!", response.message);
        navigate("/verify", { state: { email } });
      } else {
        customToast.warning("Warning!", response.message);
      }
    },
    onError: () => {
      customToast.warning("Error!", "Registration failed");
    },
  });
};

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (payload: LoginRequest) => authService.login(payload),
    onSuccess: (response) => {
      localStorage.setItem("token", response.value.token || "");
      localStorage.setItem("loginResponse", JSON.stringify(response.value));
      customToast.success("Success!", "Login success!");
      navigate("/");
    },
    onError: () => {
      customToast.warning("Warning!", "Login failed!");
    },
  });
};

export const useLogout = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      localStorage.removeItem("token");
      localStorage.removeItem("loginResponse");
      customToast.success("Success!", "Logout success!");
      navigate("/auth/login");
    },
    onError: () => {
      customToast.warning("Warning!", "Logout failed!");
    },
  });
};

export const useGetOTP = () => {
  return useMutation({
    mutationFn: (email: string) => authService.getOTP(email),
    onSuccess: () => {
      customToast.success("Success!", "OTP sent to your email!");
    },
    onError: () => {
      customToast.warning("Warning!", "Failed to send OTP!");
    },
  });
};
