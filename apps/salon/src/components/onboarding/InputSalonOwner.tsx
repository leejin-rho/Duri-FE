import React, { useState } from 'react';

import { MobileLayout, StatusBar, Text } from '@duri-fe/ui';
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
      <Text>원장님의 정보를 입력해주세요</Text>
      <Text>등록된 정보는 변경이 불가능해요. 신중히 작성해주세요!</Text>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="profile"><Text>사진</Text></label>
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
          <label htmlFor="name"><Text>성함</Text></label>
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
          <label htmlFor="age"><Text>나이</Text></label>
          <input
            type="text"
            id="age"
            name="age"
            value={salonOwnerFormState.age}
            onChange={handleChange}
            placeholder="나이 입력"
            required
          />
          <Text>세</Text>
        </div>
        <div>
          <label htmlFor='gender'><Text>성별</Text></label>
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
          <label htmlFor="experienceYears"><Text>경력</Text></label>
          <input
            type="number"
            id="experienceYears"
            name="experienceYears"
            value={salonOwnerFormState.experienceYears}
            onChange={handleChange}
            placeholder="경력 입력"
            required
          />
          <Text>년</Text>
          <input
            type="number"
            id="experienceMonths"
            name="experienceMonths"
            value={salonOwnerFormState.experienceMonths}
            onChange={handleChange}
            placeholder="경력 입력"
            required
          />
          <Text>개월</Text>
        </div>
        <div>
          <label htmlFor="license"><Text>자격</Text></label>
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
          </select>
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

export default InputSalonOwner;
