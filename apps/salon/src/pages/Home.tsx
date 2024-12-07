import { ClosetGroomingType, QuotationRequestType, ScheduleType, ShopInfoType } from '@assets/types/home';
import { Card, DuriNavbar, Flex, HeightFitFlex, MainHeader, MobileLayout, NextArrow, Pencil, Text, theme, WidthFitFlex } from '@duri-fe/ui';
import styled from '@emotion/styled';

import OngoingGrooming from '@components/home/ClosetGrooming';
import DailyScheduleItem from '@components/home/DailyScheduleItem';
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
  },
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
]

const quoataionRequestData: QuotationRequestType[] = [
  {
    "requestId": 3,
    "petId": 3,
    "imageURL": "https://example.com/dog3.jpg",
    "name": "몽이",
    "breed": "말티즈",
    "gender": "M",
    "age": 4,
    "weight": 7,
    "neutering": false,
    "quotationReqId": 3,
    "memo": ""
  },
  {
    "requestId": 4,
    "petId": 2,
    "imageURL": "https://example.com/dog2.jpg",
    "name": "초코",
    "breed": "푸들",
    "gender": "F",
    "age": 3,
    "weight": 10,
    "neutering": true,
    "quotationReqId": 2,
    "memo": "깔끔하게 부탁드립니다."
  }
]

const shopInfoData: ShopInfoType = {
  "id": 1,
  "name": "강남 미용샵",
  "address": "서울시 강남구",
  "imageURL": null,
  "phone": "02-123-4567"
}

const Home = () => {
  const date = new Date();
  const dateStr = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;

  return (
    <MobileLayout>
      <HomeHeaderContainer direction='column' height={260} align='start' justify='space-between'>
        <MainHeader logoColor={theme.palette.Black} iconColor={theme.palette.Normal800} badge />
        
        {/** 매장 정보 */}
        <TextContainer direction='column' align='start' padding="36px 20px" gap={4}>
          <Flex gap={12}>
            <Text typo='Heading3' colorCode={theme.palette.White}>{shopInfoData.name}</Text>
            <Pencil width={20} />
          </Flex>
          <Text typo='Body3' colorCode={theme.palette.White}>{shopInfoData.address}</Text>
        </TextContainer>

        <ShopNotice justify='start' padding="16px" backgroundColor={theme.palette.Normal200}>
          <ShopNoticeText colorCode={theme.palette.Normal900} align='start'>
            댕댕샵 점주님 안녕하세용용용용용용용용
          </ShopNoticeText>
        </ShopNotice>
      </HomeHeaderContainer>

      {/** 진행중인 시술 */}
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

      {/** 오늘 스케줄 */}
      <Flex direction='column' align='flex-start' padding='0 20px' margin='31px 0 0 0' gap={32}>
        <Flex direction='column' align='flex-start' gap={6}>
          <Text typo='Caption1'>{dateStr}</Text>
          <Text typo='Title1'>오늘 일정 빠르게 보기</Text>
        </Flex>
        <Card maxHeight="240px" borderRadius={8} shadow='large'>
          <ScheduleWrapper direction="column" align="flex-start" justify="flex-start" padding="20px 14px">
            <ScheduleContainer direction="column" align="flex-start" justify="flex-start">
              <SideBar margin="0 10px 0 3px" width={1} backgroundColor={theme.palette.Gray200} />
              {dailyScheduleData.map((schedule, index) => (
                <DailyScheduleItem 
                  key={index}
                  startTime={schedule.startTime}
                  petName={schedule.petName}
                  breed={schedule.breed}
                  gender={schedule.gender}
                  weight={schedule.weight}
                  groomerName={schedule.groomerName}
                />
              ))}
            </ScheduleContainer>
          </ScheduleWrapper>
        </Card>
      </Flex>

      {/** 요청서 확인 */}
      <NewRequestWrapper direction='column' align='flex-start' margin='28px 0 120px 0'>
        <Flex justify='flex-start' gap={16} margin='0 20px 16px 20px'>
          <Text typo='Title1'>요청서 확인하기</Text>
          <WidthFitFlex>
            <Text typo='Caption1' colorCode={theme.palette.Gray300}>더보기</Text>
            <NextArrow width={20} color={theme.palette.Gray300} />
          </WidthFitFlex>
        </Flex>
        <NewRequestItemWrapper justify='flex-start' padding="0 20px" gap={8}>
          {quoataionRequestData.map((request, index) => (
            <NewRequestItem
              key={index}
              requestId={request.requestId}
              petId={request.petId}
              imageURL={request.imageURL}
              name={request.name}
              breed={request.breed}
              gender={request.gender}
              age={request.age}
              weight={request.weight}
              neutering={request.neutering}
              quotationReqId={request.quotationReqId}
              memo={request.memo}
            />
          ))}
        </NewRequestItemWrapper>
      </NewRequestWrapper>
      <DuriNavbar />
    </MobileLayout>
  );
};

const HomeHeaderContainer = styled(Flex)<{backgroundImg?: string}>`
  position: relative;
  background-size: cover;
  background-position: center;
  ${props => props.backgroundImg && `background-image: url(${props.backgroundImg});`}

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

const ScheduleWrapper = styled(Flex)`
  overflow-y: hidden;
`;

const ScheduleContainer = styled(Flex)`
  overflow-y: scroll;
  position: relative;
`;

const SideBar = styled(Flex)`
  position: absolute;
`;

const NewRequestWrapper = styled(Flex)`
  overflow: hidden;
`

const NewRequestItemWrapper = styled(Flex)`
  overflow-x: scroll;
`;

export default Home;
