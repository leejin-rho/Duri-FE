// import axios from 'axios';
import { duriInstance } from '../axiosConfig';

// 비동기 데이터 요청 테스트!!!!!
export async function getUser() {
  try {
    const response = await duriInstance.get('/user');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
