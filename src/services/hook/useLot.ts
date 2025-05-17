import { LoginResponse, LotFilter, ReviewRequest } from "@/lib/models";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import lotService from "../api/lotService";
import { GetLocalStr } from "../utils/storage";

export const useGetLotById = (id: number) => {
  return useQuery({
    queryKey: ["lotById"],
    queryFn: () => lotService.getById(id),
  });
};
const lotFilterSample: LotFilter = {
  province: "",
  ward: "",
  district: "",
  minPrice: 0,
  maxPrice: 10000000,
};

export const useGetLotByFilter = (filter: LotFilter = lotFilterSample) => {
  return useQuery({
    queryKey: ["lotByFilter"],
    queryFn: () => lotService.getByFilter(filter),
  });
};

export const useGetReviewByLotId = (id: number) => {
  return useQuery({
    queryKey: ["reviewByLotId", id],
    queryFn: () =>
      lotService.getReviewByLotId(id).then((res) => {
        return res.sort((a, b) => {
          if (a.createdAt && b.createdAt) {
            return (
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
          }
          return 0;
        });
      }),
  });
};

export const useSendReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (review: ReviewRequest) => {
      const userLogin = GetLocalStr<LoginResponse>("loginResponse");
      const reviewRequest: ReviewRequest = {
        email: userLogin?.email || "",
        lotId: review.lotId,
        rating: review.rating,
        comment: review.comment,
      };

      return lotService.sendReview(reviewRequest);
    },
    onSuccess: (_data, variables) => {
      toast.success("Review sent successfully!");
      queryClient.invalidateQueries({
        queryKey: ["reviewByLotId", variables.lotId],
      });
    },
    onError: (error) => {
      console.error("Error sending review:", error);
    },
  });
};
