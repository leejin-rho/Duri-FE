import React, { useState } from 'react';

import { MobileLayout, StatusBar, Text } from '@duri-fe/ui';
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSalonFormState({ ...salonFormState, [name]: value });
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
        <div>
          <label htmlFor="name"><Text>매장 이름</Text></label>
          <input
            type="text"
            id="name"
            name="name"
            value={salonFormState.name}
            onChange={handleChange}
            placeholder="매장이름 입력"
            required
          />
        </div>

        <div>
          <label htmlFor="address"><Text>매장 위치</Text></label>
          <div style={{ display: 'flex', gap: '8px' }}>
            <input
              type="text"
              id="address"
              name="address"
              value={salonFormState.address}
              onChange={handleChange}
              placeholder="우편번호 입력"
              required
            />
            <button type="button"><Text>우편번호 검색</Text></button>
          </div>
          <input
            type="text"
            name="detailedAddress"
            placeholder="상세주소"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="registrationNumber"><Text>사업자 등록번호</Text></label>
          <input
            type="text"
            id="registrationNumber"
            name="registrationNumber"
            value={salonFormState.registrationNumber}
            onChange={handleChange}
            placeholder="사업자 등록번호 입력"
            required
          />
        </div>

        <div>
          <label htmlFor="licenseNumber"><Text>미용사 면허번호</Text></label>
          <input
            type="text"
            id="licenseNumber"
            name="licenseNumber"
            value={salonFormState.licenseNumber}
            onChange={handleChange}
            placeholder="미용사 면허번호 입력"
            required
          />
        </div>

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
