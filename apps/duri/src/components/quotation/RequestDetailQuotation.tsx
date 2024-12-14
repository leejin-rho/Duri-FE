import { useEffect, useState } from 'react';

import { RequestQuotation } from '@duri-fe/ui';
import { TimeType, useGetRequestDetailInfo } from '@duri-fe/utils';

interface RequestDetailQuotationProps {
  requestId: number;
}

export const RequestDetailQuotation = ({
  requestId,
}: RequestDetailQuotationProps) => {
  const { data: requestData } = useGetRequestDetailInfo(requestId);
  const [timeList, setTimeList] = useState<TimeType>();

  useEffect(() => {
    if (requestData?.quotationDetails) {
      const times = Object.fromEntries(
        Object.entries(requestData.quotationDetails).filter(([key]) =>
          key.startsWith('time'),
        ) as [keyof TimeType, boolean][], // key를 TimeType의 키로 제한
      );
      setTimeList(times as unknown as TimeType);
      console.log(times);
    }

    if (requestData) {
      console.log('requestData:', requestData);
      console.log('quotationDetails:', requestData?.quotationDetails);
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
        <div>Quotation details not available</div>
      )}
    </>
  );
};
