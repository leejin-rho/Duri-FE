import React, { useState } from 'react';

import InputSalong from '@salon/components/onboarding/InputSalon';
import InputSalonOwner from '@salon/components/onboarding/InputSalonOwner';
import Instruction from '@salon/components/onboarding/Instructions';
import SalonConfirm from '@salon/components/onboarding/SalonConfirm';
import SalonOwnerConfirm from '@salon/components/onboarding/SalonOwnerConfirm';
import Welcome from '@salon/components/onboarding/Welcome';

export interface SalonFormData {
  name: string;
  address: string;
  addressDetail: string;
  registrationNumber: string;
  licenseNumber: string;
}

export interface SalonOwnerFormData {
  profile: string;
  name: string;
  age: string;
  gender: string;
  experienceYears: string;
  experienceMonths: string;
  license: string;
}

const OnboardingPage: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [salonFormData, setSalonFormData] = useState<SalonFormData>({
    name: '',
    address: '',
    addressDetail: '',
    registrationNumber: '',
    licenseNumber: '',
  });
  const [salonOwnerFormData, setSalonOnwerFormData] = useState<SalonOwnerFormData>({
    profile: '',
    name: '',
    age: '',
    gender: '',
    experienceYears: '',
    experienceMonths: '',
    license: '',
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

  return (
    <div>
      {step === 1 && <Welcome onNext={nextStep} />}
      {step === 2 && <Instruction onNext={nextStep} />}
      {step === 3 && <InputSalong onNext={handleNextSalon} />}
      {step === 4 && <InputSalonOwner onNext={handleNextSalonOwner} />}
      {step === 5 && <SalonConfirm salonFormData={salonFormData} onNext={nextStep}/>}
      {step === 6 && <SalonOwnerConfirm salonOwnerFormData={salonOwnerFormData} />}
    </div>
  );
};

export default OnboardingPage;
