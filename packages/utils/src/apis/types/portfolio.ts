import { BaseResponse } from './base';

export interface PortfolioType {
  feedbackId: number;
  imageUrl: string;
}

export interface PorfolioResponse extends BaseResponse {
  response: PortfolioType[];
}

export interface PortfolioDetailType {
  feedbackId: number;
  friendly: string;
  reaction: string;
  behavior: string;
  portfolioContent: string;
  feedbackImages: string[];
}

export interface PorfolioDetailResponse extends BaseResponse {
  response: PortfolioDetailType;
}
