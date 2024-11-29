import React from 'react';

import { Button, MobileLayout, StatusBar, theme } from '@duri-fe/ui';
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
      <h2>입력하신 정보를 확인해주세요</h2>
      <p>등록된 정보는 변경이 불가능해요. 신중히 작성해주세요!</p>
      <div>
        <div>
          <strong>성함:</strong> {salonOwnerFormData.name}
        </div>
        <div>
          <strong>성별:</strong> {salonOwnerFormData.gender === 'male' ? '남성' : '여성'}
        </div>
        <div>
          <strong>나이:</strong> {salonOwnerFormData.age}세
        </div>
        <div>
          <strong>경력:</strong> {salonOwnerFormData.experienceYears}년 {salonOwnerFormData.experienceMonths}개월
        </div>
        <div>
          <strong>자격:</strong> {salonOwnerFormData.license}
        </div>
      </div>
      <p>
        문제가 발생한다면 <a href="/#">문의하기</a> 버튼을 눌러주세요.
      </p>
      <Button bg={theme.palette.Black} fontColor={theme.palette.White}>완료</Button>
    </MobileLayout>
  );
};

export default SalonOwnerConfirm;
