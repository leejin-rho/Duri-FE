import { useNavigate } from 'react-router-dom';

import {
  Button,
  Flex,
  Image,
  Store,
  Text,
  theme,
  WidthFitFlex,
} from '@duri-fe/ui';
import styled from '@emotion/styled';

interface UpcomingReservationProps {
  shopId: number;
  imageURL: string;
  name: string;
  address: string;
  phone: string;
  kakaoURL: string;
  reserveDday: number;
  reservationDate: string;
  price: string;
}

const UpcomingReservation = ({
  imageURL,
  address,
  kakaoURL,
  name,
  phone,
  price,
  reservationDate,
  reserveDday,
  shopId,
}: UpcomingReservationProps) => {
  const navigate = useNavigate();

  const handleClickTelButton = () => {
    window.location.href = `tel:${phone}`; //모바일에서 전화걸기 창 뜨는 그거... 하고시픈뎃!!
  };

  const handleClickChatButton = () => {
    //오픈채팅방 주소 알려주는 모달 뜨게?하면 될 듯
    console.log(kakaoURL);
  };

  const handleClickShopButton = () => {
    navigate(`/shop/${shopId}`);
  };

  const formatReservationDate = (reservationDate: string): string => {
    if (!reservationDate) return '예약 정보 없음';

    // 날짜와 시간 분리
    const [datePart, hourPart] = reservationDate.split(' ');

    // 시간 포맷 결정 (오전/오후)
    const hour = parseInt(hourPart, 10);
    const period = hour < 12 ? '오전' : '오후';
    const formattedHour = hour <= 12 ? hour : hour - 12;

    // 날짜 변환 (YYYY-MM-DD → YYYY.MM.DD)
    const formattedDate = datePart.replace(/-/g, '.');

    return `${formattedDate} ${period} ${formattedHour}시`;
  };

  return (
    <Wrapper
      direction="column"
      borderRadius={12}
      padding="27px 0 36px"
      backgroundColor={theme.palette.White}
    >
      <Flex gap={14} padding="0 20px">
        {imageURL ? (
          <ImageWrapper
            src={imageURL}
            width={67}
            height={67}
            borderRadius={13}
            onClick={handleClickShopButton}
          />
        ) : (
          <ImageBox borderRadius={13}>
            <Store width={67} height={67} />
          </ImageBox>
        )}

        <ShopWrapper
          direction="column"
          align="flex-start"
          gap={12}
          onClick={handleClickShopButton}
        >
          <Text>{name}</Text>
          <Text typo="Caption4" colorCode={theme.palette.Gray400}>
            {address}
          </Text>
        </ShopWrapper>
        <WidthFitFlex align="flex-start">
          <Flex
            backgroundColor={theme.palette.Normal500}
            borderRadius={99}
            height="25px"
            padding="8px 10px"
          >
            <DdayText typo="Label2">D-{reserveDday}</DdayText>
          </Flex>
        </WidthFitFlex>
      </Flex>
      <Flex gap={8} justify="flex-end" padding="0 13px">
        <Button
          width="97px"
          height="25px"
          borderRadius="4px"
          padding="6px 26px"
          bg={theme.palette.Gray20}
          fontColor={theme.palette.Gray500}
          typo="Caption2"
          onClick={handleClickTelButton}
        >
          전화하기
        </Button>
        <Button
          width="97px"
          height="25px"
          borderRadius="4px"
          padding="6px 26px"
          bg={theme.palette.Gray20}
          fontColor={theme.palette.Gray500}
          typo="Caption2"
          onClick={handleClickChatButton}
        >
          문의하기
        </Button>
      </Flex>

      <BottomWrapper
        justify="space-between"
        height={33}
        backgroundColor={theme.palette.Normal100}
        margin="12px 0 0 0"
        padding="12px 27px"
      >
        <Text typo="Label2" colorCode={theme.palette.Normal800}>
          {formatReservationDate(reservationDate)}
        </Text>
        <Text typo="Label2" colorCode={theme.palette.Normal800}>
          {price ? `${price.toLocaleString()} 원` : '가격 정보 없음'}
        </Text>
      </BottomWrapper>
    </Wrapper>
  );
};

export default UpcomingReservation;

const DdayText = styled(Text)`
  white-space: nowrap;
`;

const Wrapper = styled(Flex)`
  flex-shrink: 0;
  position: relative;
`;

const BottomWrapper = styled(Flex)`
  position: absolute;
  bottom: 0;
  border-radius: 0 0 12px 12px;
`;

const ImageWrapper = styled(Image)`
  cursor: pointer;
`;

const ImageBox = styled(WidthFitFlex)`
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const ShopWrapper = styled(Flex)`
  cursor: pointer;
`;
