import { useLocation } from 'react-router-dom';

import { AIHeader } from '@duri/components/dooriAI/AIHeader';
import {
  Flex,
  FrontBtn,
  Image,
  MobileLayout,
  Save,
  Text,
  theme,
} from '@duri-fe/ui';
import styled from '@emotion/styled';

const DooriAIResult = () => {
  const location = useLocation();
  const { resultImage } = location.state;
  const handleImageSave = () => {
    const link = document.createElement('a');
    link.href = resultImage;
    link.download = 'duri-ai-styling-result.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <MobileLayout backgroundColor={theme.palette.Black}>
      <Flex direction="column" padding="40px 20px">
        <AIHeader />
        <Image src={resultImage} borderRadius={16} alt="ai styling result" />
        <Text typo="Caption1" colorCode={theme.palette.White} margin="19px 0 0">
          사진이 마음에 든다면 저장할수 있어요🐶
        </Text>
      </Flex>
      <SaveButton height="53px" onClick={handleImageSave}>
        <Save width={19} />
        <Text typo="Body2">저장하기</Text>
      </SaveButton>
    </MobileLayout>
  );
};

export default DooriAIResult;

const SaveButton = styled(FrontBtn)`
  position: fixed;
  bottom: 0;
  height: 53px;
  border-radius: 0;
  gap: 6px;
`;
