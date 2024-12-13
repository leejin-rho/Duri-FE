import {
  postShopInfo,
  PostShopInfoRequest,
  PostShopInfoResponse,
} from '@duri-fe/utils';
import { useMutation } from '@tanstack/react-query';

export const usePostShopInfo = () => {
  return useMutation<
    PostShopInfoResponse['response'],
    Error,
    PostShopInfoRequest
  >({
    mutationFn: (request: PostShopInfoRequest) => postShopInfo(request),
    onError: (error) => {
      console.error(error);
      alert('샵 정보 등록에 실패했습니다.');
    },
  });
};
