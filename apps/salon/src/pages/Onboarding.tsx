import React, { useState } from 'react';

import FormConfirm from '@salon/components/onboarding/FormConfirm';
import FormInput from '@salon/components/onboarding/FormInput';
import Instruction from '@salon/components/onboarding/Instructions';
import Welcome from '@salon/components/onboarding/Welcome';

interface FormData {
  name: string;
  address: string;
  registrationNumber: string;
  licenseNumber: string;
}

const OnboardingPage: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    address: '',
    registrationNumber: '',
    licenseNumber: '',
  });

  const handleNext = (data?: Partial<FormData>) => {
    if (data) {
      setFormData({ ...formData, ...data });
    }
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <div>
      {step === 1 && <Welcome onNext={handleNext} />}
      {step === 2 && <Instruction onNext={handleNext} />}
      {step === 3 && <FormInput onNext={handleNext} />}
      {step === 4 && <FormConfirm formData={formData} />}
    </div>
  );
};

export default OnboardingPage;
