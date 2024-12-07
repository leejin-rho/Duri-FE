import { useNavigate } from 'react-router-dom';

import { RequestItemType } from '@duri/assets/types';
import {
  Button,
  Card,
  Flex,
  NextArrow,
  Seperator,
  Text,
  theme,
} from '@duri-fe/ui';
import { format } from 'date-fns';

export const RequestItem = ({
  requestItem,
}: {
  requestItem: RequestItemType;
}) => {
  const navigate = useNavigate();
  const handleNavigate = () =>
    navigate(`/quotation/${requestItem.quotationId}`);

  return (
    <>
      {requestItem.expired ? (
        <Card
          borderRadius={16}
          shadow="small"
          padding="20px 14px"
          bg={theme.palette.Gray20}
        >
          <Flex
            direction="column"
            gap={20}
            padding="0 11px"
            margin="0 0 20px 0"
          >
            <Flex gap={8} justify="flex-start">
              <Text typo="Title3" colorCode={theme.palette.Gray300}>
                요청서{requestItem.quotationId}
              </Text>
              <NextArrow width={22} height={23} />
            </Flex>
            <Flex direction="column" gap={12}>
              <Flex justify="space-between">
                <Text typo="Label4" colorCode={theme.palette.Gray300}>
                  요청서 전송 일자
                </Text>
                <Text typo="Caption2" colorCode={theme.palette.Gray300}>
                  {format(requestItem.createdAt, 'yyyy-MM-dd HH:mm')}
                </Text>
              </Flex>
              <Flex justify="space-between">
                <Text typo="Label4" colorCode={theme.palette.Alert}>
                  요청서 마감 시간
                </Text>
                <Text typo="Caption2" colorCode={theme.palette.Gray300}>
                  {format(requestItem.expiredAt, 'yyyy-MM-dd HH:mm')}
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Seperator height="2px" />
          <Flex justify="flex-start" padding="0 11px" margin="20px 0">
            <Text typo="Caption2" colorCode={theme.palette.Gray300}>
              {requestItem.shops.length > 1
                ? `${requestItem.shops[0].shopName} 외 ${requestItem.shops.length - 1}`
                : `${requestItem.shops[0].shopName}`}
            </Text>
          </Flex>
          <Button
            borderRadius="8px"
            fontColor={theme.palette.White}
            bg={theme.palette.Gray100}
          >
            견적서 보기
          </Button>
        </Card>
      ) : (
        <Card borderRadius={16} shadow="small" padding="20px 14px">
          <Flex
            direction="column"
            gap={20}
            padding="0 11px"
            margin="0 0 20px 0"
          >
            <Flex gap={8} justify="flex-start">
              <Text typo="Title3" colorCode={theme.palette.Normal700}>
                요청서{requestItem.quotationId}
              </Text>
              <NextArrow width={22} height={23} />
            </Flex>
            <Flex direction="column" gap={12}>
              <Flex justify="space-between">
                <Text typo="Label4">요청서 전송 일자</Text>
                <Text typo="Caption2" colorCode={theme.palette.Gray300}>
                  {format(requestItem.createdAt, 'yyyy-MM-dd HH:mm')}
                </Text>
              </Flex>
              <Flex justify="space-between">
                <Text typo="Label4" colorCode={theme.palette.Alert}>
                  요청서 마감 시간
                </Text>
                <Text typo="Caption2">
                  {format(requestItem.expiredAt, 'yyyy-MM-dd HH:mm')}
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Seperator height="2px" />
          <Flex justify="flex-start" padding="0 11px" margin="20px 0">
            <Text typo="Caption2" colorCode={theme.palette.Gray300}>
              {requestItem.shops.length > 1
                ? `${requestItem.shops[0].shopName} 외 ${requestItem.shops.length - 1}`
                : `${requestItem.shops[0].shopName}`}
            </Text>
          </Flex>
          <Button
            borderRadius="8px"
            fontColor={theme.palette.Normal700}
            onClick={handleNavigate}
          >
            견적서 보기
          </Button>
        </Card>
      )}
    </>
  );
};
