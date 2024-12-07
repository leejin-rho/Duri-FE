import { useNavigate } from 'react-router-dom';

import salonDefault from '@assets/images/pngs/salonDefault.png';
import {
  Button,
  Flex,
  HardText,
  HeightFitFlex,
  SalonTag,
  Send,
  Star,
  Text,
  theme,
  WidthFitFlex,
} from '@duri-fe/ui';
import styled from '@emotion/styled';

interface ShopLineProps {
  id: number;
  title: string;
  score: number;
  reviewNum: number;
  distance: number;
  address: string;
  phone: string;
  isClicked?: boolean;
  onClick: () => void;
  tags: string[];
}

export const ShopLine = ({
  id,
  title,
  score,
  reviewNum,
  distance,
  address,
  phone,
  isClicked = false,
  onClick,
  tags,
}: ShopLineProps) => {
  const navigate = useNavigate();
  const moveToDetail = (shopId: number | string) => {
    navigate(`/shop/${shopId}`);
  };

  const handleSendClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // 이벤트 전파 차단
    onClick?.();
  };

  return (
    <HeightFitFlex gap={20} key={id} onClick={() => moveToDetail(id)}>
      <SalonImg src={salonDefault} />
      <Flex direction="column" align="flex-start" gap={8}>
        <Flex gap={17} justify="flex-start">
          <Text typo="Body2">{title}</Text>
          <WidthFitFlex gap={7}>
            <Star width={14} />
            <Text typo="Label3">
              {score} ({reviewNum})
            </Text>
          </WidthFitFlex>
        </Flex>

        <TextLine typo="Caption3" colorCode={theme.palette.Gray400}>
          <MarkText>{`${distance}m | `}</MarkText>
          {address}
        </TextLine>
        <Flex>
          <Flex direction="column" gap={8}>
            <Flex gap={6} justify="flex-start">
              <Button
                width="53px"
                height="22px"
                padding="6.5px 9.5px"
                borderRadius="2px"
                bg={theme.palette.White}
                border={`0.8px solid ${theme.palette.Gray100}`}
                disabled={true}
              >
                <HardText typo="Caption2" colorCode={theme.palette.Gray500}>
                  영업중
                </HardText>
              </Button>
              <Text typo="Caption2" colorCode={theme.palette.Link}>
                {phone}
              </Text>
            </Flex>
            <TagList gap={8} justify="flex-start">
              {tags.map((tag, idx) => (
                <SalonTag key={idx} content={tag} />
              ))}
            </TagList>
          </Flex>
          <Button
            width="42px"
            height="42px"
            borderRadius="40px"
            onClick={handleSendClick}
            bg={isClicked ? theme.palette.Normal600 : theme.palette.Normal100}
            padding="0"
          >
            <Send width={21} height={21} color={theme.palette.Normal800} />
          </Button>
        </Flex>
      </Flex>
    </HeightFitFlex>
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

const TagList = styled(Flex)`
  flex-wrap: wrap;
`;
