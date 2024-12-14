export interface BaseResponse {
  success: boolean;
  error: BaseErrorType | null;
}

export interface BaseErrorType {
  message: string;
  status: number;
}
