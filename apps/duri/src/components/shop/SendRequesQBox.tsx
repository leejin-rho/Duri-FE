import { useNavigate } from 'react-router-dom';

import {
  Button,
  HeightFitFlex,
  NextArrow,
  RelativeFlex,
  SendColor,
  Text,
  theme,
  WidthFitFlex,
} from '@duri-fe/ui';
import styled from '@emotion/styled';

export const SendRequestQBox = ({
  closeBottomSheet,
  shopIdList,
}: {
  closeBottomSheet?: () => void;
  shopIdList: number[];
}) => {
  const navigate = useNavigate();
  const moveToShopRequest = () => {
    if (closeBottomSheet) closeBottomSheet();
    navigate('/shop/request', { state: { shopIdList: shopIdList } });
  };
  return (
    <RelativeFlex
      height={500}
      direction="column"
      justify="flex-start"
      padding="54px 0 56px 0"
    >
      <SendColor width={55} />
      <Text
        typo="Title1"
        margin="55px 0 0 0"
        colorCode={theme.palette.Normal700}
      >
        견적 요청서를 전송하시겠습니까?
      </Text>
      <Text typo="Body3" colorCode={theme.palette.Gray300} margin="14px 0 0 0">
        선택한 샵에 요청서를 전송합니다.
      </Text>

      <HeightFitFlex
        direction="column"
        align="flex-start"
        padding="58px 24px 0 28px"
        gap={24}
      >
        <Text typo="Title3">요청서 선택</Text>
        <HeightFitFlex justify="space-between">
          <Text typo="Title3">작성한 요청서가 없습니다.</Text>
          <CursorButton onClick={moveToShopRequest}>
            <Text typo="Label3" colorCode={theme.palette.Gray300}>
              작성하러가기
            </Text>
            <NextArrow width={23} color={theme.palette.Gray300} />
          </CursorButton>
        </HeightFitFlex>
      </HeightFitFlex>
      <AbsoluteBtnWrapper gap={8} padding="0 20px">
        <FlexBtn
          flex="136"
          bg={theme.palette.Gray20}
          onClick={closeBottomSheet}
        >
          <Text typo="Body3">취소</Text>
        </FlexBtn>
        <FlexBtn flex="191" bg={theme.palette.Gray200}>
          <Text typo="Body3" colorCode={theme.palette.White}>
            확인
          </Text>
        </FlexBtn>
      </AbsoluteBtnWrapper>
    </RelativeFlex>
  );
};
const AbsoluteBtnWrapper = styled(HeightFitFlex)`
  position: absolute;
  bottom: 0;
`;

const FlexBtn = styled(Button)<{ flex: string }>`
  border-radius: 8px;
  flex: ${({ flex }) => flex};
`;

const CursorButton = styled(WidthFitFlex)`
  cursor: pointer;
`;
