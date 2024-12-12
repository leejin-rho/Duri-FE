import { duriInstance } from '../axiosConfig';
import {
  MyReviewResponseType,
  PetInfo,
  PetListInfo,
} from '../types/my';

export const getMyReviews = async (): Promise<
  MyReviewResponseType['response']
> => {
  const response = await duriInstance.get(`/user/review`);
  return response.data.response;
};

// export const getUserInfo = async (): Promise<UserInfo['response']> => {
//   const response = await duriInstance.get(`/user/profile`);
//   return response.data.response;
// };

export const getPetListInfo = async (): Promise<PetListInfo['response']> => {
  const response = await duriInstance.get(`/user/pets`);
  return response.data.response;
};

export const getPetDetailInfo = async (petId: number): Promise<PetInfo> => {
  console.log(petId);
  const response = await duriInstance.get(`/user/pet/${petId}`);
  return response.data.response;
};

export const patchPetInfo = async (
  petId: number,
  formData: FormData,
) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',  // 데이터 형식 지정
    },
  };
  const response = await duriInstance.put(`/user/pet/${petId}`, formData, config);
  return response.data.response;
};

export const patchUserInfo = async (
  image: string,
): Promise<{ response: string }> => {
  const response = await duriInstance.patch(`/user/profile`, image);
  return response.data.response;
};
