import {
  Lot,
  LotFilter,
  Review,
  ReviewRequest
} from "@/lib/models";
import http from "./https";

const lotService = {
  getById: async (id: number) => {
    const response = await http.get<Lot>(`/lot/${id}`);
    return response;
  },

  getByFilter: async (filter: LotFilter) => {
    const response = await http.post<Lot[]>("getLotsByLocation", filter);
    return response.value;
  },

  getReviewByLotId: async (id: number) => {
    const response = await http.get<Review[]>(`/getReviewsByLot?lotId=${id}`);
    return response.value;
  },

  sendReview: async (review: ReviewRequest) => {
    const response = await http.post(`/sendReview`, review);
    return response.value;
  },
};

export default lotService;
