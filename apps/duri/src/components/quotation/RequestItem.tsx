import { useNavigate } from 'react-router-dom';

import { Button, Card, Flex, Seperator, Text, theme } from '@duri-fe/ui';

import { RequestInfo } from './RequestInfo';

interface RequestItemProps {
  requestId: number;
  createdAt: Date;
  expiredAt: Date;
  shops: {
    shopId: number;
    shopName: string;
  }[];
  isExpired: boolean;
}

export const RequestItem = ({
  requestId,
  createdAt,
  expiredAt,
  isExpired,
  shops,
}: RequestItemProps) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    const quotationId = requestId;
    navigate(`/quotation/${quotationId}`);
  };

  return (
    <>
      {isExpired ? (
        <Card
          borderRadius={16}
          shadow="small"
          padding="20px 14px"
          bg={theme.palette.Gray20}
        >
          <RequestInfo
            requestId={requestId}
            createdAt={createdAt}
            expiredAt={expiredAt}
            margin="0 0 20px 0"
          />
          <Seperator height="2px" colorCode={theme.palette.Gray50} />
          <Flex justify="flex-start" padding="0 11px" margin="20px 0">
            <Text typo="Caption3" colorCode={theme.palette.Gray300}>
              {shops && shops.length > 1
                ? (`${shops[0]?.shopName} 외 ${shops.length - 1}`)
                : (`${shops[0]?.shopName}`)}
            </Text>
          </Flex>
          <Button
            borderRadius="8px"
            fontColor={theme.palette.White}
            bg={theme.palette.Gray100}
            disabled
            padding="10px"
          >
            견적서 보기
          </Button>
        </Card>
      ) : (
        <Card borderRadius={16} shadow="small" padding="20px 14px">
          <RequestInfo
            requestId={requestId}
            createdAt={createdAt}
            expiredAt={expiredAt}
            margin="0 0 20px 0"
          />
          <Seperator height="2px" />
          <Flex justify="flex-start" padding="0 11px" margin="20px 0">
            <Text typo="Caption3" colorCode={theme.palette.Gray300}>
              {shops && shops.length > 1
                ? `${shops[0]?.shopName} 외 ${shops.length - 1}`
                : shops[0]?.shopName === undefined
                  ? '정보 없음'
                  : `${shops[0]?.shopName}`}
            </Text>
          </Flex>
          <Button
            borderRadius="8px"
            fontColor={theme.palette.Normal700}
            padding="10px"
            onClick={handleNavigate}
            typo="Caption2"
          >
            견적서 보기
          </Button>
        </Card>
      )}
    </>
  );
};
