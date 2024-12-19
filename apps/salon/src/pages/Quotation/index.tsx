import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Card,
  Flex,
  MobileLayout,
  Modal,
  PetInfo,
  SalonNavbar,
  SalonTag,
  Text,
  theme,
  WidthFitFlex,
} from '@duri-fe/ui';
import {
  useGetApprovedQuotationList,
  useGetNewRequestList,
  useModal,
} from '@duri-fe/utils';
import styled from '@emotion/styled';
import { DetailQuotation } from '@salon/components/quotation/DetailQuotation';
import { DetailRequest } from '@salon/components/quotation/DetailRequest';
import { TabBarItem } from '@salon/components/quotation/TabBarItem';
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
} from 'date-fns';

const QuotationPage = () => {
  const navigate = useNavigate();

  const [selectedTab, setSelectedTab] = useState<string>('new');

  const [selectedRequestId, setSelectedRequestId] = useState<number | null>(
    null,
  );

  const { isOpenModal, openModal, closeModal } = useModal();

  const { data: newRequestList } = useGetNewRequestList();
  const { data: approvedQuotationList } = useGetApprovedQuotationList();

  /** n시간 전 출력 */
  const calculateTimeAgo = (date: string | Date) => {
    const now = new Date();

    const diffDays = differenceInDays(now, date);
    const diffHours = differenceInHours(now, date);
    const diffMinutes = differenceInMinutes(now, date);

    if (diffDays > 0) {
      return `${diffDays}일 전`;
    } else if (diffHours > 0) {
      return `${diffHours}시간 전`;
    } else {
      return `${diffMinutes}분 전`;
    }
  };

  const handleRequestClick = (requestId: number) => {
    setSelectedRequestId(requestId);
    openModal();
  };

  const handleNavigate = () => {
    navigate('/quotation/reservation');
  };

  const handleToggleTab = (currTab: string) => {
    setSelectedTab(currTab);
  };

  return (
    <MobileLayout backgroundColor={theme.palette.Gray_White}>
      <Flex
        height={60}
        padding="0 20px"
        gap={16}
        justify="flex-start"
        backgroundColor={theme.palette.White}
      >
        <TabBarItem label="견적" selected typo="Body1" fitContent />
        <TabBarItem
          label="예약"
          selected={false}
          typo="Body1Light"
          fitContent
          onClick={handleNavigate}
        />
      </Flex>
      <Flex
        height={48}
        justify="flex-start"
        backgroundColor={theme.palette.White}
      >
        <TabBarItem
          label="새로운 견적 요청"
          selected={selectedTab === 'new'}
          typo={selectedTab === 'new' ? 'Title3' : 'Body2Light'}
          onClick={() => handleToggleTab('new')}
        />
        <TabBarItem
          label="답장한 견적"
          selected={selectedTab === 'approved'}
          typo={selectedTab === 'approved' ? 'Title3' : 'Body2Light'}
          onClick={() => handleToggleTab('approved')}
        />
      </Flex>

      {selectedTab === 'new' ? (
        newRequestList && newRequestList.length > 0 ? (
          <Flex direction="column" gap={8} padding="30px 20px">
            {newRequestList.map(
              ({
                requestId,
                petImage,
                petName,
                petBreed,
                petAge,
                petNeutering,
                petGender,
                petWeight,
              }) => (
                <CardButton
                  key={requestId}
                  onClick={() => handleRequestClick(requestId)}
                >
                  <Card borderRadius={12} padding="6px" shadow="none">
                    <PetInfo
                      themeVariant="medium"
                      image={petImage}
                      name={petName}
                      breed={petBreed}
                      age={petAge}
                      neutering={petNeutering}
                      gender={petGender}
                      weight={petWeight}
                    />
                  </Card>
                </CardButton>
              ),
            )}
          </Flex>
        ) : (
          // TODO : 임시 대체뷰 수정 필요
          <FlexGrow>
            <Text>새로운 요청이 없어요.</Text>
          </FlexGrow>
        )
      ) : approvedQuotationList && approvedQuotationList.length > 0 ? (
        <Flex direction="column" gap={8} padding="30px 20px">
          {approvedQuotationList.map(
            ({
              requestId,
              petImage,
              petName,
              petBreed,
              petAge,
              petNeutering,
              petGender,
              petWeight,
              status,
              requestCreatedAt,
            }) => (
              <CardButton
                key={requestId}
                onClick={() => handleRequestClick(requestId)}
              >
                <PetInfoCard
                  borderRadius={12}
                  padding="6px"
                  direction="row"
                  shadow="none"
                >
                  <PetInfo
                    themeVariant="medium"
                    image={petImage}
                    name={petName}
                    breed={petBreed}
                    age={petAge}
                    neutering={petNeutering}
                    gender={petGender}
                    weight={petWeight}
                  />
                  <TagWrapper margin="0 14px">
                    <SalonTag
                      content={
                        status === 'approved'
                          ? '수락됨'
                          : status === 'expired'
                            ? '만료됨'
                            : '대기중'
                      }
                      bg={
                        status === 'approved'
                          ? theme.palette.Normal100
                          : theme.palette.Gray50
                      }
                      colorCode={
                        status === 'approved'
                          ? theme.palette.Normal700
                          : theme.palette.Gray300
                      }
                      typo="Label3"
                      borderRadius={99}
                      width="auto"
                      height={26}
                      padding="6px 10px"
                    />
                  </TagWrapper>
                  <TimeAgoText
                    typo="Caption3"
                    colorCode={theme.palette.Gray300}
                  >
                    {requestCreatedAt && calculateTimeAgo(requestCreatedAt)}
                  </TimeAgoText>
                </PetInfoCard>
              </CardButton>
            ),
          )}
        </Flex>
      ) : (
        // TODO : 임시 대체뷰 수정 필요
        <FlexGrow>
          <Text>답장한 견적이 없어요.</Text>
        </FlexGrow>
      )}

      <SalonNavbar />

      {selectedRequestId && (
        <>
          <Modal
            title="요청서"
            margin="20px"
            isOpen={isOpenModal && selectedTab === 'new'}
            toggleModal={closeModal}
          >
            <DetailRequest
              requestId={selectedRequestId}
              closeModal={closeModal}
            />
          </Modal>

          <Modal
            title="견적서"
            margin="20px"
            isOpen={isOpenModal && selectedTab === 'approved'}
            toggleModal={closeModal}
          >
            <DetailQuotation
              requestId={selectedRequestId}
              closeModal={closeModal}
            />
          </Modal>
        </>
      )}
    </MobileLayout>
  );
};

const FlexGrow = styled(Flex)`
  flex-grow: 1;
`;

const TagWrapper = styled(WidthFitFlex)`
  flex-shrink: 0;
`;

const CardButton = styled.button`
  width: 100%;
`;

const PetInfoCard = styled(Card)`
  position: relative;
`;

const TimeAgoText = styled(Text)`
  position: absolute;
  bottom: 16px;
  right: 16px;
`;

export default QuotationPage;
