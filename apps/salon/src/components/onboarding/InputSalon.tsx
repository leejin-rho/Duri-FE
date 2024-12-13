import React, { useEffect, useState } from 'react';

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
  onNext: (data: ShopOnboardingInfoType) => void;
}

const InputSalon = ({
  salonFormData,
  setSalonFormData,
  onNext,
}: InputSalonProps) => {
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const [zipCode, setZipCode] = useState<string>('');

  useEffect(() => {
    const isFilled = Object.values(salonFormData).every(
      (value) => value !== '',
    );
    setIsEmpty(!isFilled);
  }, [salonFormData]);

  const handleShopInfoInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof ShopOnboardingInfoType,
  ) => {
    setSalonFormData({
      ...salonFormData,
      [field]: e.target.value,
    });
  };

  const handleAddressInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZipCode(e.target.value);
  };

  const handleAddressSearch = () => {
    console.log(zipCode);
    // 우편번호 검색 API 호출
  };

  const handleShopInfoSubmit = () => {
    console.log(salonFormData);
    onNext(salonFormData);
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

        <form onSubmit={handleShopInfoSubmit}>
          <Flex direction="column" align="flex-start" gap={21}>
            <Flex justify="space-between">
              <TextField
                type="text"
                label="매장 이름"
                placeholder="매장이름 입력"
                value={salonFormData.name}
                onChange={(e) => handleShopInfoInputChange(e, 'name')}
                isEssential
                widthPer="40%"
                isNoBorder
                shadow="0px 0px 4px 0px rgba(0, 0, 0, 0.10)"
              />

              <TextField
                type="text"
                label="매장 전화번호"
                placeholder="전화번호 입력"
                value={salonFormData.phone}
                onChange={(e) => handleShopInfoInputChange(e, 'phone')}
                isEssential
                widthPer="55%"
                isNoBorder
                shadow="0px 0px 4px 0px rgba(0, 0, 0, 0.10)"
              />
            </Flex>

            <Flex direction="column" align="flex-start" gap={5}>
              <Flex justify="flex-start" align="flex-end" gap={8} width={244}>
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
              <TextField
                type="text"
                placeholder="상세주소 입력"
                value={salonFormData.address}
                onChange={(e) => handleShopInfoInputChange(e, 'address')}
                width={244}
                isNoBorder
                shadow="0px 0px 4px 0px rgba(0, 0, 0, 0.10)"
              />
            </Flex>

            <TextField
              type="text"
              label="사업자 등록번호"
              placeholder="사업자 등록번호 입력"
              value={salonFormData.businessRegistrationNumber}
              onChange={(e) =>
                handleShopInfoInputChange(e, 'businessRegistrationNumber')
              }
              isEssential
              width={175}
              isNoBorder
              shadow="0px 0px 4px 0px rgba(0, 0, 0, 0.10)"
            />

            <TextField
              type="text"
              label="미용사 면허번호"
              placeholder="미용사 면허번호 입력"
              value={salonFormData.groomerLicenseNumber}
              onChange={(e) =>
                handleShopInfoInputChange(e, 'groomerLicenseNumber')
              }
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
        <UnderlinedText href="mailto:fodo9898@inha.edu">
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
            onClick={handleShopInfoSubmit}
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
