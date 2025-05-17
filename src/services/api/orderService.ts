import { OrderRequest, OrderResponse } from "@/lib/models";
import http from "./https";

const orderService = {
  createOrder: async (payload: OrderRequest) => {
    const response = await http.post<OrderResponse>(
      "/secure/reservation",
      payload
    );
    return response.value;
  },
};

export default orderService;
