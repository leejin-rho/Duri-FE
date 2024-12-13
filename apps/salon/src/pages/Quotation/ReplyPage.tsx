import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  Button,
  Card,
  CheckCircle,
  Flex,
  FrontBtn,
  Header,
  HeightFitFlex,
  MobileLayout,
  Modal,
  PetInfo,
  SalonNavbar,
  Text,
  theme,
  WidthFitFlex,
} from '@duri-fe/ui';
import {
  useGetDetailRequest,
  useModal,
  usePostQuotation,
} from '@duri-fe/utils';
import { defaultQuotationFormData } from '@salon/assets/data/quotation';
import { QuotationFormData } from '@salon/assets/types/quotation';
import ReplyForm from '@salon/components/quotation/ReplyForm';
import ReplyFormDetail from '@salon/components/quotation/ReplyFormDetail';
import StepTag from '@salon/components/quotation/StepTag';

const ReplyPage = () => {
  const navigate = useNavigate();
  const param = useParams();
  const requestId = param.requestId ? parseInt(param.requestId, 10) : 0;
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<QuotationFormData>({
    ...defaultQuotationFormData,
    requestId,
  });
  const [isValid, setIsValid] = useState<boolean>(false);

  const { data: request, timeList } = useGetDetailRequest(requestId);

  const { mutateAsync: submitQuotation, error: postQuotationError } =
    usePostQuotation();

  const { isOpenModal, openModal, closeModal } = useModal();

  const { userName, userPhone, pet } = request || {};

  const onNextStep = async () => {
    if (step === 1) {
      setStep(2);
      setIsValid(false); // 초기화
    } else {
      await handleSubmit();
    }
  };

  const handleSubmit = async () => {
    await submitQuotation(formData);

    if (postQuotationError) {
      // TODO: 에러 처리
      console.error(postQuotationError);
      return;
    } else {
      openModal();
    }
  };

  const onCloseModal = () => {
    closeModal();
    navigate('/');
  };

  if (!requestId) return null;

  return (
    <MobileLayout backgroundColor={theme.palette.Gray_White}>
      <Header
        backIcon
        title="요청서 보기"
        titleAlign="start"
        backgroundColor={theme.palette.White}
        onClickBack={() => navigate(-1)}
      />

      <Flex direction="column" gap={2}>
        {/** 펫 정보 */}
        <HeightFitFlex
          padding="14px 20px"
          backgroundColor={theme.palette.White}
        >
          {pet && (
            <Card height="235" borderRadius={16} padding="12px 16px">
              <PetInfo
                themeVariant="spacious"
                image={pet.image}
                name={pet.name}
                breed={pet.breed}
                age={pet.age}
                weight={pet.weight}
                gender={pet.gender}
                neutering={pet.neutering}
                character={pet.character}
                diseases={pet.diseases}
              />
            </Card>
          )}
        </HeightFitFlex>

        {/** 보호자 정보 */}
        <Flex
          height={48}
          padding="0 20px"
          justify="space-between"
          backgroundColor={theme.palette.White}
        >
          <Text typo="Title3" colorCode={theme.palette.Black}>
            보호자
          </Text>
          <WidthFitFlex gap={28}>
            {request && (
              <>
                <Text typo="Body3" colorCode={theme.palette.Black}>
                  {userName}
                </Text>
                <Text typo="Body4" colorCode={theme.palette.Gray500}>
                  {userPhone}
                </Text>
              </>
            )}
          </WidthFitFlex>
        </Flex>

        <Flex
          direction="column"
          align="flex-start"
          padding="0 20px 145px 20px"
          backgroundColor={theme.palette.White}
        >
          {request &&
            (step === 1 ? (
              <>
                <Flex padding="16px 0" justify="flex-start" gap={4}>
                  <StepTag step={1} label="기본사항 입력" status="active" />
                  <StepTag
                    step={2}
                    label="예상금액 입력"
                    status="disabled"
                    onClick={onNextStep}
                  />
                </Flex>
                <ReplyForm
                  request={request}
                  selectedTimeList={timeList}
                  setFormData={setFormData}
                  setIsValid={setIsValid}
                />
              </>
            ) : (
              <>
                <Flex padding="16px 0" justify="flex-start" gap={4}>
                  <StepTag
                    step={1}
                    label="기본사항 입력"
                    status="done"
                    onClick={() => setStep(1)}
                  />
                  <StepTag step={2} label="예상금액 입력" status="active" />
                </Flex>
                <ReplyFormDetail
                  request={request}
                  formData={formData}
                  setFormData={setFormData}
                  setIsValid={setIsValid}
                />
              </>
            ))}
        </Flex>
      </Flex>

      {/** 하단 버튼 */}
      <FrontBtn
        bg={isValid ? theme.palette.Black : theme.palette.Gray200}
        padding="10px 0"
        height="53px"
        borderRadius="0"
        onClick={isValid ? onNextStep : undefined}
        disabled={!isValid}
      >
        <Text typo="Body2" colorCode={theme.palette.White}>
          {step === 1 ? '다음' : '견적서 발송'}
        </Text>
      </FrontBtn>
      <SalonNavbar />

      <Modal
        isOpen={isOpenModal}
        toggleModal={closeModal}
        closeIcon={false}
        margin="40px"
      >
        <Flex direction="column" padding="12px 28px" gap={36}>
          <CheckCircle width={56} />
          <Flex direction="column">
            <Text
              typo="Body2"
              colorCode={theme.palette.Black}
              margin="0 0 18px 0"
            >
              견적서 보내기 완료!
            </Text>
            <Text typo="Caption2" colorCode={theme.palette.Gray400}>
              보낸 견적서는
            </Text>
            <Text typo="Caption2" colorCode={theme.palette.Gray400}>
              보관함에서 확인이 가능해요
            </Text>
          </Flex>
          <Button
            onClick={onCloseModal}
            width="100%"
            borderRadius="8px"
            bg={theme.palette.Black}
          >
            <Text typo="Body3" colorCode={theme.palette.White}>
              확인
            </Text>
          </Button>
        </Flex>
      </Modal>
    </MobileLayout>
  );
};

export default ReplyPage;
