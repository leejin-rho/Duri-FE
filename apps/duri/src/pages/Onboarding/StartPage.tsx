import { useNavigate } from 'react-router-dom';

import { Button, Flex, MobileLayout, Text } from '@duri-fe/ui';
import styled from '@emotion/styled';

const StartPage = () => {
  const navigate = useNavigate();
  const handleClickButton = () => navigate('/onboarding/detail');
  return (
    <MobileLayout>
      <Container
        direction="column"
        justify="center"
        align="center"
        padding="107px 20px 0 20px"
      >
        <Wrapper direction="column">
          <Text typo="Heading2" align="center">
            두리묭실 서비스를 이용하기 위해
          </Text>
          <Text typo="Heading2" align="center">
            반려견의 정보를 입력해주세요!
          </Text>
        </Wrapper>
        <Button width="335px" height="54px" onClick={handleClickButton}>
          입력하러 가기
        </Button>
      </Container>
    </MobileLayout>
  );
};

export const Container = styled(Flex)`
  height: 90vh;
`;
export const Wrapper = styled(Flex)`
  flex-grow: 1;
`;
export default StartPage;
