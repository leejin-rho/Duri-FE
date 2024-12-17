import { publicInstance } from '../axiosConfig';
import { GroomerInfoResponse } from '../types/my';

export const getGroomerInfo = async ({
  groomerId,
}: {
  groomerId: number;
}): Promise<GroomerInfoResponse['response']> => {
  const { data } = await publicInstance.get(`/groomer/profile/${groomerId}`, {
    params: { groomerId },
  });
  return data.response;
};
