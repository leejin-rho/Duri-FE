import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Button, Flex, Text, TextField, theme } from '@duri-fe/ui';
import { ShopOnboardingInfoType } from '@duri-fe/utils';
import styled from '@emotion/styled';

import {
  ButtonWrapper,
  ContactContainer,
  UnderlinedText,
} from './onboarding.styles';

interface InputSalonProps {
  salonFormData: ShopOnboardingInfoType;
  setSalonFormData: React.Dispatch<
    React.SetStateAction<ShopOnboardingInfoType>
  >;
  onNext: () => void;
}

const PHONE_REGEX = /^0\d{1,2}-?\d{3,4}-?\d{4}$/;

const InputSalon = ({
  salonFormData,
  setSalonFormData,
  onNext,
}: InputSalonProps) => {
  const [zipCode, setZipCode] = useState<string>('');
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ShopOnboardingInfoType>({
    mode: 'onChange',
    defaultValues: salonFormData,
  });

  const handleAddressInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZipCode(e.target.value);
  };

  const handleAddressSearch = () => {
    console.log(zipCode);
    // 우편번호 검색 API 호출
  };

  const onSubmitSalonData = (data: ShopOnboardingInfoType) => {
    setSalonFormData(data);
    onNext();
  };

  const watchAllFields = watch();

  useEffect(() => {
    const isValid = Object.keys(watchAllFields).every((value) => value !== '');
    setIsEmpty(isValid);
  });
  return (
    <StyledForm onSubmit={handleSubmit(onSubmitSalonData)}>
      <Flex direction="column" align="flex-start" padding="48px 0 96px 0">
        <Flex
          direction="column"
          align="flex-start"
          gap={24}
          padding="0 0 24px 0"
        >
          <Flex direction="column" align="flex-start">
            <Text typo="Heading">미용샵의</Text>
            <Text typo="Heading">정보를 입력해주세요</Text>
          </Flex>
          <Text typo="Label2" colorCode={theme.palette.Gray500}>
            등록된 정보는 변경이 불가능해요. 신중히 작성해주세요!
          </Text>
        </Flex>

        <Flex direction="column" align="flex-start" gap={21}>
          <Flex justify="space-between" align="flex-start">
            <Controller
              name="name"
              control={control}
              rules={{ required: '매장 이름을 입력해주세요.' }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  type="text"
                  label="매장 이름"
                  placeholder="매장이름 입력"
                  isEssential
                  widthPer="40%"
                  isNoBorder
                  shadow="0px 0px 4px 0px rgba(0, 0, 0, 0.10)"
                  helperText={
                    errors.name ? [{ type: 'error', text: '필수' }] : []
                  }
                  isError={!!fieldState.error}
                />
              )}
            />

            <Controller
              name="phone"
              control={control}
              rules={{
                required: '매장 전화번호를 입력해주세요.',
                pattern: {
                  value: PHONE_REGEX,
                  message: '전화번호 형식에 맞게 입력해주세요.',
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="text"
                  label="매장 전화번호"
                  placeholder="전화번호 입력"
                  isEssential
                  widthPer="55%"
                  isNoBorder
                  shadow="0px 0px 4px 0px rgba(0, 0, 0, 0.10)"
                  helperText={
                    errors.phone ? [{ type: 'error', text: '필수' }] : []
                  }
                  isError={!!errors.phone}
                />
              )}
            />
          </Flex>

          <Flex direction="column" align="flex-start" gap={8}>
            <Flex justify="flex-start" align="flex-end" gap={6} width={244}>
              <TextField
                type="number"
                label="매장 위치"
                placeholder="우편번호 입력"
                value={zipCode}
                onChange={handleAddressInputChange}
                isEssential
                isNoBorder
                shadow="0px 0px 4px 0px rgba(0, 0, 0, 0.10)"
                maxLength={5}
              />
              <AddressButton
                height="40px"
                borderRadius="8px"
                bg={theme.palette.Black}
                fontColor={theme.palette.White}
                onClick={handleAddressSearch}
              >
                <Text typo="Body3">우편번호 검색</Text>
              </AddressButton>
            </Flex>
            <Controller
              name="address"
              control={control}
              rules={{ required: '필수항목입니다.' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="text"
                  placeholder="상세주소 입력"
                  width={244}
                  isNoBorder
                  shadow="0px 0px 4px 0px rgba(0, 0, 0, 0.10)"
                  helperText={
                    errors.address ? [{ type: 'error', text: '필수' }] : []
                  }
                  isError={!!errors.address}
                />
              )}
            />
          </Flex>

          <Controller
            name="businessRegistrationNumber"
            control={control}
            rules={{ required: '사업자 등록번호를 입력해주세요.' }}
            render={({ field }) => (
              <TextField
                {...field}
                type="text"
                label="사업자 등록번호"
                placeholder="사업자 등록번호 입력"
                isEssential
                width={175}
                maxLength={12}
                isNoBorder
                shadow="0px 0px 4px 0px rgba(0, 0, 0, 0.10)"
                helperText={
                  errors.businessRegistrationNumber
                    ? [{ type: 'error', text: '필수' }]
                    : []
                }
                isError={!!errors.businessRegistrationNumber}
              />
            )}
          />
          <Controller
            name="groomerLicenseNumber"
            control={control}
            rules={{ required: '미용사 면허번호를 입력해주세요.' }}
            render={({ field }) => (
              <TextField
                {...field}
                type="text"
                label="미용사 면허번호"
                placeholder="미용사 면허번호 입력"
                isEssential
                width={175}
                isNoBorder
                shadow="0px 0px 4px 0px rgba(0, 0, 0, 0.10)"
                helperText={
                  errors.groomerLicenseNumber
                    ? [{ type: 'error', text: '필수' }]
                    : []
                }
                isError={!!errors.groomerLicenseNumber}
              />
            )}
          />
        </Flex>
      </Flex>

      {/* 문의하기 눌렀을 때에 대한 처리 필요 */}
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

      <ButtonWrapper>
        <Button
          type="submit"
          bg={isEmpty ? theme.palette.Gray200 : theme.palette.Black}
          fontColor={theme.palette.White}
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

const AddressButton = styled(Button)`
  width: auto;
`;

export default InputSalon;
