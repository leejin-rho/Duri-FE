import { Kakao } from './packages/utils/src/apis/types/kakao';

declare global {
  interface Window {
    Kakao: Kakao;
  }
}