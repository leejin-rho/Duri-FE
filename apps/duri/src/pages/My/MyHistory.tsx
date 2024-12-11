import { useNavigate } from 'react-router-dom';

import { HistoryCard } from '@duri/components/diary/HistoryCard';
import { DetailResponseQuotation } from '@duri/components/my/history/DetailResponseQuotation';
import { Flex, Header, MobileLayout, Modal } from '@duri-fe/ui';
import { useModal } from '@duri-fe/utils';

const MyHistoryPage = () => {
  //   미용일지 조회 데이터 상태관리 필요!
  const navigate = useNavigate();
  const handleNavigate = () => navigate(-1);
  const moveToWriteReview = () => {
    //quotationId 전달
    navigate('/my/review/write', { state: 1 });
  };
  const { isOpenModal, toggleModal } = useModal();
  return (
    <MobileLayout>
      <Header
        backIcon={true}
        title="이용기록"
        titleAlign="start"
        onClickBack={handleNavigate}
      />
      <Flex direction="column" justify="flex-start" gap={20} padding="0 20px">
        <HistoryCard
          visitMonth="10월"
          tagContent="미용 완료"
          designerName="고수쌤"
          shopName="댕댕샵"
          petName="신참이"
          visitDate="2024-10-06 14:00"
          dayOfWeek="금"
          toggleModal={toggleModal}
        />
        {isOpenModal && (
          <Modal isOpen={isOpenModal} toggleModal={toggleModal}>
            <DetailResponseQuotation
              quotationId={1}
              handleCloseButton={toggleModal}
              handleNavigate={moveToWriteReview}
            />
          </Modal>
        )}
      </Flex>
    </MobileLayout>
  );
};

export default MyHistoryPage;
