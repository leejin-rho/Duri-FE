import React, { useState } from 'react';

import { Button, Flex, MobileLayout, StatusBar, Text, TextField, theme } from '@duri-fe/ui';
import { SalonFormData } from '@salon/pages/Onboarding';

interface InputSalonProps {
  onNext: (data: SalonFormData) => void;
}

const InputSalon: React.FC<InputSalonProps> = ({ onNext }) => {
  const [salonFormState, setSalonFormState] = useState<SalonFormData>({
    name: '',
    address: '',
    addressDetail: '',
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
      <Flex
        direction='column'
        align='flex-start'
        padding='0 20px 44px 20px'
      >
        <Flex direction='column' align='flex-start'  margin='75px 0 0 0'>
          <StatusBar current={1} total={4} mode='onboarding'/>
          <Text typo='Heading2' margin='55px 0 0 0'>미용샵의</Text>
          <Text typo='Heading2' margin='0 0 28px 0'>정보를 입력해주세요</Text>
          <Text typo='Label2' colorCode={theme.palette.Gray500} margin='0 0 27px 0'>등록된 정보는 변경이 불가능해요. 신중히 작성해주세요!</Text>
        </Flex>

        <form onSubmit={handleSubmit}>
          <Flex
            direction='column'
            align='flex-start'
            gap={21}
          >
            <TextField
              label="매장 이름"
              placeholder="매장이름 입력"
              value={salonFormState.name}
              onChange={(e) => handleChange('name', e.target.value)}
              isEssential
              width={244}
            />

            <Flex direction='column' align='flex-start' gap={5}>
              <Flex justify='flex-start' align='flex-end' gap={8}>
                <TextField
                  label="매장 위치"
                  placeholder="우편번호 입력"
                  value={salonFormState.address}
                  onChange={(e) => handleChange('address', e.target.value)}
                  isEssential
                  width={130}
                />
                <Button style={{padding: '0'}} width='106px' height='37px' borderRadius='8px' bg={theme.palette.Black} fontColor={theme.palette.White}>
                  <Text typo='Body3'>우편번호 검색</Text>
                </Button>
              </Flex>
              <TextField
                placeholder="상세주소 입력"
                value={salonFormState.addressDetail}
                onChange={(e) => handleChange('addressDetail', e.target.value)}
                width={244}
              />
            </Flex>

            <TextField
              label="사업자 등록번호"
              placeholder="사업자 등록번호 입력"
              value={salonFormState.registrationNumber}
              onChange={(e) => handleChange('registrationNumber', e.target.value)}
              isEssential
              width={175}
              />

            <TextField
              label="미용사 면허번호"
              placeholder="미용사 면허번호 입력"
              value={salonFormState.licenseNumber}
              onChange={(e) => handleChange('licenseNumber', e.target.value)}
              isEssential
              width={175}
            />

            {/* 문의하기 눌렀을 때에 대한 처리 필요? */}
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

export default InputSalon;
