import React from 'react';

import { MobileLayout } from '@duri-fe/ui';

interface FormData {
  name: string;
  address: string;
  registrationNumber: string;
  licenseNumber: string;
}

interface FormConfirmProps {
  formData: FormData;
}

const FormConfirm: React.FC<FormConfirmProps> = ({ formData }) => {
  return (
    <MobileLayout>
      <h2>입력하신 정보를 확인해주세요</h2>
      <p>매장 이름: {formData.name}</p>
      <p>매장 위치: {formData.address}</p>
      <p>사업자 등록번호: {formData.registrationNumber}</p>
      <p>미용사 면허번호: {formData.licenseNumber}</p>
      <button onClick={() => alert('완료되었습니다!')}>완료</button>
    </MobileLayout>
  );
};

export default FormConfirm;
