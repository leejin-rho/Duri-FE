import { duriInstance } from "../axiosConfig";

export async function getQuotationList() {
    try {
      const response = await duriInstance.get(`quotation/my`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  