import { BaseResponse } from './base';

export interface PortfolioType {
  feedbackId: number;
  imageUrl: string;
}

export interface PorfolioResponse extends BaseResponse {
  response: PortfolioType[];
}

export interface PortfolioPetInfo {
  name: string;
  breed: string;
  gender: 'M' | 'F';
  age: number;
  weight: number;
  neutralized: boolean;
  imageUrl: string;
}

export interface PortfolioGroomerInfo {
  id: number;
  name: string;
  profileImageUrl: string;
}

export interface PortfolioDetailType {
  feedbackId: number;
  friendly: '베스트 프렌드' | '라뽀가 많이 형성됐어요' | '우리 조금 어색해요';
  reaction: '다소 공격적이에요' | '미용도구를 피해요' | '별다른 반응이 없어요';
  behavior: '피하려는 행동이 있어요' | '왕왕!내가 제일 용맹하개';
  portfolioContent: string;
  feedbackImages: string[];
  petInfo: PortfolioPetInfo;
  groomerInfo: PortfolioGroomerInfo;
}

export interface PorfolioDetailResponse extends BaseResponse {
  response: PortfolioDetailType;
}
