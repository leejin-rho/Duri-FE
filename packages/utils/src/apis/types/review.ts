import { BaseResponse } from './base';

export interface PostReviewProps {
  quotationId: number;
  formData: FormData;
}

export interface PutReviewProps {
  reviewId: number;
  formData: FormData;
}

export interface PostPutDeleteReviewResponse extends BaseResponse {
  response: string;
}
