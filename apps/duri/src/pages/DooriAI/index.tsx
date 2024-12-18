import BabyCut from '@assets/images/pngs/BabyCut.png';
import BearCut from '@assets/images/pngs/BearCut.png';
import LionCut from '@assets/images/pngs/LionCut.png';
import LionDog from '@assets/images/pngs/LionDog.png';
import {
  Flex,
  HeightFitFlex,
  Image,
  MobileLayout,
  Text,
  theme,
} from '@duri-fe/ui';

import { AIHeader } from '@components/dooriAI/AIHeader';

const DooriAI = () => {
  return (
    <MobileLayout backgroundColor={theme.palette.Black}>
      <Flex direction="column" padding="40px 20px">
        <AIHeader />
        <a href="/ai/styling">
          <Image src={LionDog} alt="AI-Styling" />
        </a>

        <HeightFitFlex
          direction="column"
          align="start"
          gap={8}
          margin="33px 0 19px"
        >
          <Text colorCode={theme.palette.Normal500}>
            새로운 디자인이 나왔어요✨
          </Text>
          <Text colorCode={theme.palette.White}>New Style</Text>
        </HeightFitFlex>

        <HeightFitFlex gap={8} justify="start">
          <Image src={LionCut} width={105} alt="LionCut" />
          <Image src={BearCut} width={105} alt="BearCut" />
          <Image src={BabyCut} width={105} alt="BabyCut" />
        </HeightFitFlex>
      </Flex>
    </MobileLayout>
  );
};

export default DooriAI;
