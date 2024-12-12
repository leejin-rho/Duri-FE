import React, { useEffect, useState } from 'react';

import { SalonFormData } from '@assets/types/onboarding';
import { Button, Flex, Text, TextField, theme } from '@duri-fe/ui';
import styled from '@emotion/styled';

import {
  ButtonWrapper,
  ContactContainer,
  UnderlinedText,
} from './onboarding.styles';

interface InputSalonProps {
  onNext: (data: SalonFormData) => void;
}

const InputSalon = ({ onNext }: InputSalonProps) => {
  const [salonFormState, setSalonFormState] = useState<SalonFormData>({
    name: '',
    address: '',
    addressDetail: '',
    registrationNumber: '',
    licenseNumber: '',
  });
  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  useEffect(() => {
    const isFilled = Object.values(salonFormState).every(
      (value) => value !== '',
    );
    setIsEmpty(!isFilled);
  }, [salonFormState]);

  const handleChange = (field: keyof SalonFormData, value: string) => {
    setSalonFormState({ ...salonFormState, [field]: value });
  };

  const handleSubmit = () => {
    onNext(salonFormState);
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
            <Text typo="Heading">미용샵의</Text>
            <Text typo="Heading">정보를 입력해주세요</Text>
          </Flex>
          <Text typo="Label2" colorCode={theme.palette.Gray500}>
            등록된 정보는 변경이 불가능해요. 신중히 작성해주세요!
          </Text>
        </Flex>

        <form onSubmit={handleSubmit}>
          <Flex direction="column" align="flex-start" gap={21}>
            <TextField
              label="매장 이름"
              placeholder="매장이름 입력"
              value={salonFormState.name}
              onChange={(e) => handleChange('name', e.target.value)}
              isEssential
              width={244}
              isNoBorder
              shadow="0px 0px 4px 0px rgba(0, 0, 0, 0.10)"
            />

            <Flex direction="column" align="flex-start" gap={5}>
              <Flex justify="flex-start" align="flex-end" gap={8} width={244}>
                <TextField
                  label="매장 위치"
                  placeholder="우편번호 입력"
                  value={salonFormState.address}
                  onChange={(e) => handleChange('address', e.target.value)}
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
                >
                  <Text typo="Body3">우편번호 검색</Text>
                </AddressButton>
              </Flex>
              <TextField
                placeholder="상세주소 입력"
                value={salonFormState.addressDetail}
                onChange={(e) => handleChange('addressDetail', e.target.value)}
                width={244}
                isNoBorder
                shadow="0px 0px 4px 0px rgba(0, 0, 0, 0.10)"
              />
            </Flex>

            <TextField
              label="사업자 등록번호"
              placeholder="사업자 등록번호 입력"
              value={salonFormState.registrationNumber}
              onChange={(e) =>
                handleChange('registrationNumber', e.target.value)
              }
              isEssential
              width={175}
              isNoBorder
              shadow="0px 0px 4px 0px rgba(0, 0, 0, 0.10)"
            />

            <TextField
              label="미용사 면허번호"
              placeholder="미용사 면허번호 입력"
              value={salonFormState.licenseNumber}
              onChange={(e) => handleChange('licenseNumber', e.target.value)}
              isEssential
              width={175}
              isNoBorder
              shadow="0px 0px 4px 0px rgba(0, 0, 0, 0.10)"
            />
          </Flex>
        </form>
      </Flex>

      {/* 문의하기 눌렀을 때에 대한 처리 필요 */}
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

const AddressButton = styled(Button)`
  width: auto;
`;

export default InputSalon;
