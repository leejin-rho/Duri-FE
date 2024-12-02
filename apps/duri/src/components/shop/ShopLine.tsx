import salonDefault from '@assets/images/pngs/salonDefault.png';
import {
  Button,
  Flex,
  SalonTag,
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
      <Flex gap={20} padding="15px 26px">
        <SalonImg src={salonDefault} />
        <Flex direction="column" align="flex-start" gap={8}>
          <Flex gap={17} justify="flex-start">
            <Text typo="Body2">댕댕샵</Text>
            <WidthFitFlex gap={7}>
              <Star width={14} />
              <Text typo="Label3">4.9 (120)</Text>
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
              disabled={true}
            >
              <Text typo="Body4">영업중</Text>
            </Button>
            <Text colorCode={theme.palette.Link}>{'031)123-1234'}</Text>
          </Flex>
          <Flex gap={8} justify="flex-start">
            <SalonTag content="노견전문" />
            <SalonTag content="소형견" />
            <SalonTag content="노견전문" />
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
