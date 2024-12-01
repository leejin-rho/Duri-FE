import salonDefault from '@assets/images/pngs/salonDefault.png';
import {
  Button,
  Flex,
  Seperator,
  Star,
  Text,
  theme,
  WidthFitFlex,
} from '@duri-fe/ui';
import styled from '@emotion/styled';

export const ShopLine = () => {
  return (
    <Flex direction="column">
      <Flex height={123} gap={21} padding="15px 26px">
        <SalonImg src={salonDefault} />
        <Flex direction="column" align="flex-start">
          <Flex gap={17}>
            <Text>댕댕샵</Text>
            <WidthFitFlex gap={7}>
              <Star width={14} />
              4.9 (120)
            </WidthFitFlex>
          </Flex>

          <TextLine typo="Body3" colorCode={theme.palette.Gray400}>
            <MarkText>{'354m | '}</MarkText>
            {'경기 성남시 분당구 안양판교로'}
          </TextLine>

          <Flex gap={6} justify="flex-start">
            <Button
              width="53px"
              height="22px"
              padding="10px"
              borderRadius="2px"
              bg={theme.palette.White}
              border={`0.8px solid ${theme.palette.Gray100}`}
            >
              <Text typo="Body4">영업중</Text>
            </Button>
            <Text colorCode={theme.palette.Link}>{'031)123-1234'}</Text>
          </Flex>
        </Flex>
      </Flex>
      <Seperator />
    </Flex>
  );
};

const SalonImg = styled.img`
  display: flex;
  width: 92px;
  height: 92px;
`;

const MarkText = styled.span`
  font-weight: 600;
`;

const TextLine = styled(Text)`
  display: inline;
`;
