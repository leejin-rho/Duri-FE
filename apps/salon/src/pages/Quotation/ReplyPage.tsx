import { useNavigate } from "react-router-dom";

import { Card, Flex, FrontBtn, Header, HeightFitFlex, MobileLayout, SalonNavbar, Text, theme, WidthFitFlex } from "@duri-fe/ui";

const ReplyPage = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout backgroundColor={theme.palette.Gray_White}>
      <Header backIcon title="요청서 보기" titleAlign="start" backgroundColor={theme.palette.White} onClickBack={() => navigate(-1)}/>
      
      <Flex direction="column" gap={2}>
        {/** 펫 정보 */}
        <HeightFitFlex padding="14px 20px"  backgroundColor={theme.palette.White}>
          <Card height="235" borderRadius={16}>
            펫정보는 머지되면 수정
          </Card>
        </HeightFitFlex>
        
        {/** 보호자 정보 */}
        <Flex height={48} padding="0 20px" justify="space-between" backgroundColor={theme.palette.White}>
          <Text typo="Title3" colorCode={theme.palette.Black}>보호자</Text>
          <WidthFitFlex gap={28}>
            <Text typo="Body3" colorCode={theme.palette.Black}>김김김</Text>
            <Text typo="Body4" colorCode={theme.palette.Gray500}>010-7664-6286</Text>
          </WidthFitFlex>
        </Flex>

        <Flex>

        </Flex>
      </Flex>
      
      {/** 하단 버튼 */}
      <FrontBtn
        bg={theme.palette.Black}
        padding="10px 0"
        height="53px"
        borderRadius="0"
      >
        <Text typo="Title3" colorCode={theme.palette.White}>다음</Text>
      </FrontBtn>
      <SalonNavbar />
    </MobileLayout>
  );
}

export default ReplyPage;