import React, { useEffect, useState } from "react";

import { QuotationFormData, TimeType } from "@assets/types/quotation";
import { Flex, ProfileImage, Text, theme, TimeTableGroomer, WidthFitFlex } from "@duri-fe/ui";
import { RequestDetailResponse } from "@duri-fe/utils";
import { defaultTimeList } from "@salon/assets/data/quotation";
import { checkContinuousTime } from "@salon/utils/checkContinuousTime";

const timeList = Array(10)
  .fill(0)
  .map((_, i) => `${9 + i}:00`);

interface ReplyFormProps {
  request: RequestDetailResponse['response'];
  selectedTimeList: TimeType;
  setFormData: React.Dispatch<React.SetStateAction<QuotationFormData>>;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReplyForm = ({
  request,
  selectedTimeList,
  setFormData,
  setIsValid,
}: ReplyFormProps) => {
  const requestDay = request.quotationDetails.day;
  const [reservationTimeList, setReservationTimeList] = useState<TimeType>(defaultTimeList);

  const handleReserve = (
    key: string,
    value: boolean,
  ) => {
    setReservationTimeList((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  useEffect(() => {
    const { isEmpty, isCountinuous, startDateTime, endDateTime } = checkContinuousTime(reservationTimeList, requestDay);

    if (isEmpty) {
      setIsValid(false);
      return;
    }

    if (!isCountinuous) {
      alert('연속된 시간을 선택해주세요.');
      setIsValid(false);
      return;
    }

    setFormData((prev) => ({
      ...prev,
      startDateTime: startDateTime,
      endDateTime: endDateTime,
    }))
    setIsValid(true);
  }, [reservationTimeList])

  return (
    <Flex direction="column" gap={24} padding="24px 0">

      {/** 미용사 */}
      <Flex direction="column" align="flex-start" gap={8}>
        <Text typo="Title2" colorCode={theme.palette.Black}>디자이너 선택</Text>
        <Text typo="Label3" colorCode={theme.palette.Gray400}>담당 디자이너를 선택해주세요.</Text>
        <WidthFitFlex padding="8px 16px" margin="4px 0" gap={12} backgroundColor={theme.palette.Gray_White} borderRadius={12}>
          <ProfileImage width={48} height={48} borderRadius={48} src={request?.groomer.image} />
          <Text typo="Label2">{request?.groomer.name}</Text>
        </WidthFitFlex>
      </Flex>

      <Flex direction="column" align="flex-start" gap={8}>
        <Text typo="Title2" colorCode={theme.palette.Black}>희망 날짜</Text>
        <Text typo="Label3" colorCode={theme.palette.Gray400}>예약자분이 희망하는 예약 날짜에요.</Text>
        <WidthFitFlex padding="8px 16px" margin="4px 0" gap={12} backgroundColor={theme.palette.Gray_White} borderRadius={12}>
          <Text typo="Label2">{request?.quotationDetails.day}</Text>
        </WidthFitFlex>
      </Flex>

      <Flex direction="column" align="flex-start" gap={8}>
        <Text typo="Title2" colorCode={theme.palette.Black}>희망 예약 시간</Text>
        <Text typo="Label3" colorCode={theme.palette.Gray400}>예약자분이 희망하는 예약 시간이에요.</Text>
        <TimeTableGroomer timeList={timeList} selectedTimeList={selectedTimeList} reservationTimeList={reservationTimeList} />
      </Flex>

      <Flex direction="column" align="flex-start" gap={8}>
        <Text typo="Title2" colorCode={theme.palette.Black}>미용 제안 시간</Text>
        <Text typo="Label3" colorCode={theme.palette.Gray400}>희망 예약 시간을 보고 사장님이 미용가능한 시간을 지정해주세요.</Text>
        <TimeTableGroomer timeList={timeList} selectedTimeList={selectedTimeList} reservationTimeList={reservationTimeList} onSelect={handleReserve} />
      </Flex>
    </Flex>
  ); 
}

export default ReplyForm;