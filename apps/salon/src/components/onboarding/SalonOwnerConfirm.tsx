import React from 'react';

import { AlertStar, Button, Flex, Text, theme } from '@duri-fe/ui';
import { SalonOwnerFormData } from '@salon/pages/Onboarding';

interface SalonOwnerConfirmProps {
  salonOwnerFormData: SalonOwnerFormData;
}

const SalonOwnerConfirm = ({
  salonOwnerFormData,
}: SalonOwnerConfirmProps) => {
  return (
    <>
      <Flex
        direction='column'
        align='flex-start'
      >
        <Flex direction='column' align='flex-start'  margin='75px 0 0 0'>
          <Text typo='Heading2' margin='55px 0 0 0'>입력하신 정보를</Text>
          <Text typo='Heading2' margin='0 0 28px 0'>확인해주세요</Text>
          <Text typo='Label2' colorCode={theme.palette.Gray500} margin='0 0 27px 0'>등록된 정보는 변경이 불가능해요. 신중히 작성해주세요!</Text>
        </Flex>

        <Flex
          direction='column'
          gap={28}
        >
          <Flex justify='flex-start' gap={36}>
            <Text typo='Label1'>성함<AlertStar isUpper /></Text>
            <Text typo='Label2'>{salonOwnerFormData.name}</Text>
          </Flex>

          <Flex justify='flex-start' gap={36}>
            <Text typo='Label1'>성별<AlertStar isUpper /></Text>
            <Text typo='Label2'>{salonOwnerFormData.gender}</Text>
          </Flex>

          <Flex justify='flex-start' gap={36}>
            <Text typo='Label1'>나이<AlertStar isUpper /></Text>
            <Text typo='Label2'>{salonOwnerFormData.age}세</Text>
          </Flex>

          <Flex justify='flex-start' gap={36}>
            <Text typo='Label1'>경력<AlertStar isUpper /></Text>
            <Text typo='Label2'>{salonOwnerFormData.experienceYears}년 {salonOwnerFormData.experienceMonths}개월</Text>
          </Flex>

          <Flex justify='flex-start' gap={36}>
            <Text typo='Label1'>자격<AlertStar isUpper /></Text>
            <Text typo='Label2'>{salonOwnerFormData.license}</Text>
          </Flex>
        </Flex>

        <Flex direction='column' width={335} gap={14} margin='54px 0 0 0'>
          <Text
            style={{fontSize: '14px', fontWeight: '500'}}
            colorCode={theme.palette.Gray300}
          >
            문제가 발생한다면&nbsp;
            <Text style={{fontSize: '14px', fontWeight: '600', textDecorationLine: 'underline'}}>문의하기</Text>
            &nbsp;버튼을 눌러주세요.
          </Text>
          <Button bg={theme.palette.Black} fontColor={theme.palette.White}>
            <Text>완료</Text>
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default SalonOwnerConfirm;
