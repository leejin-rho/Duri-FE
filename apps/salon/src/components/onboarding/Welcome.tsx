import React from 'react';

import { MobileLayout } from '@duri-fe/ui';

interface WelcomeProps {
  onNext: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onNext }) => {
  const userName = '심숭숭'; // 네이버로부터 받은 미용사 이름

  return (
    <MobileLayout>
      <h2>{userName}님 안녕하세요!</h2>
      <p>두리몽실에 오신 것을 환영합니다 👋</p>
      <button onClick={onNext}>다음</button>
    </MobileLayout>
  );
};

export default Welcome;
