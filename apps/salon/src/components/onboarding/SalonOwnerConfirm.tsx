import React from 'react';

import { AlertStar, Button, Flex, MobileLayout, StatusBar, Text, theme } from '@duri-fe/ui';
import { SalonOwnerFormData } from '@salon/pages/Onboarding';

interface SalonOwnerConfirmProps {
  salonOwnerFormData: SalonOwnerFormData;
}

const SalonOwnerConfirm: React.FC<SalonOwnerConfirmProps> = ({
  salonOwnerFormData,
}) => {
  return (
    <MobileLayout>
      <StatusBar current={4} total={4} mode="onboarding" />
      <Text>입력하신 정보를 확인해주세요</Text>
      <Text>등록된 정보는 변경이 불가능해요. 신중히 작성해주세요!</Text>
      <Flex
        direction='column'
        gap={28}
      >
        <Flex justify='flex-start'>
          <Text>성함<AlertStar isUpper /></Text>
          <Text>{salonOwnerFormData.name}</Text>
        </Flex>
        <Flex justify='flex-start'>
          <Text>성별<AlertStar isUpper /></Text>
          <Text>{salonOwnerFormData.gender}</Text>
        </Flex>
        <Flex justify='flex-start'>
          <Text>나이<AlertStar isUpper /></Text>
          <Text>{salonOwnerFormData.age}세</Text>
        </Flex>
        <Flex justify='flex-start'>
          <Text>경력<AlertStar isUpper /></Text>
          <Text>{salonOwnerFormData.experienceYears}년 {salonOwnerFormData.experienceMonths}개월</Text>
        </Flex>
        <Flex justify='flex-start'>
          <Text>자격<AlertStar isUpper /></Text>
          <Text>{salonOwnerFormData.license}</Text>
        </Flex>
      </Flex>
      <Text>
        문제가 발생한다면 <a href="/#"><Text>문의하기</Text></a> 버튼을 눌러주세요.
      </Text>
      <Button bg={theme.palette.Black} fontColor={theme.palette.White}><Text>완료</Text></Button>
    </MobileLayout>
  );
};

export default SalonOwnerConfirm;
