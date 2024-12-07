import { useNavigate } from 'react-router-dom';

import { Approve, Flex, Text } from '@duri-fe/ui';
import styled from '@emotion/styled';

export const DesignerInfo = () => {
  const navigate = useNavigate();
  const moveToDetail = (designerId: number | string) => {
    navigate(`/portfolio/${designerId}`);
  };
  return (
    <Flex direction="column" align="flex-start" onClick={() => moveToDetail(1)}>
      <DesignerImg
        src={
          'https://s3-alpha-sig.figma.com/img/06a3/855c/666ff7b8f7c18c7121369ac3b3132d84?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kHnZaYFZ9lw11funsRnXLgiFg5Rwsg7mFn7dItWEmC-GWXDmtViBiw1KYXRDvjiutCH3s32c4r2kyPD10nx86gKJxZJWeJMVAfXaTRJVMlkBDHRajnbgbaQXd1s7JKwyNMZVxf64jzNBjyrhdCPZJk8npT8Ubb-OKkhsHGIq2zn9soSWjKqcmV9nsclfu6hFEnQlnUi77tBHKLROr8baKtikIlyYVqvOencSVUwSi~tU2Yq4DE3zhHyt9oVhIFwPcxAmS8M8d245IgP4Oehq2FUHEPyxExXdlVW6iZdRSas0SojaIv3ksehA3EH-8IMraM1RQGixX~iXhGZj6OPPtg__'
        }
      />

      <Text>김댕댕</Text>
      <Flex justify="flex-start">
        <Text>경력 5년</Text>,<Text>30세</Text>,<Text>남성</Text>
      </Flex>
      <Flex direction="column">
        {['반려견 스타일리스트', '펫테이너'].map((item, idx) => (
          <Flex key={idx} justify="flex-start">
            <Text>{item}</Text>
            <Approve width={11} height={10} />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

const DesignerImg = styled.img`
  display: flex;
  width: 160px;
  height: 160px;
  border-radius: 8px;
  object-fit: cover;
`;
