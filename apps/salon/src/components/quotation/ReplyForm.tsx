import { Control, Controller, UseFormSetValue } from "react-hook-form";

import { Flex, ProfileImage, Text, theme, WidthFitFlex } from "@duri-fe/ui";
import { RequestDetailResponse } from "@duri-fe/utils";
import { QuotationFormData } from "@salon/pages/Quotation/ReplyPage";

import StepTag from "./StepTag";

/*
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
*/

interface ReplyFormProps {
  request: RequestDetailResponse['response'] | undefined;
  control: Control<QuotationFormData>;
  setValue: UseFormSetValue<QuotationFormData>;
  // getValue: UseFormGetValues<QuotationFormData>;
}

const ReplyForm = ({
  request,
  control,
  // setValue,
  // getValue
}: ReplyFormProps) => {
  return (
    <Flex direction="column" gap={24}>
      
      {/** Step */}
      <Flex padding="16px 0 0 0" justify="flex-start" gap={4}>
        <StepTag step={1} label="기본사항 입력" status="active"/>
        <StepTag step={2} label="예상금액 입력" status="disabled"/>
      </Flex>

      {/** 미용사 */}
      <Flex direction="column" align="flex-start" gap={8}>
        <Text typo="Title2" colorCode={theme.palette.Black}>디자이너 선택</Text>
        <Text typo="Label3" colorCode={theme.palette.Gray400}>담당 디자이너를 선택해주세요.</Text>
        <WidthFitFlex padding="8px 16px" margin="4px 0" gap={12} backgroundColor={theme.palette.Gray_White} borderRadius={12}>
          <ProfileImage width={48} height={48} borderRadius={48} src={request?.groomer.image} />
          <Text typo="Label2">{request?.groomer.name}</Text>
        </WidthFitFlex>
      </Flex>

      <Flex direction="column" align="flex-start" gap={8}>
        <Text typo="Title2" colorCode={theme.palette.Black}>희망 날짜</Text>
        <Text typo="Label3" colorCode={theme.palette.Gray400}>예약자분이 희망하는 예약 날짜에요.</Text>
        <WidthFitFlex padding="8px 16px" margin="4px 0" gap={12} backgroundColor={theme.palette.Gray_White} borderRadius={12}>
          <Text typo="Label2">{request?.quotationDetails.day}</Text>
        </WidthFitFlex>
      </Flex>

      <Flex direction="column" align="flex-start" gap={8}>
        <Text typo="Title2" colorCode={theme.palette.Black}>희망 예약 시간</Text>
        <Text typo="Label3" colorCode={theme.palette.Gray400}>예약자분이 희망하는 예약 날짜에요.</Text>
        
      </Flex>

      <Flex direction="column" align="flex-start" gap={8}>
        <Text typo="Title2" colorCode={theme.palette.Black}>미용 제안 시간</Text>
        <Text typo="Label3" colorCode={theme.palette.Gray400}>희망 예약 시간을 보고 사장님이 미용가능한 시간을 지정해주세요.</Text>
        <Controller
          name="startDateTime"
          control={control}
          render={({ field }) => (
            <input
              type="number"
              {...field}
              placeholder="그루밍 가격"
            />
          )}
        />
      </Flex>
    </Flex>
  ); 
}

export default ReplyForm;