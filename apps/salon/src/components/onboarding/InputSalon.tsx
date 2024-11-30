import React, { useState } from 'react';

import { Button, MobileLayout, StatusBar, Text, TextField, theme } from '@duri-fe/ui';
import { SalonFormData } from '@salon/pages/Onboarding';

interface InputSalonProps {
  onNext: (data: SalonFormData) => void;
}

const InputSalon: React.FC<InputSalonProps> = ({ onNext }) => {
  const [salonFormState, setSalonFormState] = useState<SalonFormData>({
    name: '',
    address: '',
    registrationNumber: '',
    licenseNumber: '',
  });

  const handleChange = (field: keyof SalonFormData, value: string) => {
    setSalonFormState({ ...salonFormState, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(salonFormState);
  };

  return (
    <MobileLayout>
      <StatusBar current={1} total={4} mode='onboarding'/>
      <Text>미용샵의 정보를 입력해주세요</Text>
      <Text>등록된 정보는 변경이 불가능해요. 신중히 작성해주세요!</Text>
      <form onSubmit={handleSubmit}>
        <TextField
          label="매장 이름"
          placeholder="매장이름 입력"
          value={salonFormState.name}
          onChange={(e) => handleChange('name', e.target.value)}
          isEssential
        />

        <TextField
          label="매장 위치"
          placeholder="우편번호 입력"
          value={salonFormState.address}
          onChange={(e) => handleChange('address', e.target.value)}
          isEssential
        />
        <Button width='106px' height='37px' borderRadius='8px' bg={theme.palette.Black} fontColor={theme.palette.White}>
          <Text>우편번호 검색</Text>
        </Button>
        <TextField
          placeholder="상세주소 입력"
          value={salonFormState.address}
          onChange={(e) => handleChange('address', e.target.value)}
        />

        <TextField
          label="사업자 등록번호"
          placeholder="사업자 등록번호 입력"
          value={salonFormState.registrationNumber}
          onChange={(e) => handleChange('registrationNumber', e.target.value)}
          isEssential
        />

        <TextField
          label="미용사 면허번호"
          placeholder="미용사 면허번호 입력"
          value={salonFormState.licenseNumber}
          onChange={(e) => handleChange('licenseNumber', e.target.value)}
          isEssential
        />

        {/* 문의하기 눌렀을 때에 대한 처리 필요 */}
        <Text>
          문제가 발생한다면 <a href="/#"><Text>문의하기</Text></a> 버튼을 눌러주세요.
        </Text>
        <button type="submit"><Text>다음 단계</Text></button>
      </form>
    </MobileLayout>
  );
};

export default InputSalon;
