import { ClosetGroomingType, ScheduleType } from '@assets/types/home';
import { Card, DuriNavbar, Flex, Header, HeightFitFlex, MobileLayout, NextArrow, Pencil, Text, theme, WidthFitFlex } from '@duri-fe/ui';
import styled from '@emotion/styled';

import OngoingGrooming from '@components/home/ClosetGrooming';
import DailySchedule from '@components/home/DailySchedule';
import NewRequestItem from '@components/home/NewRequestItem';

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

const dailyScheduleData: ScheduleType[] = [
  {
    "date": "12-03",
    "startTime": "09:00",
    "petId": 3,
    "petName": "몽이",
    "breed": "말티즈",
    "gender": "MALE",
    "weight": 7,
    "groomerName": "한지민"
  },
  {
    "date": "12-03",
    "startTime": "12:00",
    "petId": 1,
    "petName": "바둑이",
    "breed": "진돗개",
    "gender": "MALE",
    "weight": 20,
    "groomerName": "한지민"
  }
]

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
          <DailySchedule dailyScheduleData={dailyScheduleData}/>
        </Card>
      </Flex>

      <Flex direction='column' align='flex-start' padding='0 20px' margin='28px 0 120px 0'>
        <Flex justify='flex-start' gap={16} margin='0 0 16px 0'>
          <Text typo='Title1'>요청서 확인하기</Text>
          <WidthFitFlex>
            <Text typo='Caption1' colorCode={theme.palette.Gray300}>더보기</Text>
            <NextArrow width={20} color={theme.palette.Gray300} />
          </WidthFitFlex>
        </Flex>
        
        <NewRequestItemWrapper justify='flex-start' gap={8}>
          <NewRequestItem />
          <NewRequestItem />
        </NewRequestItemWrapper>

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

const NewRequestItemWrapper = styled(Flex)`
  overflow-x: scroll;
`

export default Home;
