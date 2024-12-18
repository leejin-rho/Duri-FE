import { Flex, Modal, NextArrow, Text, theme } from '@duri-fe/ui';
import { useModal } from '@duri-fe/utils';
import styled from '@emotion/styled';
import { format } from 'date-fns';

import { RequestDetailQuotation } from './RequestDetailQuotation';

interface RequestInfoProps {
  requestId: number;
  createdAt: Date | null;
  expiredAt: Date | null;
  expired?: boolean;
  margin?: string;
  shopName: string;
}

export const RequestInfo = ({
  shopName,
  requestId,
  createdAt,
  expiredAt,
  expired = false,
  margin,
}: RequestInfoProps) => {
  const { isOpenModal, toggleModal } = useModal();
  return (
    <Flex
      direction="column"
      gap={20}
      padding="0 11px"
      margin={margin ?? `${margin}`}
      onClick={toggleModal}
    >
      <FlexButton gap={8} justify="flex-start">
        <Text
          typo="Title3"
          colorCode={expired ? theme.palette.Gray300 : theme.palette.Normal700}
        >
          {shopName}
        </Text>
        <NextArrow width={22} height={23} />
      </FlexButton>
      <Flex direction="column" gap={12}>
        <Flex justify="space-between">
          <Text typo="Label4" colorCode={theme.palette.Gray300}>
            요청서 전송 일자
          </Text>
          {createdAt ? (
            <Text typo="Caption2" colorCode={theme.palette.Gray300}>
              {format(createdAt, 'yyyy-MM-dd HH:mm')}
            </Text>
          ) : (
            <Text typo="Caption2" colorCode={theme.palette.Gray300}>
              정보 없음
            </Text>
          )}
        </Flex>
        <Flex justify="space-between">
          <Text typo="Label4" colorCode={theme.palette.Alert}>
            요청서 마감 시간
          </Text>
          {expiredAt ? (
            <Text typo="Caption2" colorCode={theme.palette.Gray300}>
              {format(expiredAt, 'yyyy-MM-dd HH:mm')}
            </Text>
          ) : (
            <Text typo="Caption2" colorCode={theme.palette.Gray300}>
              정보 없음
            </Text>
          )}
        </Flex>
      </Flex>
      <Modal isOpen={isOpenModal} toggleModal={toggleModal} title="요청서">
        <RequestDetailQuotation requestId={requestId} />
      </Modal>
    </Flex>
  );
};

const FlexButton = styled(Flex)`
  cursor: pointer;
`;
