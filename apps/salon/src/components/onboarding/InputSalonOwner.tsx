import React, { useEffect, useState } from 'react';

import { AlertStar, Button, Dropdown, Flex, HeightFitFlex, Text, TextField, theme } from '@duri-fe/ui';
import styled from '@emotion/styled';
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
  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  useEffect(() => {
    const isFilled = Object.values(salonOwnerFormState).every((value) => value !== '');
    setIsEmpty(!isFilled);
  }, [salonOwnerFormState])

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

  const handleSubmit = () => {
    onNext(salonOwnerFormState);
  };

  return (
    <>
      <Flex
        direction='column'
        align='flex-start'
        padding='48px 0'
      >
        <Flex direction='column' align='flex-start' gap={24} padding='0 0 24px 0'>
          <Flex direction='column' align='flex-start'>
            <Text typo='Heading2'>원장님의</Text>
            <Text typo='Heading2'>정보를 입력해주세요</Text>
          </Flex>
          <Text typo='Label2' colorCode={theme.palette.Gray500}>등록된 정보는 변경이 불가능해요. 신중히 작성해주세요!</Text>
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
            
          </Flex>
        </form>
        {/* 문의하기 눌렀을 때에 대한 처리 필요 */}
        <Flex padding="24px 0 0 0" gap={4}>
          <Text typo='Label2' colorCode={theme.palette.Gray300}>문제가 발생한다면</Text>
          <UnderlinedText typo='Label2' colorCode={theme.palette.Gray300}>문의하기</UnderlinedText>
          <Text typo='Label2' colorCode={theme.palette.Gray300}>버튼을 눌러주세요.</Text>
        </Flex>
      </Flex>

      <ButtonWrapper padding='0 20px'>
        {isEmpty ? (
          <Button bg={theme.palette.Gray50} disabled>
            다음 단계
          </Button>
        ) : (
          <Button onClick={handleSubmit} bg={theme.palette.Black} fontColor={theme.palette.White}>
            다음 단계
          </Button>
        )}

      </ButtonWrapper>
    </>
  );
};

const UnderlinedText = styled(Text)`
  font-weight: 600;
  text-decoration: underline;
`

const ButtonWrapper = styled(HeightFitFlex)`
  position: absolute;
  bottom: 40px;
`;

export default InputSalonOwner;

// 원장 정보 입력할 때 사진
// 성별에 공용 컴포넌트 적용
