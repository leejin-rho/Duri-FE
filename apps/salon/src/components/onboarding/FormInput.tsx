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
      <form onSubmit={handleSubmit}>
        <label>
          매장 이름:
          <input
            type="text"
            name="name"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          매장 위치:
          <input
            type="text"
            name="address"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          사업자 등록번호:
          <input
            type="text"
            name="registrationNumber"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          미용사 면허번호:
          <input
            type="text"
            name="licenseNumber"
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">다음</button>
      </form>
    </MobileLayout>
  );
};

export default FormInput;
