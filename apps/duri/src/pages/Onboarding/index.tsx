// import { useEffect,useState } from 'react';

import React from 'react';

import { MobileLayout } from '@duri-fe/ui';

import MultiStepForm from '@components/onboarding';





const Onboarding = () => {
  // const user = { id: '', name: '김찬별', birth: 1998, gender: 'female' };

  return (
    <>
      <MobileLayout>
        <MultiStepForm />
      </MobileLayout>
    </>
  );
};

export default Onboarding;