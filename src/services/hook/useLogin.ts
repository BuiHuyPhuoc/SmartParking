import { useMutation } from "@tanstack/react-query";
import authService, { LoginRequest } from "../api/authService";
import { customToast } from "@/components/custom/Toast";

export const useLogin = () => {
  return useMutation({
    mutationFn: (payload: LoginRequest) => authService.login(payload),
    onSuccess: (response) => {
      localStorage.setItem("token", response.value?.token || "");
      localStorage.setItem("loginResponse", JSON.stringify(response.value));
      customToast.success("Success!", "Login success!");
      window.location.href = "/dashboard";
    },
    onError: () => {
      customToast.warning("Warning!", "Login failed!");
    },
  });
};
