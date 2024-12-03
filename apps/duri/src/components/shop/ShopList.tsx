import { Button, Filter, Flex, HardText, Seperator, theme } from '@duri-fe/ui';
import styled from '@emotion/styled';

import { ShopLine } from './ShopLine';

export const ShopList = () => {
  return (
    <Flex
      direction="column"
      backgroundColor={theme.palette.White}
      padding="76px 0px 92px 0px"
    >
      <Flex justify="space-between" height={65} padding="0 20px">
        <Button
          width="fit-content"
          height="32px"
          bg={theme.palette.White}
          borderRadius="99px"
          padding="10px"
          shadow={'0px 0px 4px 0px rgba(0, 0, 0, 0.25)'}
        >
          <Filter width={18} height={18} color={theme.palette.Gray600} />
          <HardText
            typo="Label3"
            margin="0 0 0 4px"
            colorCode={theme.palette.Gray600}
          >
            필터
          </HardText>
        </Button>

        <Button
          width="fit-content"
          height="32px"
          bg={theme.palette.White}
          borderRadius="99px"
          padding="10px"
          shadow={'0px 0px 4px 0px rgba(0, 0, 0, 0.25)'}
        >
          <HardText typo="Label3" colorCode={theme.palette.Gray600}>
            영업중
          </HardText>
        </Button>
      </Flex>
      <Seperator />
      <ScrollFlex
        direction="column"
        justify="flex-start"
        gap={28}
        padding="17px 20px 0 20px"
      >
        <ShopLine
          title="댕댕샵"
          score="4.9"
          reviewNum={120}
          distance={354}
          address="경기 성남시 분당구"
          phone="031)123-1234"
        />
        <ShopLine
          title="댕댕샵"
          score="4.9"
          reviewNum={120}
          distance={354}
          address="경기 성남시 분당구"
          phone="031)123-1234"
        />
        <ShopLine
          title="댕댕샵"
          score="4.9"
          reviewNum={120}
          distance={354}
          address="경기 성남시 분당구"
          phone="031)123-1234"
        />
        <ShopLine
          title="댕댕샵"
          score="4.9"
          reviewNum={120}
          distance={354}
          address="경기 성남시 분당구"
          phone="031)123-1234"
        />
        <ShopLine
          title="댕댕샵"
          score="4.9"
          reviewNum={120}
          distance={354}
          address="경기 성남시 분당구"
          phone="031)123-1234"
        />
        <ShopLine
          title="댕댕샵"
          score="4.9"
          reviewNum={120}
          distance={354}
          address="경기 성남시 분당구"
          phone="031)123-1234"
        />
      </ScrollFlex>
    </Flex>
  );
};

const ScrollFlex = styled(Flex)`
  height: calc(100vh - 232.5px);
  overflow-y: auto;

  .scroll {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
