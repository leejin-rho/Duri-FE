// import axios from 'axios';
// import { HttpResponse } from 'msw';

import { duriInstance } from '../axiosConfig';

export async function getRegularShopInfo() {
  try {
    const response = await duriInstance.get(`shop/regular`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getRecommendedShopInfo() {
    try {
      const response = await duriInstance.get(`shop/recommend`);
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }