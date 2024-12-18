import {
  Flex,
  HeightFitFlex,
  PetInfo,
  Seperator,
  Text,
  TextField,
  WidthFitFlex,
} from '@duri-fe/ui';
import { TimeType } from '@duri-fe/utils';
import { format } from 'date-fns';

import { RequestDetailProps } from '../../types';

import { DetailGrooming } from './DetailGrooming';
// import { DetailGroomingTemp } from './DetailGroomingTemp';
import { TimeTable } from './Timetable';

const timeList = Array(10)
  .fill(0)
  .map((_, i) => `${9 + i}:00`);

interface RequestQuotationProps {
  requestList: RequestDetailProps;
  selectedTimeList?: TimeType;
  children?: React.ReactNode;
}

export const RequestQuotation = ({
  requestList,
  selectedTimeList,
  children,
}: RequestQuotationProps) => {
  const {
    groomingMenu,
    additionalGrooming,
    specialCare,
    designCut,
    day,
    otherRequests,
  } = requestList.quotationDetails; //미용정보

  const { age, breed, gender, image, neutering, name, weight } =
    requestList.pet; //펫정보

  console.log(requestList);

  return (
    <>
      {/** 펫 정보 */}
      <Flex
        direction="column"
        justify="flex-start"
        padding="19px 20px"
        margin="0 0 14px 0"
      >
        {requestList.pet && (
          <PetInfo
            gender={gender}
            name={name}
            age={age}
            breed={breed}
            image={image}
            weight={weight}
            themeVariant="spacious"
            neutering={neutering}
          />
        )}
      </Flex>

      <HeightFitFlex direction="column" gap={18}>
        <Seperator mode="dotted" height="2px" />

        {/** 보호자 */}
        <Flex justify="space-between" padding="0 30.5px">
          <Text typo="Body2">보호자</Text>
          <WidthFitFlex gap={16}>
            <Text typo="Caption5">{requestList.userName}</Text>
            <Text typo="Caption5">{requestList.userPhone}</Text>
          </WidthFitFlex>
        </Flex>

        {/** 희망 예약 날짜 */}
        {day && (
          <>
            <Seperator mode="dotted" height="2px" />
            <Flex justify="space-between" padding="0 30.5px">
              <Text typo="Body2">희망 예약 날짜</Text>
              <Text typo="Body2">{format(day, 'yyyy.MM.dd')}</Text>
            </Flex>
          </>
        )}

        <Seperator mode="dotted" height="2px" />

        {/** 희망 예약 시간 */}
        {selectedTimeList && (
          <Flex direction="column">
            <Text typo="Body2">희망 예약 시간</Text>
            <TimeTable
              timeList={timeList}
              selectedTimeList={selectedTimeList}
            />
          </Flex>
        )}
      </HeightFitFlex>

      <Seperator mode="dotted" height="2px" />

      {/** 상세 미용 */}
      <HeightFitFlex direction="column" padding="28px 0">
        <DetailGrooming
          groomingMenu={groomingMenu}
          additionalGrooming={additionalGrooming}
          specialCare={specialCare}
          designCut={designCut}
        />
      </HeightFitFlex>

      <Seperator mode="dotted" height="2px" />

      {/** 요청사항 */}
      <Flex
        direction="column"
        align="flex-start"
        padding="28px 30.5px"
        gap={12}
      >
        <Text typo="Body2">요청사항</Text>
        <TextField disabled value={otherRequests} widthPer='100%' multiline height={82}/>
      </Flex>

      {/** 하단 버튼 */}
      {children && (
        <Flex gap={7} margin="6px 0" padding="16px 18.5px">
          {children}
        </Flex>
      )}
    </>
  );
};
