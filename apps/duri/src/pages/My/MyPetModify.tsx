import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

import { InputImageFile } from '@duri/components/my/InputImageFile';
import { PetModifyForm } from '@duri/components/my/modify/PetModifyForm';
import { BREEDS_MAPPING } from '@duri/constants';
import {
  Button,
  DuriNavbar,
  Flex,
  Header,
  HeightFitFlex,
  MobileLayout,
  theme,
} from '@duri-fe/ui';
import { useGetPetDetailInfo, usePutPetInfo } from '@duri-fe/utils';

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

const MyPetModifyPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const petId = location.state;
  const [imageURL, setImageURL] = useState<string | undefined>();

  // const { data: getPetDetailData, isError: getPetDetailError } =
  const { data: getPetDetailData } = useGetPetDetailInfo(petId);

  const { mutateAsync: modify, isSuccess: modifySuccess } = usePutPetInfo();

  const { control, handleSubmit, setValue, getValues } = useForm<FormData>({
    mode: 'onChange',
  });

  useEffect(() => {
    if (modifySuccess) {
      navigate('/my/pet', { state: petId });
    }
  });

  useEffect(() => {
    if (getPetDetailData) {
      setValue('name', getPetDetailData.name);
      setValue('image', null);
      setValue('breed', getPetDetailData.breed);
      setValue('age', getPetDetailData.age);
      setValue('weight', getPetDetailData.weight);
      setValue('gender', getPetDetailData.gender);
      setValue('neutering', getPetDetailData.neutering);
      setValue('character', getPetDetailData.character);
      setValue('diseases', getPetDetailData.diseases);
      setImageURL(getPetDetailData.image);
    }
  }, [getPetDetailData, setValue]);

  const onSubmit = (data: FormData) => {
    // breed 값 업데이트
    setValue('breed', BREEDS_MAPPING[data.breed]);

    // image와 나머지 데이터를 분리
    const updatedData = getValues();
    const { image, ...newPetRequest } = updatedData;

    // newPetRequest와 image를 PetModifyInfo 타입에 맞춰서 전달
    const formData = new FormData();
    formData.append(
      'newPetRequest',
      new Blob([JSON.stringify(newPetRequest)], { type: 'application/json' }),
    );
    if (image) {
      formData.append('image', image); // image는 File 객체이므로 그대로 추가
    }
    // API 연결
    modify({ petId, formData });
  };

  const onChange = (file: File) => {
    setValue('image', file);
  };

  return (
    <MobileLayout backgroundColor={theme.palette.Gray_White}>
      <Header
        title="마이펫 정보 수정"
        titleAlign="start"
        backIcon
        onClickBack={() => navigate(-1)}
      />
      {getPetDetailData && (
        <>
          <Flex direction="column" padding="0 20px" margin="0 0 30px 0">
            <InputImageFile
              imageURL={imageURL}
              onChange={onChange}
              setImageURL={setImageURL}
            />
            <PetModifyForm
              control={control}
              getValues={getValues}
              setValue={setValue}
            />
          </Flex>
          <HeightFitFlex margin="0 0 93px 0">
            <Button
              borderRadius="0px"
              bg={theme.palette.Black}
              fontColor={theme.palette.White}
              onClick={handleSubmit(onSubmit)}
            >
              수정 완료
            </Button>
          </HeightFitFlex>
        </>
      )}
      <DuriNavbar />
    </MobileLayout>
  );
};

export default MyPetModifyPage;
