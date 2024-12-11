import {
  defaultRequestDetailData,
  Flex,
  HeightFitFlex,
  PetInfo,
  Seperator,
  Text,
  theme,
  WidthFitFlex,
} from '@duri-fe/ui';
import { TimeType } from '@duri-fe/utils';
import { format } from 'date-fns';

import { RequestDetailProps } from '../../types';

// import { DetailGrooming } from './DetailGrooming';
import { DetailGroomingTemp } from './DetailGroomingTemp';
import { TimeTable } from './Timetable';

const timeList = Array(10)
  .fill(0)
  .map((_, i) => `${9 + i}:00`);

interface RequestQuotationProps {
  requestList?: RequestDetailProps;
  selectedTimeList?: TimeType;
  children?: React.ReactNode;
}

export const RequestQuotation = ({
  requestList = defaultRequestDetailData,
  selectedTimeList,
  children,
}: RequestQuotationProps) => {
  const { groomingMenu, additionalGrooming, specialCare, designCut } = requestList.quotationDetails;

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
            gender={requestList.pet.gender}
            name={requestList.pet.name}
            age={requestList.pet.age}
            breed={requestList.pet.breed}
            image={requestList.pet.image}
            weight={requestList.pet.weight}
            themeVariant='spacious'
            neutering={requestList.pet.neutering}
          />
        )}
      </Flex>

      <HeightFitFlex direction="column" gap={18}>
        <Seperator width='90%' mode="dotted" height="2px" />

        {/** 보호자 */}
        <Flex justify="space-between" padding="0 30.5px">
          <Text typo="Body2">보호자</Text>
          <WidthFitFlex gap={16}>
            <Text typo="Caption5">{requestList.userName}</Text>
            <Text typo="Caption5">{requestList.userPhone}</Text>
          </WidthFitFlex>
        </Flex>

        {/** 희망 예약 날짜 */}
        {requestList.quotationDetails.day && (
          <>
            <Seperator width='90%' mode="dotted" height="2px" />
            <Flex justify="space-between" padding="0 30.5px">
              <Text typo="Body2">희망 예약 날짜</Text>
              <Text typo="Body2">
                {format(requestList.quotationDetails.day, 'yyyy.MM.dd')}
              </Text>
            </Flex>
          </>
        )}

        <Seperator width='90%' mode="dotted" height="2px" />

        {/** 희망 예약 시간 */}
        {selectedTimeList && (        
          <Flex direction="column">
            <Text typo="Body2">희망 예약 시간</Text>
            <TimeTable timeList={timeList} selectedTimeList={selectedTimeList} />
          </Flex>
        )}
      </HeightFitFlex>

      <Seperator width='90%' mode="dotted" height="2px" />

      {/** 상세 미용 */}
      <HeightFitFlex direction="column" padding='28px 0'>
        <DetailGroomingTemp
          groomingMenu={groomingMenu}
          additionalGrooming={additionalGrooming}
          specialCare={specialCare}
          designCut={designCut}
        />
      </HeightFitFlex>

      <Seperator width='90%' mode="dotted" height="2px" />

      {/** 요청사항 */}
      <Flex direction="column" align="flex-start" padding="28px 30.5px" gap={12}>
        <Text typo="Body2">요청사항</Text>
        <Text typo="Label3" colorCode={theme.palette.Gray500}>{requestList.quotationDetails.otherRequests}</Text>
      </Flex>

      {/** 하단 버튼 */}
      <Flex gap={7} margin="6px 0" padding="16px 18.5px">
        {children}
      </Flex>
    </>
  );
};
