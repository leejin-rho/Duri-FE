import React from 'react';

import { Button, MobileLayout, StatusBar, Text, theme } from '@duri-fe/ui';
import { SalonFormData } from '@salon/pages/Onboarding';

interface SalonConfirmProps {
  salonFormData: SalonFormData;
  onNext: () => void;
}

const SalonConfirm: React.FC<SalonConfirmProps> = ({ salonFormData, onNext }) => {
  return (
    <MobileLayout>
      <StatusBar current={3} total={4} mode='onboarding'/>
      <Text>입력하신 정보를 확인해주세요</Text>
      <Text>매장 이름: {salonFormData.name}</Text>
      <Text>매장 위치: {salonFormData.address}</Text>
      <Text>사업자 등록번호: {salonFormData.registrationNumber}</Text>
      <Text>미용사 면허번호: {salonFormData.licenseNumber}</Text>
      {/* 매장 위치 네이버 지도로부터 가져오기 */}
      <Button bg={theme.palette.Black} fontColor={theme.palette.White} onClick={onNext} >
        <Text>다음</Text>
      </Button>
    </MobileLayout>
  );
};

export default SalonConfirm;
