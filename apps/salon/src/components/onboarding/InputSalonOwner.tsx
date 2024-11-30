import React, { useState } from 'react';

import { AlertStar, Dropdown, Flex, MobileLayout, StatusBar, Text, TextField, theme } from '@duri-fe/ui';
import { SalonOwnerFormData } from '@salon/pages/Onboarding';

interface InputSalonOwnerProps {
  onNext: (data: SalonOwnerFormData) => void;
}

const certificateOptions = [
  '반려견 스타일리스트',
  '펫뷰티션',
  '펫테이너',
  '반려동물 행동지도사',
  '반려동물 관리자',
  '피어프리 인증',
];

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
    const file = e.target.files?.[0];
    if (file) {
      handleChange('profile', file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
      handleChange('profile', '');
    }
  };

  const handleSelectLicense = (selectedLicense: string) => {
    setSalonOwnerFormState({ ...salonOwnerFormState, license: selectedLicense });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(salonOwnerFormState);
  };

  return (
    <MobileLayout>
      <Flex
        direction='column'
        align='flex-start'
        padding='0 20px 44px 20px'
      >
        <Flex direction='column' align='flex-start'  margin='75px 0 0 0'>
          <StatusBar current={2} total={4} mode="onboarding" />
          <Text typo='Heading2' margin='55px 0 0 0'>원장님의</Text>
          <Text typo='Heading2' margin='0 0 28px 0'>정보를 입력해주세요</Text>
          <Text typo='Label2' colorCode={theme.palette.Gray500} margin='0 0 27px 0'>등록된 정보는 변경이 불가능해요. 신중히 작성해주세요!</Text>
        </Flex>

        <form onSubmit={handleSubmit}>
          <Flex
            direction='column'
            align='flex-start'
            gap={21}
          >
            <Flex justify=''>
              <Flex justify="flex-start" align='flex-start'>
                <label htmlFor="profile"><Text typo='Label1'>사진<AlertStar isUpper/></Text></label>
                <div
                  style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    backgroundColor: '#f5f5f5',
                    border: '1px solid #ddd',
                    cursor: 'pointer',
                  }}
                >
                  {previewImage ? (
                    <img
                      src={previewImage}
                      alt="선택된 파일 미리보기"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  ) : (
                    <img src=""/>
                  )}
                </div>
                <input
                  id="profile"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
              </Flex>

              <TextField 
                label='성함'
                placeholder='이름 입력'
                value={salonOwnerFormState.name}
                onChange={(e) => handleChange('name', e.target.value)}
                isEssential
                width={130}
                height={40}
              />
            </Flex>

            <TextField 
              label='나이'
              placeholder='나이 입력'
              value={salonOwnerFormState.age}
              onChange={(e) => handleChange('age', e.target.value)}
              isEssential
              width={83}
              height={40}
            />
            <Text>세</Text>

            <div>
              성별
            </div>

            <TextField
              placeholder="경력 입력"
              value={salonOwnerFormState.experienceYears}
              onChange={(e) => handleChange('experienceYears', e.target.value)}
              width={83}
              height={40}
            />
            <Text>년</Text>
            <TextField
              placeholder="경력 입력"
              value={salonOwnerFormState.experienceMonths}
              onChange={(e) => handleChange('experienceMonths', e.target.value)}
              width={83}
              height={40}
            />
            <Text>개월</Text>

            <div>
              <label htmlFor='license'>자격</label>
              <Dropdown
                options={certificateOptions}
                defaultValue="자격 선택"
                onSelect={handleSelectLicense}
                width={235}
              />
            </div>

            {/* 문의하기 눌렀을 때에 대한 처리 필요 */}
            <Flex direction='column' width={335} gap={14}>
                <Text
                  style={{fontSize: '14px', fontWeight: '500'}}
                  colorCode={theme.palette.Gray300}
                >
                  문제가 발생한다면
                  <Text style={{fontSize: '14px', fontWeight: '600', textDecorationLine: 'underline'}}> 문의하기 </Text>
                  버튼을 눌러주세요.
                </Text>
                <button
                  type="submit"
                  style={{width: '335px', height: '54px', borderRadius: '99px', backgroundColor: 'black', color: 'white', fontSize: '16px', fontWeight: '600'}}
                >
                  <Text>다음 단계</Text>
                </button>
            </Flex>
          </Flex>
        </form>
      </Flex>
    </MobileLayout>
  );
};

export default InputSalonOwner;

// 원장 정보 입력할 때 사진
// 성별에 공용 컴포넌트 적용
