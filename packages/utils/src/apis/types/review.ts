import { BaseResponse } from './base';

export interface PostReviewProps {
  quotationId: number;
  formData: FormData;
}

export interface PutReviewProps {
  reviewId: number;
  formData: FormData;
}

export interface PostPutReviewResponse extends BaseResponse {
  response: string;
}
