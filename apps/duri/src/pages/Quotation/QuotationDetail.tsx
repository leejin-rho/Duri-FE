import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { IncomingQuotation } from '@duri/components/quotation/IncomingQuotation';
import { RequestInfo } from '@duri/components/quotation/RequestInfo';
import { SalonCard } from '@duri/components/quotation/SalonCard';
import {
  Card,
  DuriNavbar,
  Flex,
  Header,
  MobileLayout,
  Text,
  theme,
} from '@duri-fe/ui';
import { ShopType, useGeolocation, useGetQuotationList } from '@duri-fe/utils';

interface QuotationType {
  requestId: number;
  quotationId: number;
  shopName: string;
  totalPrice: number | null;
}

const QuotationDetailPage = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const requestId = location.state; //요청 id
  const { quotationId } = useParams(); //견적서 id
  const { coordinates } = useGeolocation();

  const [lat, setLat] = useState<number | null>(null);
  const [lon, setLon] = useState<number | null>(null);

  const [bestDistanceShop, setBestDistanceShop] = useState<ShopType | null>();
  const [bestPriceShop, setBestPriceShop] = useState<ShopType | null>();
  const [bestRatingShop, setBestRatingShop] = useState<ShopType | null>();
  const [bestShop, setBestShop] = useState<ShopType | null>();
  const [quotationList, setQuotationList] = useState<QuotationType[] | null>(
    null,
  );

  const { data: quotationListData } = useGetQuotationList(
    Number(quotationId),
    lat,
    lon,
  );

  const handleClickBackButton = () => {
    navigate(-1);
  };

  const handleClickPayment = (quotationId: number) => {
    navigate('/payment', {
      state: {
        quotationId: quotationId,
      },
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (coordinates) {
      setLat(coordinates.lat);
      setLon(coordinates.lng);
    }
  }, [coordinates]);

  useEffect(() => {
    if (quotationListData) {
      const { bestDistanceShop, bestPriceShop, bestRatingShop, bestShop } =
        quotationListData;
      setBestDistanceShop(bestDistanceShop);
      setBestPriceShop(bestPriceShop);
      setBestRatingShop(bestRatingShop);
      setBestShop(bestShop);
      setQuotationList(quotationListData.quotations);

      console.log(quotationListData);
    }
  }, [quotationListData]);

  return (
    <MobileLayout backgroundColor={theme.palette.Gray_White}>
      <Header
        title="요청서 및 견적서"
        backIcon
        onClickBack={handleClickBackButton}
      />
      <Flex direction="column" padding="0 20px" margin="0 0 100px 0">
        <Card borderRadius={16} padding="26px 28px">
          <RequestInfo
            requestId={Number(requestId)}
            createdAt={
              quotationListData?.createdAt === undefined
                ? null
                : new Date(quotationListData?.createdAt)
            }
            expiredAt={
              quotationListData?.expiredAt === undefined
                ? null
                : new Date(quotationListData?.expiredAt)
            }
          />
        </Card>
        <>
          <Flex
            direction="column"
            margin="26px 0 0 0"
            gap={12}
            align="flex-start"
          >
            <Text typo="Title2">여기 샵이 좋대!</Text>
            <Text typo="Caption1" colorCode={theme.palette.Gray400}>
              견적서가 들어온 샵들 중 카테고리별로 <br />
              1등샵을 추천해드려요
            </Text>
          </Flex>
          <Flex direction="column" margin="16px 0 0 0" gap={4}>
            <Flex gap={4}>
              <SalonCard
                title="거리순"
                salonName={bestDistanceShop ? bestDistanceShop.shopName : '-'}
                imageURL={bestDistanceShop ? bestDistanceShop.shopImage : ''}
              />
              <SalonCard
                title="가격순"
                salonName={bestPriceShop ? bestPriceShop.shopName : '-'}
                imageURL={bestPriceShop ? bestPriceShop.shopImage : ''}
              />
            </Flex>
            <Flex gap={4}>
              <SalonCard
                title="평점순"
                salonName={bestRatingShop ? bestRatingShop.shopName : '-'}
                imageURL={bestRatingShop ? bestRatingShop.shopImage : ''}
              />
              <SalonCard
                title="통합"
                salonName={bestShop ? bestShop.shopName : '-'}
                imageURL={bestShop ? bestShop.shopImage : ''}
                bg={theme.palette.Normal50}
              />
            </Flex>
          </Flex>
        </>

        {
          <Flex direction="column" align="flex-start" margin="31px 0 17px">
            <Text typo="Title2">들어온 견적</Text>
            <Flex direction="column" margin="17px 0 0 0" gap={8}>
              {quotationList?.map(({ quotationId, requestId, shopName, totalPrice }) => (
                <IncomingQuotation
                  key={quotationId}
                  quotationId={quotationId} //요청에 대한 응답견적서
                  requestId={Number(requestId)} //사용자 요청 견적서
                  salonName={shopName}
                  price={totalPrice}
                  onSelect={() => handleClickPayment(quotationId)}
                />
              ))}
            </Flex>
          </Flex>
        }
      </Flex>
      <DuriNavbar />
    </MobileLayout>
  );
};
export default QuotationDetailPage;
