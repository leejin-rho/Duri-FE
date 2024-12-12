import React, { useEffect, useState } from 'react';

import { SalonOwnerFormData } from '@assets/types/onboarding';
import {
  AlertStar,
  Button,
  Dropdown,
  Flex,
  Profile,
  Text,
  TextField,
  theme,
  WidthFitFlex,
} from '@duri-fe/ui';
import styled from '@emotion/styled';

import {
  ButtonWrapper,
  ContactContainer,
  UnderlinedText,
} from './onboarding.styles';

interface InputSalonOwnerProps {
  onNext: (data: SalonOwnerFormData) => void;
}

const certificateOptions: string[] = [
  '반려견 스타일리스트',
  '펫뷰티션',
  '펫테이너',
  '반려동물 행동지도사',
  '반려동물 관리자',
  '피어프리 인증',
];

const genders: string[] = ['male', 'female'];

const InputSalonOwner = ({ onNext }: InputSalonOwnerProps) => {
  const [salonOwnerFormState, setSalonOwnerFormState] =
    useState<SalonOwnerFormData>({
      profile: '',
      name: '',
      age: '',
      gender: '',
      experienceYears: '',
      experienceMonths: '',
      license: [],
    });
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const [imgUrl, setImgUrl] = useState<string>('');

  useEffect(() => {
    const isFilled = Object.values(salonOwnerFormState).every(
      (value) => value !== '',
    );
    setIsEmpty(!isFilled);
  }, [salonOwnerFormState]);

  /** 변경 함수 */
  const handleChange = (
    field: keyof SalonOwnerFormData,
    value: string | string[],
  ) => {
    setSalonOwnerFormState({ ...salonOwnerFormState, [field]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setImgUrl(fileUrl);
      handleChange('profile', fileUrl);
    } else {
      handleChange('profile', '');
    }
  };

  const handleToggleGender = (selectedGender: string) => {
    handleChange('gender', selectedGender);
  };

  const handleSelectLicense = (selectedLicense: string | number) => {
    const set = new Set(salonOwnerFormState.license);
    if (typeof selectedLicense === 'string') {
      set.add(selectedLicense);
      handleChange('license', [...set]);
    }
  };

  const handleRemoveLicense = (selectedLicense: string) => {
    const set = new Set(salonOwnerFormState.license);
    set.delete(selectedLicense);
    handleChange('license', [...set]);
  };

  const handleSubmit = () => {
    URL.revokeObjectURL(imgUrl);
    onNext(salonOwnerFormState);
  };

  return (
    <>
      <Flex direction="column" align="flex-start" padding="48px 0 96px 0">
        <Flex
          direction="column"
          align="flex-start"
          gap={24}
          padding="0 0 24px 0"
        >
          <Flex direction="column" align="flex-start">
            <Text typo="Heading">원장님의</Text>
            <Text typo="Heading">정보를 입력해주세요</Text>
          </Flex>
          <Text typo="Body3" colorCode={theme.palette.Gray500}>
            등록된 정보는 변경이 불가능해요. 신중히 작성해주세요!
          </Text>
        </Flex>

        <FormWrapper onSubmit={handleSubmit}>
          <Flex direction="column" align="flex-start" gap={20}>
            {/* 사진, 성함 */}
            <Flex justify="flex-start" align="flex-start">
              <Flex justify="flex-start" align="flex-start" widthPer={50}>
                <label htmlFor="profile">
                  <Text typo="Label1">
                    사진
                    <AlertStar isUpper />
                  </Text>
                </label>
                <ImageUploadContainer width={70} height={70}>
                  {imgUrl && salonOwnerFormState.profile ? (
                    <ImagePreview src={imgUrl} alt="선택된 파일 미리보기" />
                  ) : (
                    <Flex
                      width={70}
                      height={70}
                      backgroundColor={theme.palette.Gray20}
                      borderRadius={35}
                    >
                      <Profile
                        width={52}
                        height={52}
                        color={theme.palette.Gray200}
                      />
                    </Flex>
                  )}
                  <FileInput
                    id="profile"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </ImageUploadContainer>
              </Flex>

              <FormInputWrapper widthPer={50}>
                <TextField
                  label="성함"
                  placeholder="이름 입력"
                  value={salonOwnerFormState.name}
                  maxLength={10}
                  onChange={(e) => handleChange('name', e.target.value)}
                  width={130}
                  height={40}
                  isEssential
                  isNoBorder
                  shadow="0px 0px 4px 0px rgba(0, 0, 0, 0.10)"
                />
              </FormInputWrapper>
            </Flex>

            {/* 나이, 성별 */}
            <Flex align="flex-start">
              <FormInputWrapper widthPer={50}>
                <label>
                  <Text typo="Label1">
                    나이
                    <AlertStar isUpper />
                  </Text>
                </label>
                <Flex justify="flex-start" gap={8}>
                  <TextField
                    type="number"
                    placeholder="나이 입력"
                    value={salonOwnerFormState.age}
                    maxLength={2}
                    onChange={(e) => handleChange('age', e.target.value)}
                    width={83}
                    height={40}
                    isNoBorder
                    shadow="0px 0px 4px 0px rgba(0, 0, 0, 0.10)"
                  />
                  <Text>세</Text>
                </Flex>
              </FormInputWrapper>

              <FormInputWrapper widthPer={50}>
                <label>
                  <Text typo="Label1">
                    성별
                    <AlertStar isUpper />
                  </Text>
                </label>
                <Flex justify="flex-start" gap={8}>
                  {genders.map((gender) => (
                    <Button
                      key={gender}
                      onClick={() => handleToggleGender(gender)}
                      bg={
                        salonOwnerFormState.gender === gender
                          ? theme.palette.Black
                          : theme.palette.White
                      }
                      fontColor={
                        salonOwnerFormState.gender === gender
                          ? theme.palette.White
                          : theme.palette.Black
                      }
                      border={`1px solid ${theme.palette.Gray100}`}
                      height="43px"
                      typo="Body2"
                      width="fit-content"
                    >
                      {gender === 'male' ? '남' : '여'}
                    </Button>
                  ))}
                </Flex>
              </FormInputWrapper>
            </Flex>

            {/* 경력 */}
            <FormInputWrapper>
              <label>
                <Text typo="Label1">
                  경력
                  <AlertStar isUpper />
                </Text>
              </label>
              <Flex justify="flex-start" gap={8}>
                <TextField
                  type="number"
                  max={99}
                  placeholder="경력 입력"
                  value={salonOwnerFormState.experienceYears}
                  maxLength={2}
                  onChange={(e) =>
                    handleChange('experienceYears', e.target.value)
                  }
                  width={83}
                  height={40}
                  isNoBorder
                  shadow="0px 0px 4px 0px rgba(0, 0, 0, 0.10)"
                />
                <Text>년</Text>
                <TextField
                  type="number"
                  max={12}
                  placeholder="경력 입력"
                  value={salonOwnerFormState.experienceMonths}
                  maxLength={2}
                  onChange={(e) =>
                    handleChange('experienceMonths', e.target.value)
                  }
                  width={83}
                  height={40}
                  isNoBorder
                  shadow="0px 0px 4px 0px rgba(0, 0, 0, 0.10)"
                />
                <Text>개월</Text>
              </Flex>
            </FormInputWrapper>

            {/* 자격 */}
            <FormInputWrapper>
              <label htmlFor="license">
                <Text typo="Label1">
                  자격
                  <AlertStar isUpper />
                </Text>
              </label>
              <Dropdown
                options={certificateOptions}
                defaultValue="자격 선택"
                onSelect={handleSelectLicense}
                width={235}
              />
              <WidthFitFlex
                padding="8px 0 0 16px"
                direction="column"
                justify="flex-start"
                align="start"
                gap={12}
              >
                {salonOwnerFormState.license &&
                  salonOwnerFormState.license.map((item) => (
                    <Text
                      key={item}
                      typo="Body4"
                      onClick={() => handleRemoveLicense(item)}
                    >
                      {item}
                    </Text>
                  ))}
              </WidthFitFlex>
            </FormInputWrapper>
          </Flex>
        </FormWrapper>
      </Flex>

      {/* 문의하기
       * TODO : 문의하기 눌렀을 때에 대한 처리 필요
       */}
      <ContactContainer gap={4}>
        <Text typo="Label2" colorCode={theme.palette.Gray300}>
          문제가 발생한다면
        </Text>
        <UnderlinedText typo="Label2" colorCode={theme.palette.Gray300}>
          문의하기
        </UnderlinedText>
        <Text typo="Label2" colorCode={theme.palette.Gray300}>
          버튼을 눌러주세요.
        </Text>
      </ContactContainer>

      <ButtonWrapper padding="0 20px">
        {isEmpty ? (
          <Button bg={theme.palette.Gray50} disabled>
            다음 단계
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            bg={theme.palette.Black}
            fontColor={theme.palette.White}
          >
            다음 단계
          </Button>
        )}
      </ButtonWrapper>
    </>
  );
};

const FormWrapper = styled.form`
  width: 100%;
`;

const FormInputWrapper = styled(Flex)`
  align-items: flex-start;
  flex-direction: column;
  gap: 12px;
`;

const ImageUploadContainer = styled(Flex)`
  position: relative;
  cursor: pointer;
  overflow: hidden;
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 35px;
`;

const FileInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
`;

export default InputSalonOwner;
