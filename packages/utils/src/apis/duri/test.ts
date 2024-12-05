// import axios from 'axios';
// import { HttpResponse } from 'msw';

import { duriInstance } from '../axiosConfig';

/** 비동기 데이터 요청 테스트 */
export async function getQuotationInfo(quotationId:string) {
  try {
    const response = await duriInstance.get(`quotation/${quotationId}`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

/** 서버 연결 테스트 API */
export const test = async () => {
  const response = await duriInstance.get('example/success');
  console.log(response);
  return response.data;
}