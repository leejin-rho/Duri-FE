import React from 'react';

import { Button, MobileLayout, StatusBar, theme } from '@duri-fe/ui';
import { SalonFormData } from '@salon/pages/Onboarding';

interface SalonConfirmProps {
  salonFormData: SalonFormData;
  onNext: () => void;
}

const SalonConfirm: React.FC<SalonConfirmProps> = ({ salonFormData, onNext }) => {
  return (
    <MobileLayout>
      <StatusBar current={3} total={4} mode='onboarding'/>
      <h2>입력하신 정보를 확인해주세요</h2>
      <p>매장 이름: {salonFormData.name}</p>
      <p>매장 위치: {salonFormData.address}</p>
      <p>사업자 등록번호: {salonFormData.registrationNumber}</p>
      <p>미용사 면허번호: {salonFormData.licenseNumber}</p>
      <img src=''></img>
      <Button bg={theme.palette.Black} fontColor={theme.palette.White} onClick={onNext} >
        다음
      </Button>
    </MobileLayout>
  );
};

export default SalonConfirm;
