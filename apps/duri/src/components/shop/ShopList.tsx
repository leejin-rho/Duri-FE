import { forwardRef, useState } from 'react';
import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet';

import {
  Button,
  Filter,
  Flex,
  HardText,
  Seperator,
  Text,
  theme,
} from '@duri-fe/ui';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import 'react-spring-bottom-sheet/dist/style.css';

import { ShopLine } from './ShopLine';

export const ShopList = forwardRef<BottomSheetRef>((_, ref) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleDismiss = () => {
    setOpen(false);
  };

  return (
    <>
      <Flex
        direction="column"
        backgroundColor={theme.palette.White}
        padding="108px 0px 92px 0px"
      >
        <Flex justify="space-between" height={65} padding="4px 20px 0 20px">
          <Button
            width="fit-content"
            height="32px"
            bg={theme.palette.White}
            borderRadius="99px"
            padding="10px"
            shadow={'0px 0px 4px 0px rgba(0, 0, 0, 0.25)'}
            onClick={() => setOpen(true)}
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
          padding="17px 20px 28px 20px"
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

        <BottomSheet
          open={open}
          ref={ref}
          css={StyledBottomCss}
          maxHeight={260}
          snapPoints={({ maxHeight }) => [maxHeight]}
          onDismiss={handleDismiss}
        >
          <Flex
            direction="column"
            align="flex-start"
            padding="24px 16px 0 16px"
          >
            <Text typo="Body1" margin="0 5px 22px 5px">
              정렬
            </Text>
            <Seperator />
            <Flex
              direction="column"
              align="flex-start"
              margin="22px 5px 0 5px"
              gap={36}
            >
              <Button bg="transparent" width="fit-content" padding="0">
                <Text typo="Title3">거리순</Text>
              </Button>
              <Button bg="transparent" width="fit-content" padding="0">
                <Text typo="Title3">거리순</Text>
              </Button>
            </Flex>
          </Flex>
        </BottomSheet>
      </Flex>
    </>
  );
});

ShopList.displayName = 'ShopList';

const ScrollFlex = styled(Flex)`
  height: calc(100vh - 274.5px);
  overflow-y: auto;

  .scroll {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const StyledBottomCss = css`
  position: relative;

  [data-rsbs-overlay],
  [data-rsbs-root]::after {
    border-radius: 16px 16px 0px 0px;
    z-index: 20;
    max-width: 480px;

    @media (min-width: 480px) {
      left: calc(50% - 240px);
    }
  }

  [data-rsbs-backdrop] {
    background-color: rgba(49, 48, 54, 0.5);
  }
`;
