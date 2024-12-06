import { Card, DuriNavbar, Flex, Header, HeightFitFlex, MobileLayout, Pencil, Text, theme } from '@duri-fe/ui';
import styled from '@emotion/styled';
import { ClosetGroomingType } from '@salon/Assets/types/home';
import OngoingGrooming from '@salon/components/home/ClosetGrooming';
import DailySchedule from '@salon/components/home/DailySchedule';

const closetGroomingData: ClosetGroomingType = {
  "petId": 0,
  "petName": "string",
  "breed": "string",
  "gender": "string",
  "age": 0,
  "weight": 0,
  "memo": "string",
  "userId": 0,
  "userPhone": "string",
  "quotationId": 0,
  "startTime": "string",
  "complete": true,
  "isNow": false,
}

const Home = () => {
  const date = new Date();
  const dateStr = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;

  return (
    <MobileLayout>
      <HomeHeaderContainer direction='column' height={260} align='start' justify='space-between'>
        <Header logoColor={theme.palette.Black} iconColor={theme.palette.White} badge />
        
        <TextContainer direction='column' align='start' padding="36px 20px" gap={4}>
          <Flex gap={12}>
            <Text typo='Heading3' colorCode={theme.palette.White}>댕댕샵</Text>
            <Pencil width={20} />
          </Flex>
          <Text typo='Body3' colorCode={theme.palette.White}>경기도 성남시</Text>
        </TextContainer>

        <ShopNotice justify='start' padding="16px" backgroundColor={theme.palette.Normal200}>
          <ShopNoticeText colorCode={theme.palette.Normal900} align='start'>
            댕댕샵 점주님 안녕하세용용용용용용용용
          </ShopNoticeText>
        </ShopNotice>
      </HomeHeaderContainer>

      <Flex padding='0 20px' margin='45px 0 0 0'>
        <Card height='195' borderRadius={16} shadow='large'>
          <OngoingGrooming
            petName={closetGroomingData.petName}
            breed={closetGroomingData.breed}
            gender={closetGroomingData.gender}
            age={closetGroomingData.age}
            weight={closetGroomingData.weight}
            memo={closetGroomingData.memo}
            userPhone={closetGroomingData.userPhone}
            quotationId={closetGroomingData.quotationId}
            startTime={closetGroomingData.startTime}
            isNow={closetGroomingData.isNow}

          />
        </Card>
      </Flex>

      <Flex direction='column' align='flex-start' padding='0 20px' margin='31px 0 0 0' gap={32}>
        <Flex direction='column' align='flex-start' gap={6}>
          <Text typo='Caption1'>{dateStr}</Text>
          <Text typo='Title1'>오늘 일정 빠르게 보기</Text>
        </Flex>
        <Card
          height='237'
          borderRadius={8}
          shadow='large'
        >
          <DailySchedule 
            
          />
        </Card>
      </Flex>

      <Flex direction='column' align='flex-start' padding='0 20px 120px 20px'>

      </Flex>
      <DuriNavbar />
    </MobileLayout>
  );
};

const HomeHeaderContainer = styled(Flex)`
  position: relative;
  background-size: cover;
  background-position: center;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70%;
    background: linear-gradient(180deg, rgba(217, 217, 217, 0.00) 0%, #111 100%);
  }
`;

const TextContainer = styled(Flex)`
  height: fit-content;
  width: fit-content;
  z-index: 2;
`;

const ShopNotice = styled(HeightFitFlex)`
  width: calc(100% - 40px);
  border-radius: 0 12px 12px 12px;
  position: absolute;
  bottom: -25px;
  left: 20px;
  overflow: hidden;
`;

const ShopNoticeText = styled(Text)`
  width: 100%;
  justify-content: start;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export default Home;
