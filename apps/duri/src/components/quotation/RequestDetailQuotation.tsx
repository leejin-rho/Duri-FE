import { useEffect, useState } from 'react';

import { RequestQuotation, Text, theme } from '@duri-fe/ui';
import { TimeType, useGetDetailRequest } from '@duri-fe/utils';

interface RequestDetailQuotationProps {
  requestId: number;
}

export const RequestDetailQuotation = ({
  requestId,
}: RequestDetailQuotationProps) => {
  const { data: requestData } = useGetDetailRequest(requestId);
  const [timeList, setTimeList] = useState<TimeType>();

  useEffect(() => {
    if (requestData?.quotationDetails) {
      const times = Object.fromEntries(
        Object.entries(requestData.quotationDetails).filter(([key]) =>
          key.startsWith('time'),
        ) as [keyof TimeType, boolean][], // key를 TimeType의 키로 제한
      );
      setTimeList(times as unknown as TimeType);
    }
  }, [requestData]);

  if (!requestData) return <div>Loading...</div>;

  return (
    <>
      {requestData.quotationDetails ? (
        <RequestQuotation
          requestList={requestData}
          selectedTimeList={timeList}
        />
      ) : (
        <Text typo="Caption3" colorCode={theme.palette.Gray300}>
          견적서 로딩에 실패했습니다.
        </Text>
      )}
    </>
  );
};
