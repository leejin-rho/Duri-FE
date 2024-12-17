import { BaseResponse } from './base';

export interface AIParams {
  styleText: '라이언' | '테디베어' | '베이비' | null;
  image: FormData;
}

export interface AIStylingResponse extends BaseResponse {
  response: string;
}
