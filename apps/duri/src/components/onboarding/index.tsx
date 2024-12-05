import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Button, Flex, StatusBar, theme } from '@duri-fe/ui';
import styled from '@emotion/styled';

import PetAgeInfo from './PetAgeInfo';
import PetBreedInfo from './PetBreedInfo';
import PetDiseaseInfo from './PetDiseaseInfo';
import PetGenderInfo from './PetGenderInfo';
import PetNameInfo from './PetNameInfo';
import PetNeuterInfo from './PetNeuterInfo';
import PetPersonalityInfo from './PetPersonalityInfo';
import PetWeightInfo from './PetWeightInfo';

export interface FormData {
  name: string;
  weight: string;
  breed: string;
  gender: string;
  isNeutered: boolean;
  age: string;
  personality: string[];
  disease: string[];
}

const MultiStepForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [personalityList, setPersonalityList] = useState<string[]>([]); // 성격 선택리스트 관리
  const [diseaseList, setDiseaseList] = useState<string[]>([]); // 성격 선택리스트 관리

  useEffect(() => {
    if (step <= 3) setProgress(1);
    else if (step <= 5) setProgress(2);
    else if (step <= 6) setProgress(3);
    else if (step <= 7) setProgress(4);
  }, [step]);

  const stepList = [
    '이름',
    '견종',
    '성별',
    '중성화 여부',
    '나이',
    '몸무게',
    '성격',
    '질환',
  ];

  const toggleArrayValue = async (field: keyof FormData, value: string) => {
    if (field === 'personality') {
      // 상위 컴포넌트에서 상태 업데이트
      const newPersonalityList = personalityList.includes(value)
        ? personalityList.filter((v) => v !== value) // 값 제거
        : [...personalityList, value]; // 값 추가

      setPersonalityList(newPersonalityList);
      setValue('personality', newPersonalityList); // react-hook-form 값 업데이트
    } else if (field === 'disease') {
      const newDiseaseList = diseaseList.includes(value)
        ? diseaseList.filter((v) => v !== value) // 값 제거
        : [...diseaseList, value]; // 값 추가

      setDiseaseList(newDiseaseList);
      setValue('disease', newDiseaseList); // react-hook-form 값 업데이트
    }
  };

  const {
    control,
    trigger,
    handleSubmit,
    setValue,
    getValues,
    register,
    formState: { isValid },
  } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      weight: '',
      breed: '',
      gender: '',
      isNeutered: undefined,
      age: '',
      personality: [],
      disease: [],
    },
  });

  const onNextStep = async () => {
    // 현재 단계의 필드 유효성 검사
    const isValidStep = await trigger();
    if (isValidStep) {
      setStep(step + 1);
    }
  };

  const onSubmit = (data: FormData) => {
    console.log('Form Data:', data);
    navigate('/');
  };

  return (
    <>
      <Wrapper direction="column" padding="107px 20px 0 20px">
        <Wrapper
          direction="column"
          justify="flex-start"
          align="flex-start"
          gap={55}
        >
          <StatusBar current={progress} total={4} mode="onboarding" />
          <Form onSubmit={handleSubmit(onSubmit)}>
            {stepList[step] === '이름' && (
              <PetNameInfo
                control={control}
                register={register}
                trigger={trigger}
                setStep={setStep}
              />
            )}
            {stepList[step] === '견종' && <PetBreedInfo control={control} />}
            {stepList[step] === '성별' && <PetGenderInfo control={control} />}
            {stepList[step] === '중성화 여부' && (
              <PetNeuterInfo control={control} />
            )}
            {stepList[step] === '나이' && (
              <PetAgeInfo control={control} name={getValues('name')} />
            )}
            {stepList[step] === '몸무게' && (
              <PetWeightInfo control={control} name={getValues('name')} />
            )}

            {stepList[step] === '성격' && (
              <PetPersonalityInfo
                control={control}
                toggleArrayValue={toggleArrayValue}
                personalityList={personalityList}
                name={getValues('name')}
              />
            )}
            {stepList[step] === '질환' && (
              <PetDiseaseInfo
                control={control}
                toggleArrayValue={toggleArrayValue}
                diseaseList={diseaseList}
                name={getValues('name')}
              />
            )}
          </Form>
        </Wrapper>
      </Wrapper>

      <Flex
        justify="center"
        align="center"
        padding="0 20px"
        margin="0 0 44px 0"
      >
        {/* {step > 1 && <Button onClick={onPrevStep}>돌아가기</Button>} */}
        {['시작', '이름', '질환', '성격'].includes(stepList[step]) ? (
          <></>
        ) : (
          <Button
            bg={isValid ? theme.palette.Black : theme.palette.Gray50}
            fontColor={isValid ? theme.palette.White : theme.palette.Black}
            onClick={isValid ? onNextStep : undefined}
          >
            {stepList[step] === '질환' ? '완료' : '다음 단계'}
          </Button>
        )}
        {stepList[step] === '성격' &&
          (personalityList.length > 0 ? (
            <Button
              height="54px"
              bg={theme.palette.Black}
              fontColor={theme.palette.White}
              onClick={onNextStep}
            >
              다음 단계
            </Button>
          ) : (
            <Button
              height="54px"
              bg={theme.palette.Gray50}
              fontColor={theme.palette.White}
              onClick={() => setStep(step - 1)}
            >
              다음 단계
            </Button>
          ))}
        {stepList[step] === '질환' &&
          (diseaseList.length > 0 ? (
            <Button
              height="54px"
              bg={theme.palette.Black}
              fontColor={theme.palette.White}
              onClick={handleSubmit(onSubmit)}
            >
              완료
            </Button>
          ) : (
            <Button
              height="54px"
              bg={theme.palette.Gray50}
              fontColor={theme.palette.White}
            >
              완료
            </Button>
          ))}
      </Flex>
    </>
  );
};

export default MultiStepForm;

const Wrapper = styled(Flex)`
  flex: 1;
`;

const Form = styled.form`
  width: 100%;
`;
