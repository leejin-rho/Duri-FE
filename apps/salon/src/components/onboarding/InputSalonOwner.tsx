import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

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
import { GroomerOnboardingInfoType } from '@duri-fe/utils';
import styled from '@emotion/styled';

import {
  ButtonWrapper,
  ContactContainer,
  UnderlinedText,
} from './onboarding.styles';

interface InputSalonOwnerProps {
  salonOwnerFormData: GroomerOnboardingInfoType;
  setSalonOwnerFormData: React.Dispatch<
    React.SetStateAction<GroomerOnboardingInfoType>
  >;
  setProfileImage: React.Dispatch<React.SetStateAction<File | null>>;
  onNext: () => void;
}

const CERTIFICATE_OPTIONS: string[] = [
  '반려견 스타일리스트',
  '펫뷰티션',
  '펫테이너',
  '반려동물 행동지도사',
  '반려동물 관리자',
  '피어프리 인증',
];

const GENDER_OPTIONS: string[] = ['M', 'F'];

const InputSalonOwner = ({
  salonOwnerFormData,
  setSalonOwnerFormData,
  setProfileImage,
  onNext,
}: InputSalonOwnerProps) => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string>('');
  const [historyYear, setHistoryYear] = useState<number | null>(0);
  const [historyMonths, setHistoryMonths] = useState<number | null>(null);
  const [license, setLicense] = useState<string[]>([]);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<GroomerOnboardingInfoType>({
    mode: 'onSubmit',
    defaultValues: salonOwnerFormData,
  });

  /** 이미지 File 객체 저장 */
  const handleProfileImageChange = (file: File | null) => {
    setProfileImage(file);
  };

  /** 프리뷰 저장 + 이미지 File 객체 저장 함수 호출 */
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setImagePreviewUrl(fileUrl);
      handleProfileImageChange(file);
    } else {
      handleProfileImageChange(null);
    }
  };

  /** 자격증 선택 */
  const handleSelectLicense = (selectedLicense: string | number) => {
    const set = new Set(license);
    if (typeof selectedLicense === 'string') {
      set.add(selectedLicense);
      setLicense([...set]);
    }
  };

  /** 자격증 제거 */
  const handleRemoveLicense = (selectedLicense: string) => {
    const set = new Set(license);
    set.delete(selectedLicense);
    setLicense([...set]);
  };

  const onSubmitSalonOwnerData = (data: GroomerOnboardingInfoType) => {
    // 폼에 안들어가는 데이터 유효성 검사
    const isHistoryValid = historyYear !== null && historyMonths !== null;
    if (!imagePreviewUrl || !isHistoryValid || license.length === 0) {
      return;
    }

    setSalonOwnerFormData({
      ...data,
      history: isHistoryValid ? historyYear * 12 + historyMonths : 0,
      license,
    });
    URL.revokeObjectURL(imagePreviewUrl);

    onNext();
  };

  return (
    <StyledForm>
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
                {imagePreviewUrl ? (
                  <ImagePreview
                    src={imagePreviewUrl}
                    alt="선택된 파일 미리보기"
                  />
                ) : (
                  <ProfileWrapper
                    width={70}
                    height={70}
                    backgroundColor={theme.palette.Gray20}
                    borderRadius={35}
                    isError={!imagePreviewUrl && isSubmitted}
                  >
                    <Profile
                      width={52}
                      height={52}
                      color={theme.palette.Gray200}
                    />
                  </ProfileWrapper>
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
              <Controller
                name="name"
                control={control}
                rules={{ required: '필수' }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label="성함"
                    placeholder="이름 입력"
                    maxLength={10}
                    width={130}
                    height={40}
                    isEssential
                    isNoBorder
                    shadow="0px 0px 4px 0px rgba(0, 0, 0, 0.10)"
                    isError={!!fieldState.error}
                  />
                )}
              />
            </FormInputWrapper>
          </Flex>

          {/* 나이, 성별 */}
          <Flex align="flex-start">
            <FormInputWrapper widthPer={50}>
              <Flex justify="flex-start" align="flex-end" gap={8}>
                <Controller
                  name="age"
                  control={control}
                  rules={{ required: '필수', min: 15, max: 99 }}
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      type="number"
                      label="나이"
                      onChange={(event) => field.onChange(+event.target.value)}
                      isEssential
                      placeholder="나이 입력"
                      maxLength={3}
                      width={83}
                      height={40}
                      isNoBorder
                      shadow="0px 0px 4px 0px rgba(0, 0, 0, 0.10)"
                      isError={!!fieldState.error}
                      helperText={
                        errors.age
                          ? [{ type: 'error', text: `${errors.age.message}` }]
                          : []
                      }
                    />
                  )}
                />
                <WidthFitFlex height={40}>
                  <Text typo="Body3">세</Text>
                </WidthFitFlex>
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
                {GENDER_OPTIONS.map((gender) => (
                  <Controller
                    key={gender}
                    name="gender"
                    control={control}
                    render={({ field }) => (
                      <Button
                        onClick={() => field.onChange(gender)}
                        bg={
                          field.value === gender
                            ? theme.palette.Black
                            : theme.palette.White
                        }
                        fontColor={
                          field.value === gender
                            ? theme.palette.White
                            : theme.palette.Black
                        }
                        border={`1px solid ${theme.palette.Gray100}`}
                        height="43px"
                        typo="Body2"
                        width="fit-content"
                      >
                        {gender === 'M' ? '남' : '여'}
                      </Button>
                    )}
                  />
                ))}
              </Flex>
            </FormInputWrapper>
          </Flex>

          {/* 경력 */}
          <FormInputWrapper>
            <Flex justify="flex-start" align="flex-end" gap={8}>
              <TextField
                type="number"
                label="경력"
                isEssential
                min={0}
                max={99}
                onChange={(e) => setHistoryYear(Number(e.target.value))}
                placeholder="경력 입력"
                maxLength={2}
                width={83}
                height={40}
                isNoBorder
                shadow="0px 0px 4px 0px rgba(0, 0, 0, 0.10)"
                isError={historyYear === null && isSubmitted}
              />
              <WidthFitFlex height={40}>
                <Text typo="Body3">년</Text>
              </WidthFitFlex>

              <TextField
                type="number"
                min={0}
                max={12}
                onChange={(e) => setHistoryMonths(Number(e.target.value))}
                placeholder="경력 입력"
                maxLength={2}
                width={83}
                height={40}
                isNoBorder
                shadow="0px 0px 4px 0px rgba(0, 0, 0, 0.10)"
                isError={historyMonths === null && isSubmitted}
              />

              <WidthFitFlex height={40}>
                <Text typo="Body3">개월</Text>
              </WidthFitFlex>
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
              options={CERTIFICATE_OPTIONS}
              defaultValue="자격 선택"
              onSelect={handleSelectLicense}
              width={235}
              isError={license.length === 0 && isSubmitted}
            />
            <WidthFitFlex
              padding="8px 0 0 16px"
              direction="column"
              justify="flex-start"
              align="start"
              gap={12}
            >
              {license &&
                license.map((item) => (
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
      </Flex>

      <ContactContainer gap={4}>
        <Text typo="Label2" colorCode={theme.palette.Gray300}>
          문제가 발생한다면
        </Text>
        <UnderlinedText href="mailto:fodo9898@inha.edu">
          문의하기
        </UnderlinedText>
        <Text typo="Label2" colorCode={theme.palette.Gray300}>
          버튼을 눌러주세요.
        </Text>
      </ContactContainer>

      <ButtonWrapper padding="0 20px">
        <Button
          bg={theme.palette.Black}
          fontColor={theme.palette.White}
          onClick={handleSubmit(onSubmitSalonOwnerData)}
        >
          다음 단계
        </Button>
      </ButtonWrapper>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  width: 100%;
`;

const FormInputWrapper = styled(Flex)`
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
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

const ProfileWrapper = styled(Flex)<{ isError: boolean }>`
  border: 1px solid
    ${({ isError }) => (isError ? theme.palette.Alert : theme.palette.Gray100)};
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
