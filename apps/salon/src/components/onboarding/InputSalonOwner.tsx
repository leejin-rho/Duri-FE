import React, { useState } from 'react';

import { MobileLayout, StatusBar } from '@duri-fe/ui';
import { SalonOwnerFormData } from '@salon/pages/Onboarding';

interface InputSalonOwnerProps {
  onNext: (data: SalonOwnerFormData) => void;
}

const InputSalonOwner: React.FC<InputSalonOwnerProps> = ({ onNext }) => {
  const [salonOwnerFormState, setSalonOwnerFormState] = useState<SalonOwnerFormData>({
    profile: '',
    name: '',
    age: '',
    gender: '',
    experienceYears: '',
    experienceMonths: '',
    license: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSalonOwnerFormState({ ...salonOwnerFormState, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(salonOwnerFormState);
  };

  return (
    <MobileLayout>
      <StatusBar current={2} total={4} mode="onboarding" />
      <h2>원장님의 정보를 입력해주세요</h2>
      <p>등록된 정보는 변경이 불가능해요. 신중히 작성해주세요!</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="profile">사진</label>
          <input
            type="file"
            id="profile"
            name="profile"
            accept="image/*"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="name">성함</label>
          <input
            type="text"
            id="name"
            name="name"
            value={salonOwnerFormState.name}
            onChange={handleChange}
            placeholder="이름 입력"
            required
          />
        </div>
        <div>
          <label htmlFor="age">나이</label>
          <input
            type="text"
            id="age"
            name="age"
            value={salonOwnerFormState.age}
            onChange={handleChange}
            placeholder="나이 입력"
            required
          />
          <span>세</span>
        </div>
        <div>
          <label htmlFor='gender'>성별</label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={salonOwnerFormState.gender}
            onChange={handleChange}
            placeholder="성별 입력"
            required
          />
        </div>
        <div>
          <label htmlFor="experienceYears">경력</label>
          <input
            type="number"
            id="experienceYears"
            name="experienceYears"
            value={salonOwnerFormState.experienceYears}
            onChange={handleChange}
            placeholder="경력 입력"
            required
          />
          <span>년</span>
          <input
            type="number"
            id="experienceMonths"
            name="experienceMonths"
            value={salonOwnerFormState.experienceMonths}
            onChange={handleChange}
            placeholder="경력 입력"
            required
          />
          <span>개월</span>
        </div>
        <div>
          <label htmlFor="license">자격</label>
          <select
            id="license"
            name="license"
            value={salonOwnerFormState.license}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              자격 선택
            </option>
            <option value="level1">Level 1</option>
            <option value="level2">Level 2</option>
            <option value="level3">Level 3</option>
          </select>
        </div>
        <p>
          문제가 발생한다면 <a href="/#">문의하기</a> 버튼을 눌러주세요.
        </p>
        <button type="submit">다음 단계</button>
      </form>
    </MobileLayout>
  );
};

export default InputSalonOwner;
