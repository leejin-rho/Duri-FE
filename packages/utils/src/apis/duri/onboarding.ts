import { duriInstance } from '../axiosConfig';
import { BaseResponse } from '../types';
interface FormData {
  name: string;
  weight: number;
  breed: string;
  gender: string;
  neutering: boolean;
  age: number;
  character: string[];
  diseases: string[];
}

interface PetInfoResponse extends BaseResponse {
  data: {
    id: number;
    name: string;
    image: null;
    breed: string;
    age: number;
    weight: number;
    gender: string;
    neutering: boolean;
    lastGrooming: Date | null;
  };
}

export const postPetInfo = async (
  formData: FormData,
): Promise<PetInfoResponse> => {
  const response = await duriInstance.post('/user/pet', formData);
  return response.data;
};
