import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { PetRegisterForm } from '@duri/components/my/register/PetRegisterForm';
import { BREEDS_MAPPING } from '@duri/constants';
import {
  Button,
  Doori,
  DuriNavbar,
  Flex,
  Header,
  MobileLayout,
  theme,
} from '@duri-fe/ui';
import { usePostPetInfo } from '@duri-fe/utils';
import styled from '@emotion/styled';

export interface FormData {
  id: number;
  name: string;
  image: File | null;
  breed: string;
  age: number;
  weight: number;
  gender: string;
  neutering?: boolean;
  lastGrooming?: string | null;
  character: string[];
  diseases: string[];
}

const MyPetRegisterPage = () => {
  const navigate = useNavigate();

  //펫 등록 훅
  const { mutate: postPetInfo } = usePostPetInfo(() => {
    window.location.href = '/my/pet';
  }); //반려견 정보 등록 hook

  const { control, handleSubmit, setValue, getValues } = useForm<FormData>({
    mode: 'onChange',
  });

  const onSubmit = (data: FormData) => {
    // breed 값 업데이트
    setValue('breed', BREEDS_MAPPING[data.breed]);

    // 요청 데이터 생성
    const updatedData = {
      name: data.name,
      breed: BREEDS_MAPPING[data.breed],
      age: data.age,
      weight: data.weight,
      gender: data.gender,
      neutering: data.neutering ?? false,
      character: data.character,
      diseases: data.diseases,
    };

    // API 연결
    postPetInfo(updatedData);
  };

  return (
    <MobileLayout backgroundColor={theme.palette.Gray_White}>
      <Header
        title="마이펫 추가"
        titleAlign="start"
        backIcon
        onClickBack={() => navigate('/my/pet')}
      />
      <Flex direction="column" margin="24px 0 100px">
        <Doori width={170} height={53}/>
        <Flex direction="column" padding="0 20px" margin="16px 0 30px 0">
          <PetRegisterForm
            control={control}
            getValues={getValues}
            setValue={setValue}
          />
        </Flex>

        <BottomButton
          borderRadius="0px"
          bg={theme.palette.Black}
          fontColor={theme.palette.White}
          onClick={handleSubmit(onSubmit)}
        >
          등록 완료
        </BottomButton>
      </Flex>
      <DuriNavbar />
    </MobileLayout>
  );
};

export default MyPetRegisterPage;

const BottomButton = styled(Button)`
  position: sticky;
  bottom: 92px;
  left: 0;
  z-index: 999;
`;
