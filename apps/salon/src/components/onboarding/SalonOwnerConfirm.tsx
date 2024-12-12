import React from 'react';

import { SalonOwnerFormData } from '@assets/types/onboarding';
import {
  AlertStar,
  Button,
  Flex,
  Text,
  theme,
  WidthFitFlex,
} from '@duri-fe/ui';

import {
  ButtonWrapper,
  ContactContainer,
  UnderlinedText,
} from './onboarding.styles';

interface SalonOwnerConfirmProps {
  salonOwnerFormData: SalonOwnerFormData;
  onNext: () => void;
}

const SalonOwnerConfirm = ({
  salonOwnerFormData,
  onNext,
}: SalonOwnerConfirmProps) => {
  return (
    <>
      <Flex direction="column" align="flex-start" padding="48px 0 96px 0">
        <Flex
          direction="column"
          align="flex-start"
          gap={24}
          padding="0 0 48px 0"
        >
          <Flex direction="column" align="flex-start">
            <Text typo="Heading">입력하신 정보를</Text>
            <Text typo="Heading">확인해주세요</Text>
          </Flex>
          <Text typo="Body3" colorCode={theme.palette.Gray500}>
            등록된 정보는 변경이 불가능해요. 신중히 작성해주세요!
          </Text>
        </Flex>

        <Flex direction="column" gap={28}>
          <Flex justify="flex-start" gap={36}>
            <Text typo="Label1">
              성함
              <AlertStar isUpper />
            </Text>
            <Text typo="Body4">{salonOwnerFormData.name}</Text>
          </Flex>

          <Flex justify="flex-start" gap={36}>
            <Text typo="Label1">
              성별
              <AlertStar isUpper />
            </Text>
            <Text typo="Body4">{salonOwnerFormData.gender}</Text>
          </Flex>

          <Flex justify="flex-start" gap={36}>
            <Text typo="Label1">
              나이
              <AlertStar isUpper />
            </Text>
            <Text typo="Body4">{salonOwnerFormData.age}세</Text>
          </Flex>

          <Flex justify="flex-start" gap={36}>
            <Text typo="Label1">
              경력
              <AlertStar isUpper />
            </Text>
            <Text typo="Body4">
              {salonOwnerFormData.experienceYears}년{' '}
              {salonOwnerFormData.experienceMonths}개월
            </Text>
          </Flex>

          <Flex justify="flex-start" align="flex-start" gap={36}>
            <Text typo="Label1">
              자격
              <AlertStar isUpper />
            </Text>
            <WidthFitFlex
              direction="column"
              justify="flex-start"
              align="start"
              gap={12}
            >
              {salonOwnerFormData.license &&
                salonOwnerFormData.license.map((item) => (
                  <Text key={item} typo="Body4">
                    {item}
                  </Text>
                ))}
            </WidthFitFlex>
          </Flex>
        </Flex>
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
        <Button
          bg={theme.palette.Black}
          fontColor={theme.palette.White}
          onClick={onNext}
        >
          다음
        </Button>
      </ButtonWrapper>
    </>
  );
};

export default SalonOwnerConfirm;
