import { customToast } from "@/components/custom/Toast";
import { OrderRequest } from "@/lib/models";
import { useMutation } from "@tanstack/react-query";
import orderService from "../api/orderService";

export const useCreateOrder = () => {
  return useMutation({
    mutationFn: (payload: OrderRequest) => orderService.createOrder(payload),
    onSuccess: (response) => {
      customToast.success("Success!", "Order created successfully!");
      window.open(response.url);
    },
    onError: () => {
      customToast.warning("Warning!", "Order creation failed!");
    },
  });
};
