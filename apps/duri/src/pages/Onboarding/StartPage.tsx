import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Instruction from '@duri/components/onboarding/Instructions';
import Welcome from '@duri/components/onboarding/Welcome';
import { Flex, MobileLayout } from '@duri-fe/ui';
import styled from '@emotion/styled';

const StartPage = () => {
  const navigate = useNavigate();

  const [showSplash, setShowSplash] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClickButton = () => navigate('/onboarding/detail');
  
  return (
    <MobileLayout>
      <Welcome userName='김찬별' show={showSplash} />
      <PageContainer padding="72px 20px" direction="column" justify="start">
        <Instruction onNext={handleClickButton} show={!showSplash} />
      </PageContainer>
    </MobileLayout>
  );
};

const PageContainer = styled(Flex)`
  flex-grow: 1;
  position: relative;
`;

export default StartPage;
