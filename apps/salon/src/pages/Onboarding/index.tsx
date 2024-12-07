import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Flex, MobileLayout, StatusBar } from '@duri-fe/ui';
import styled from '@emotion/styled';
import { SalonFormData, SalonOwnerFormData } from '@salon/assets/types/onboarding';
import InputSalong from '@salon/components/onboarding/InputSalon';
import InputSalonOwner from '@salon/components/onboarding/InputSalonOwner';
import SalonConfirm from '@salon/components/onboarding/SalonConfirm';
import SalonOwnerConfirm from '@salon/components/onboarding/SalonOwnerConfirm';

const OnboardingPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(1);
  const [salonFormData, setSalonFormData] = useState<SalonFormData>({
    name: '',
    address: '',
    addressDetail: '',
    registrationNumber: '',
    licenseNumber: '',
  });
  const [salonOwnerFormData, setSalonOnwerFormData] =
    useState<SalonOwnerFormData>({
      profile: '',
      name: '',
      age: '',
      gender: '',
      experienceYears: '',
      experienceMonths: '',
      license: [],
    });

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const handleNextSalon = (data: SalonFormData) => {
    setSalonFormData(data);
    nextStep();
  };

  const handleNextSalonOwner = (data: SalonOwnerFormData) => {
    setSalonOnwerFormData(data);
    nextStep();
  };

  const handlePostSalon = () => {
    console.log(salonFormData);
    console.log(salonOwnerFormData);
    // TODO : 데이터 post하기
    navigate('/');
  }

  return (
    <MobileLayout>
      <PageContainer padding="72px 20px" direction="column" justify="start">
        <StatusBar current={step} total={4} mode="onboarding" />

        {step === 1 && <InputSalong onNext={handleNextSalon} />}
        {step === 2 && <InputSalonOwner onNext={handleNextSalonOwner} />}
        {step === 3 && <SalonConfirm salonFormData={salonFormData} onNext={nextStep} />}
        {step === 4 && <SalonOwnerConfirm salonOwnerFormData={salonOwnerFormData} onNext={handlePostSalon} />}
      </PageContainer>
    </MobileLayout>
  );
};

const PageContainer = styled(Flex)`
  flex-grow: 1;
  position: relative;
`;

export default OnboardingPage;
