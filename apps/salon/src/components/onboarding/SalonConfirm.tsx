import React from 'react';

import { AlertStar, Button, Flex, Text, theme } from '@duri-fe/ui';
import { SalonFormData } from '@salon/pages/Onboarding';

interface SalonConfirmProps {
  salonFormData: SalonFormData;
  onNext: () => void;
}

const SalonConfirm: React.FC<SalonConfirmProps> = ({ salonFormData, onNext }) => {
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

        <Flex direction='column' align='flex-start' gap={28}>
          <Flex justify='flex-start' gap={36}>
            <Text typo='Label1'>매장 이름<AlertStar isUpper /></Text>
            <Text typo='Label2'>{salonFormData.name}</Text>
          </Flex>

          <Flex justify='flex-start' gap={36}>
          <Text typo='Label1'>매장 위치<AlertStar isUpper /></Text>
          <Text typo='Label2'>{salonFormData.address}&nbsp;{salonFormData.addressDetail}</Text>
          </Flex>

          <Flex justify='flex-start' gap={36}>
          <Text typo='Label1'>사업자 등록번호<AlertStar isUpper /></Text>
          <Text typo='Label2'>{salonFormData.registrationNumber}</Text>
          </Flex>
          
          <Flex justify='flex-start' gap={36}>
          <Text typo='Label1'>미용사 면허번호<AlertStar isUpper /></Text>
          <Text typo='Label2'>{salonFormData.licenseNumber}</Text>
          </Flex>
        </Flex>

        {/* 매장 위치 네이버 지도로부터 가져오기 */}
        <div style={{width: '335px', height: '115px', backgroundColor: 'lightgray', borderRadius: '8px', margin: '62px 0 28px 0'}}></div>

        {/* 문의하기 눌렀을 때에 대한 처리 필요? */}
        <Flex direction='column' width={335} gap={14}>
          <Text
            style={{fontSize: '14px', fontWeight: '500'}}
            colorCode={theme.palette.Gray300}
          >
            문제가 발생한다면
            <Text style={{fontSize: '14px', fontWeight: '600', textDecorationLine: 'underline'}}> 문의하기 </Text>
            버튼을 눌러주세요.
          </Text>
          <Button bg={theme.palette.Black} fontColor={theme.palette.White} onClick={onNext} >
            <Text>다음</Text>
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default SalonConfirm;
