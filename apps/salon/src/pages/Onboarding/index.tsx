import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Flex, MobileLayout, StatusBar } from '@duri-fe/ui';
import {
  GroomerOnboardingInfoType,
  ShopOnboardingInfoType,
  usePostShopInfo,
} from '@duri-fe/utils';
import styled from '@emotion/styled';
import InputSalon from '@salon/components/onboarding/InputSalon';
import InputSalonOwner from '@salon/components/onboarding/InputSalonOwner';
import SalonConfirm from '@salon/components/onboarding/SalonConfirm';
import SalonOwnerConfirm from '@salon/components/onboarding/SalonOwnerConfirm';

const OnboardingPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(1);

  const [salonFormData, setSalonFormData] = useState<ShopOnboardingInfoType>({
    name: '',
    address: '',
    lat: 0,
    lon: 0,
    phone: '',
    businessRegistrationNumber: '',
    groomerLicenseNumber: '',
  });

  const [salonOwnerFormData, setSalonOnwerFormData] =
    useState<GroomerOnboardingInfoType>({
      name: '',
      gender: '',
      age: 0,
      history: 0,
      license: [],
    });

  const { mutateAsync, isSuccess, error } = usePostShopInfo();

  useEffect(() => {
    console.log(salonFormData);
    console.log(salonOwnerFormData);
  }, [salonFormData, salonOwnerFormData]);

  // TODO: 프로필 이미지
  const [profileImage, setProfileImage] = useState<File | null>(null);

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const handlePostSalon = async () => {
    const formData = new FormData();
    const onboardingFormData = {
      shopOnboardingInfo: salonFormData,
      groomerOnboardingInfo: salonOwnerFormData,
    };

    formData.append(
      'shopOnboardingRequest',
      new Blob([JSON.stringify(onboardingFormData)], {
        type: 'application/json',
      }),
    );

    if (profileImage) {
      formData.append('image', profileImage);
    }

    await mutateAsync(formData);

    if (isSuccess) {
      navigate('/onboarding/pending');
    } else {
      alert(error?.message);
    }
  };

  return (
    <MobileLayout>
      <PageContainer padding="72px 20px" direction="column" justify="start">
        <StatusBar current={step} total={4} mode="onboarding" />
        {step === 1 && (
          <InputSalon
            salonFormData={salonFormData}
            setSalonFormData={setSalonFormData}
            onNext={nextStep}
          />
        )}
        {step === 2 && (
          <InputSalonOwner
            salonOwnerFormData={salonOwnerFormData}
            setSalonOwnerFormData={setSalonOnwerFormData}
            setProfileImage={setProfileImage}
            onNext={nextStep}
          />
        )}
        {step === 3 && (
          <SalonConfirm salonFormData={salonFormData} onNext={nextStep} />
        )}
        {step === 4 && (
          <SalonOwnerConfirm
            salonOwnerFormData={salonOwnerFormData}
            onNext={handlePostSalon}
          />
        )}
      </PageContainer>
    </MobileLayout>
  );
};

const PageContainer = styled(Flex)`
  position: relative;
`;

export default OnboardingPage;
