import React, { useState } from 'react';

import { MobileLayout } from '@duri-fe/ui';

interface FormData {
  name: string;
  address: string;
  registrationNumber: string;
  licenseNumber: string;
}

interface FormInputProps {
  onNext: (data: FormData) => void;
}

const FormInput: React.FC<FormInputProps> = ({ onNext }) => {
  const [formState, setFormState] = useState<FormData>({
    name: '',
    address: '',
    registrationNumber: '',
    licenseNumber: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formState);
  };

  return (
    <MobileLayout>
      <h2>미용샵의 정보를 입력해주세요</h2>
      <p>등록된 정보는 변경이 불가능해요. 신중히 작성해주세요!</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">매장 이름</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="매장이름 입력"
            required
          />
        </div>

        <div>
          <label htmlFor="address">매장 위치</label>
          <div style={{ display: 'flex', gap: '8px' }}>
            <input
              type="text"
              id="address"
              name="address"
              value={formState.address}
              onChange={handleChange}
              placeholder="우편번호 입력"
              required
            />
            <button type="button">우편번호 검색</button>
          </div>
          <input
            type="text"
            name="detailedAddress"
            placeholder="상세주소"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="registrationNumber">사업자 등록번호</label>
          <input
            type="text"
            id="registrationNumber"
            name="registrationNumber"
            value={formState.registrationNumber}
            onChange={handleChange}
            placeholder="사업자 등록번호 입력"
            required
          />
        </div>

        <div>
          <label htmlFor="licenseNumber">미용사 면허번호</label>
          <input
            type="text"
            id="licenseNumber"
            name="licenseNumber"
            value={formState.licenseNumber}
            onChange={handleChange}
            placeholder="미용사 면허번호 입력"
            required
          />
        </div>

        {/* 문의하기 눌렀을 때에 대한 처리 */}
        <p>
          문제가 발생한다면 <a href="/#">문의하기</a> 버튼을 눌러주세요.
        </p>
        <button type="submit">다음 단계</button>
      </form>
    </MobileLayout>
  );
};

export default FormInput;
