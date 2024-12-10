import { Control, Controller, UseFormSetValue } from "react-hook-form";

import { Flex } from "@duri-fe/ui";
import { QuotationFormData } from "@salon/pages/Quotation/ReplyPage";

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
  control: Control<QuotationFormData>;
  setValue: UseFormSetValue<QuotationFormData>;
  // getValue: UseFormSetValue<QuotationFormData>;
}

const ReplyFormDetail = ({
  control,
  // setValue,
  // getValue
}: ReplyFormProps) => {
  return (
    <Flex>
      <Controller
        name="priceDetail.groomingPrice"
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
  ); 
}

export default ReplyFormDetail;