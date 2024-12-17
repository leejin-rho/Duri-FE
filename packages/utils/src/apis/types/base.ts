export interface BaseResponse {
  success: boolean;
  error: BaseError | null;
}

export interface BaseError {
  message: string;
  status: number;
}
