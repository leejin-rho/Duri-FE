import { duriInstance } from '../axiosConfig';

export async function getPetInfo() {
  try {
    const response = await duriInstance.get(`pet`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
