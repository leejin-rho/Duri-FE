import React, { useState } from 'react';

import { MobileLayout, StatusBar, Text, TextField } from '@duri-fe/ui';
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
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleChange = (field: keyof SalonOwnerFormData, value: string) => {
    setSalonOwnerFormState({ ...salonOwnerFormState, [field]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // 선택된 첫 번째 파일
    if (file) {
      setSalonOwnerFormState({ ...salonOwnerFormState, profile: file.name }); // 파일 이름 저장
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string); // 미리보기 이미지 설정
      };
      reader.readAsDataURL(file);
    }
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
        <TextField
          label="사진"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          isEssential
        />
        {previewImage && (
          <div style={{ marginTop: '10px' }}>
            <img
              src={previewImage}
              alt="선택된 파일 미리보기"
              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
            />
          </div>
        )}

        <TextField 
          label='성함'
          placeholder='이름 입력'
          value={salonOwnerFormState.name}
          onChange={(e) => handleChange('name', e.target.value)}
          isEssential
        />

        <TextField 
          label='나이'
          placeholder='나이 입력'
          value={salonOwnerFormState.age}
          onChange={(e) => handleChange('age', e.target.value)}
          isEssential
        />
        <Text>세</Text>

        <TextField
          label="성별"
          placeholder="성별 입력"
          value={salonOwnerFormState.gender}
          onChange={(e) => handleChange('gender', e.target.value)}
        />

        <TextField
          label="경력 (년)"
          placeholder="경력 입력"
          value={salonOwnerFormState.experienceYears}
          onChange={(e) => handleChange('experienceYears', e.target.value)}
        />
        <Text>년</Text>
        <TextField
          label="경력 (개월)"
          placeholder="경력 입력"
          value={salonOwnerFormState.experienceMonths}
          onChange={(e) => handleChange('experienceMonths', e.target.value)}
        />
        <Text>개월</Text>

        <div>
          <label htmlFor="license"><Text>자격</Text></label>
          <select
            id="license"
            name="license"
            value={salonOwnerFormState.license}
            // onChange={handleChange}
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

// 지금 매장 주소에 디테일 필드도 추가해야함
// 원장 정보 입력할 때 사진, 드롭다운 수정
// 폼 제출할 때 버튼 공용 컴포넌트 생성
// 성별에 공용 컴포넌트 적용
// Text들 h1 같은거 설정
// 