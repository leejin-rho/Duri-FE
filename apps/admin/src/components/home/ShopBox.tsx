import { useEffect, useState } from 'react';

import {
  DownArrow,
  Flex,
  HeightFitFlex,
  Text,
  theme,
  UpArrow,
} from '@duri-fe/ui';
import styled from '@emotion/styled';

export interface ShopInfoBoxType {
  shopName: string;
  shopAddress: string;
  businessRegistration: string;
  groomerLicense: string;
  designerName: string;
  history: number;
  license: string[];
}

export const ShopInfoBox = ({
  shopName,
  shopAddress,
  businessRegistration,
  groomerLicense,
  designerName,
  history,
  license,
}: ShopInfoBoxType) => {
  const [isBoxOpen, setIsBoxOpen] = useState<boolean>(false);
  const [careerYear, setCareerYear] = useState<number>(0);
  const [careerMonth, setCareerMonth] = useState<number>(0);

  useEffect(() => {
    if (history !== 0) {
      setCareerYear(Math.floor(history / 12));
      setCareerMonth(history % 12);
    }
  }, [history]);

  const handleToggleButtonClick = () => {
    setIsBoxOpen(!isBoxOpen);
  };

  return (
    <BoxWrapper
      direction="column"
      gap={29}
      backgroundColor={theme.palette.Gray_White}
    >
      <Flex direction="column" gap={4} align="start">
        <Flex justify="space-between">
          <Text typo="Body2">{shopName}</Text>
          <button onClick={handleToggleButtonClick}>
            {isBoxOpen ? <UpArrow width={23} /> : <DownArrow width={23} />}
          </button>
        </Flex>
        <Text typo="Caption4" colorCode={theme.palette.Gray400}>
          {shopAddress}
        </Text>
      </Flex>
      {isBoxOpen ? (
        <Flex direction="column" align="start" gap={28}>
          <ShopInfoLine>
            <Text typo="Label2">매장 이름</Text>
            <Text typo="Caption4">{shopName}</Text>
          </ShopInfoLine>

          <ShopInfoLine>
            <Text typo="Label2">매장 위치</Text>
            <Text typo="Caption4">{shopAddress}</Text>
          </ShopInfoLine>

          <ShopInfoLine>
            <Text typo="Label2">사업자 등록번호</Text>
            <Text typo="Caption4">{businessRegistration}</Text>
          </ShopInfoLine>

          <ShopInfoLine>
            <Text typo="Label2">미용사 면허번호</Text>
            <Text typo="Caption4">{groomerLicense}</Text>
          </ShopInfoLine>

          <ShopInfoLine>
            <Text typo="Label2">매장주</Text>
            <Text typo="Caption4">{designerName}</Text>
          </ShopInfoLine>

          <ShopInfoLine>
            <Text typo="Label2">경력</Text>
            <Text typo="Caption4">{`${careerYear ? `${careerYear}년` : ''} ${careerMonth ? `${careerMonth}개월` : ''}`}</Text>
          </ShopInfoLine>

          <ShopInfoLine align="start">
            <Text typo="Label2">자격</Text>
            <ul>
              {license.map((item, index) => (
                <li key={index}>
                  <Text typo="Caption4">{item}</Text>
                </li>
              ))}
            </ul>
          </ShopInfoLine>
        </Flex>
      ) : null}
    </BoxWrapper>
  );
};

const BoxWrapper = styled(HeightFitFlex)`
  width: 100%;
  border-radius: 12px;
  padding: 20px 12px 20px 20px;
  box-sizing: border-box;
  max-width: 375px;
  position: relative;
`;

const ShopInfoLine = styled(HeightFitFlex)`
  justify-content: flex-start;
  gap: 32px;
`;
