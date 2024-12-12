import { duriInstance } from "../axiosConfig";
import { MyReviewResponseType } from "../types/my";

export const getMyReviews = async (): Promise<MyReviewResponseType['response']> => {
    const response = await duriInstance.get(`/user/review`);
    return response.data.response;
  };