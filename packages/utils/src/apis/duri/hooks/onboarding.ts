import { useMutation } from '@tanstack/react-query';

import { postPetInfo } from '../onboarding';

export const usePostPetInfo = (handleNavigate: () => void) => {
  // const notify = () => {
  //   toast(
  //     <Flex justify="space-between">
  //       <span>빈려견 정보가 저장되었습니다.</span>
  //     </Flex>,
  //     { position: 'bottom-center' },
  //   );
  // };

  const { mutate } = useMutation({
    mutationKey: ['postPetInfo'],
    mutationFn: postPetInfo,
    onSuccess: (response) => {
      if (response) {
        // notify();
        alert('빈려견 정보가 저장되었습니다.');
        setTimeout(() => {
          handleNavigate();
        }, 1000);
      }
    },
    onError: (error) => {
      console.error('Error:', error);
    },
  });
  return { mutate };
};
