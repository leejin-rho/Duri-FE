import { useEffect } from "react";

import { Flex, Seperator, Text, TextField, theme } from "@duri-fe/ui";
import { RequestDetailResponse } from "@duri-fe/utils";
import styled from "@emotion/styled";
import { QuotationFormData } from "@salon/assets/types/quotation";

import { AmountInput } from "./AmountInput";

interface ReplyFormDetailProps {
  request: RequestDetailResponse['response'];
  formData: QuotationFormData;
  setFormData: React.Dispatch<React.SetStateAction<QuotationFormData>>;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReplyFormDetail = ({
  request,
  formData,
  setFormData,
  setIsValid,
}: ReplyFormDetailProps) => {
  const { groomingMenu, additionalGrooming, specialCare, designCut, otherRequests } = request.quotationDetails;
  const { groomingPrice, additionalPrice, specialCarePrice, designPrice, customPrice, totalPrice } = formData.priceDetail;

  const handleChange = (key: keyof QuotationFormData['priceDetail'], value: number) => {
    setFormData((prev) => ({
      ...prev,
      priceDetail: {
        ...prev.priceDetail,
        [key]: value,
      },
    }));
  }

  const handleChangeMemo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      memo: e.target.value,
    }));
  }

  useEffect(() => {
    setIsValid(totalPrice > 0);
  }, [totalPrice, setIsValid]);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      priceDetail: {
        ...prev.priceDetail,
        totalPrice: groomingPrice + additionalPrice + specialCarePrice + designPrice + customPrice,
      },
    }))
  }, [groomingPrice, additionalPrice, specialCarePrice, designPrice, customPrice, setFormData]);

  return (
    <Flex direction="column" gap={24} padding="24px 0">

      <Flex direction="column" align="flex-start" gap={8}>
        <Text typo="Title2" colorCode={theme.palette.Black}>미용 메뉴</Text>
        <Flex direction="column" padding="20px" gap={32}>

          {/** 기본미용 */}
          {groomingMenu && 
            <AmountInput title="기본미용" menu={groomingMenu} value={groomingPrice} onChange={(value) => handleChange('groomingPrice', value)} />
          }

          {/** 추가미용 */}
          {additionalGrooming &&
            <AmountInput title="추가미용" menu={additionalGrooming} value={additionalPrice} onChange={(value) => handleChange('additionalPrice', value)} />
          }

          {/** 스페셜 케어 */}
          {specialCare &&
            <AmountInput title="스페셜 케어" menu={specialCare} value={specialCarePrice} onChange={(value) => handleChange('specialCarePrice', value)} />
          }

          {/** 디자인 컷 */}
          {designCut &&
            <AmountInput title="디자인 컷" menu={designCut} value={designPrice} onChange={(value) => handleChange('designPrice', value)} />
          }

          {/** 기타 요청 사항 */}
          {otherRequests &&
            <AmountInput title="기타 요청사항" menu={otherRequests} value={customPrice} onChange={(value) => handleChange('customPrice', value)} />
          }

          <Seperator mode="dotted" colorCode={theme.palette.Gray300} />

          {/** 총 금액 */}
          <Flex justify="flex-start" gap={24}>
            <NonShrinkFlex width={112} justify="flex-start">
              <Text typo="Body3" colorCode={theme.palette.Black}>결제 예상 금액</Text>
            </NonShrinkFlex>
            <Flex direction="column" align="flex-start" gap={12}>
              <Flex gap={8}>
                <TextField 
                  value={totalPrice}
                  widthPer="100%"
                  placeholder="미용 예상 가격"
                  isNoBorder
                  shadow="0px 0px 4px 0px rgba(0, 0, 0, 0.10)"
                />
                <Text typo="Body3">원</Text>
              </Flex>
            </Flex>
          </Flex>

          <Flex direction="column" align="flex-start" gap={8}>
            <Text typo="Title2" colorCode={theme.palette.Black}>기타 요청사항</Text>
            <Text typo="Label3" colorCode={theme.palette.Gray400}>예약자가 참고할 점이 있다면 작성해주세요!</Text>
            <TextField value={formData.memo} onChange={handleChangeMemo} multiline widthPer="100%" height={108} placeholder="예약자가 참고할 점이 있다면 작성해주세요." />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  ); 
}

const NonShrinkFlex = styled(Flex)`
  flex-shrink: 0;
`

export default ReplyFormDetail;