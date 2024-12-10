import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import { Card, Flex, FrontBtn, Header, HeightFitFlex, MobileLayout, Modal, PetInfo, SalonNavbar, Text, theme, WidthFitFlex } from "@duri-fe/ui";
import { useGetDetailRequest, useModal } from "@duri-fe/utils";
import ReplyForm from "@salon/components/quotation/ReplyForm";
import ReplyFormDetail from "@salon/components/quotation/ReplyFormDetail";

export interface QuotationFormData {
  requestId: number;
  priceDetail: {
    groomingPrice: number;
    additionalPrice: number;
    specialCarePrice: number;
    designPrice: number;
    customPrice: number;
    totalPrice: number;
  };
  memo: string;
  startDateTime: string;
  endDateTime: string;
}

const ReplyPage = () => {
  const navigate = useNavigate();
  const param = useParams();
  const requestId = param.requestId ? parseInt(param.requestId, 10) : 0;
  const [step, setStep] = useState<number>(1);

  const { data: request } = useGetDetailRequest(requestId);

  const { control, handleSubmit, setValue, trigger, formState: {isValid} } = useForm({
    mode: 'onChange',
    defaultValues: {
      requestId: requestId,
      priceDetail: {
        groomingPrice: 0,
        additionalPrice: 0,
        specialCarePrice: 0,
        designPrice: 0,
        customPrice: 0,
        totalPrice: 0
      },
      memo: '',
      startDateTime: '',
      endDateTime: ''
    }
  });

  const { isOpenModal, openModal, closeModal } = useModal();
  
  const onNextStep = async () => {
    const isValidStep = await trigger();
    if (isValidStep) {
      setStep(step + 1);
    }
  };

  const onSubmit = (data: QuotationFormData) => {
    console.log(data);
    // API 호출 필요
  };

  if (!requestId) return null;

  return (
    <MobileLayout backgroundColor={theme.palette.Gray_White}>
      <Header backIcon title="요청서 보기" titleAlign="start" backgroundColor={theme.palette.White} onClickBack={() => navigate(-1)}/>
      
      <Flex direction="column" gap={2}>
        {/** 펫 정보 */}
        <HeightFitFlex padding="14px 20px"  backgroundColor={theme.palette.White}>
          <Card height="235" borderRadius={16} padding="12px 16px">
            {request && <PetInfo 
              themeVariant="spacious"
              image={request.pet.image}
              name={request.pet.name}
              breed={request.pet.breed}
              age={request.pet.age}
              weight={request.pet.weight}
              gender={request.pet.gender}
              neutering={request.pet.neutering}
              character={request.pet.character}
              diseases={request.pet.diseases}
            /> }
          </Card>
        </HeightFitFlex>
        
        {/** 보호자 정보 */}
        <Flex height={48} padding="0 20px" justify="space-between" backgroundColor={theme.palette.White}>
          <Text typo="Title3" colorCode={theme.palette.Black}>보호자</Text>
          <WidthFitFlex gap={28}>
            <Text typo="Body3" colorCode={theme.palette.Black}>김김김</Text>
            <Text typo="Body4" colorCode={theme.palette.Gray500}>010-7664-6286</Text>
          </WidthFitFlex>
        </Flex>

        <Flex>
          {step === 1 ? (
            <ReplyForm control={control} setValue={setValue} />
          ) : (
            <ReplyFormDetail control={control} setValue={setValue}  />
          )}
        </Flex>
      </Flex>
      
      {/** 하단 버튼 */}
      <FrontBtn
        bg={isValid ? theme.palette.Black : theme.palette.Gray200}
        padding="10px 0"
        height="53px"
        borderRadius="0"
        onClick={step === 1 ? onNextStep : openModal}
        disabled={!isValid}
      >
        <Text typo="Title3" colorCode={theme.palette.White}>
          {step === 1 ? '다음' : '견적서 발송'}
        </Text>
      </FrontBtn>
      <SalonNavbar />

      <Modal title="요청서 제출" isOpen={isOpenModal} toggleModal={closeModal}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <button type="submit">확인</button>
        </form>
      </Modal>
    </MobileLayout>
  );
}

export default ReplyPage;