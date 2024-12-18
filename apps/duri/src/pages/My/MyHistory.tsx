import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { HistoryCard } from '@duri/components/diary/HistoryCard';
import { ResponseQuotationHistory } from '@duri/components/my/history/ResponseQuotationHistory';
import {
  DuriNavbar,
  Flex,
  Header,
  MobileLayout,
  Modal,
  Text,
} from '@duri-fe/ui';
import { useGetVisitHistory, useModal } from '@duri-fe/utils';

const MyHistoryPage = () => {
  //   미용일지 조회 데이터 상태관리 필요!
  const navigate = useNavigate();
  const handleNavigate = () => navigate('/my');

  const { data: historyData } = useGetVisitHistory();

  const { isOpenModal, toggleModal } = useModal();

  const [requestId, setRequestId] = useState<number>();

  // 모달 토글 함수
  const handleToggleModal = (requestId: number) => {
    setRequestId(requestId);
    toggleModal();
  };

  return (
    <MobileLayout>
      <Header
        backIcon
        title="이용기록"
        titleAlign="start"
        onClickBack={handleNavigate}
      />
      <Flex
        direction="column"
        justify="flex-start"
        gap={20}
        padding="0 20px"
        margin="40px 0 133px"
      >
        {historyData && historyData.length > 0 ? (
          historyData.map(({ month, historyList }) => (
            <div key={month}>
              {historyList.map((history) => (
                <HistoryCard
                  key={history.requestId}
                  visitMonth={`${month}월`}
                  tagContent={history.complete ? '미용 완료' : '미완료'}
                  designerName={history.groomerName}
                  shopName={history.shopName}
                  petName={history.petName}
                  visitDate={history.startDate}
                  dayOfWeek={history.day}
                  toggleModal={() => handleToggleModal(history.requestId)}
                />
              ))}
            </div>
          ))
        ) : (
          <Text>이용 기록이 없습니다.</Text>
        )}
        {isOpenModal && requestId && (
          <Modal isOpen={isOpenModal} toggleModal={toggleModal}>
            {/* 리뷰용 견적응답서 UI 컴포넌트 */}
            <ResponseQuotationHistory
              requestId={requestId}
              handleCloseButton={toggleModal}
            />
          </Modal>
        )}
      </Flex>
      <DuriNavbar />
    </MobileLayout>
  );
};

export default MyHistoryPage;
