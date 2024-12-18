import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Button, Flex, Modal, Text, TextField, theme } from '@duri-fe/ui';
import { ShopOnboardingInfoType, useModal } from '@duri-fe/utils';
import styled from '@emotion/styled';
import { Coordinates } from '@salon/types';
import { formatPhoneNumber } from '@salon/utils';

import AddressSearchModal from './AddressSearchModal';
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
  const [address, setAddress] = useState<string>('');
  const [coordinates, setCoordinates] = useState<Coordinates>({
    lat: 0,
    lon: 0,
  });
  const { isOpenModal, openModal, closeModal } = useModal();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<ShopOnboardingInfoType>({
    mode: 'onSubmit',
    defaultValues: salonFormData,
  });

  const handleAddressSearch = () => {
    openModal();
  };

  const onSubmitSalonData = (data: ShopOnboardingInfoType) => {
    if (coordinates.lat === 0 || coordinates.lon === 0 || zipCode === '') {
      alert('주소를 검색해주세요.');
      return;
    }
    setSalonFormData({
      ...data,
      address,
      lat: coordinates.lat,
      lon: coordinates.lon,
    });
    onNext();
  };

  useEffect(() => {
    closeModal();
  }, [coordinates]);

  return (
    <>
      <StyledForm>
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
            <Text typo="Body3" colorCode={theme.palette.Gray500}>
              등록된 정보는 변경이 불가능해요. 신중히 작성해주세요!
            </Text>
          </Flex>

          <Flex direction="column" align="flex-start" gap={21}>
            <Flex justify="space-between" align="flex-start">
              <Controller
                name="name"
                control={control}
                rules={{ required: '필수' }}
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
                      errors.name
                        ? [{ type: 'error', text: `${errors.name.message}` }]
                        : []
                    }
                    isError={!!fieldState.error}
                  />
                )}
              />
            </Flex>

            <Controller
              name="phone"
              control={control}
              rules={{
                required: '필수',
                pattern: {
                  value: PHONE_REGEX,
                  message: '형식에 맞게 입력해주세요.',
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="text"
                  label="매장 전화번호"
                  placeholder="전화번호 입력"
                  maxLength={13}
                  isEssential
                  width={244}
                  isNoBorder
                  shadow="0px 0px 4px 0px rgba(0, 0, 0, 0.10)"
                  helperText={
                    errors.phone
                      ? [{ type: 'error', text: `${errors.phone.message}` }]
                      : []
                  }
                  isError={!!errors.phone}
                  onChange={(e) => {
                    // 입력값을 포매팅한 후 react-hook-form에 업데이트
                    const formattedValue = formatPhoneNumber(e.target.value);
                    field.onChange(formattedValue);
                  }}
                />
              )}
            />

            <Flex direction="column" align="flex-start">
              <Flex justify="flex-start" align="flex-end" gap={6} width={244}>
                <TextField
                  type="number"
                  label="매장 위치"
                  placeholder="우편번호"
                  value={zipCode}
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
              <TextField
                type="text"
                placeholder="상세주소 입력"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                width={244}
                isNoBorder
                shadow="0px 0px 4px 0px rgba(0, 0, 0, 0.10)"
                isError={address === '' && isSubmitted}
              />
            </Flex>

            <Controller
              name="businessRegistrationNumber"
              control={control}
              rules={{ required: '필수' }}
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
                      ? [
                          {
                            type: 'error',
                            text: `${errors.businessRegistrationNumber.message}`,
                          },
                        ]
                      : []
                  }
                  isError={!!errors.businessRegistrationNumber}
                />
              )}
            />
            <Controller
              name="groomerLicenseNumber"
              control={control}
              rules={{ required: '필수' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="text"
                  label="미용사 면허번호"
                  placeholder="미용사 면허번호 입력"
                  isEssential
                  width={175}
                  maxLength={10}
                  isNoBorder
                  shadow="0px 0px 4px 0px rgba(0, 0, 0, 0.10)"
                  helperText={
                    errors.groomerLicenseNumber
                      ? [
                          {
                            type: 'error',
                            text: `${errors.groomerLicenseNumber.message}`,
                          },
                        ]
                      : []
                  }
                  isError={!!errors.groomerLicenseNumber}
                />
              )}
            />
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

        <ButtonWrapper>
          <Button
            bg={theme.palette.Black}
            fontColor={theme.palette.White}
            onClick={handleSubmit(onSubmitSalonData)}
          >
            다음 단계
          </Button>
        </ButtonWrapper>
      </StyledForm>

      <Modal title="주소 검색" isOpen={isOpenModal} toggleModal={closeModal}>
        <AddressSearchModal
          setZipCode={setZipCode}
          setAddress={setAddress}
          setCoordinates={setCoordinates}
          closeModal={closeModal}
        />
      </Modal>
    </>
  );
};

const StyledForm = styled.form`
  width: 100%;
`;

const AddressButton = styled(Button)`
  width: auto;
`;

export default InputSalon;
