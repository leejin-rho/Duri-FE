import { ShopInfoBox } from '@admin/components/home/ShopBox';
import {
  Button,
  Doori,
  Flex,
  HeightFitFlex,
  MobileLayout,
  Text,
  theme,
} from '@duri-fe/ui';
import {
  UseGetApprovedShopList,
  UseGetRequestShopList,
  UsePostApproveRequest,
  UsePostRejectRequest,
} from '@duri-fe/utils';
import styled from '@emotion/styled';

const Home = () => {
  const { data: requestShopListData } = UseGetRequestShopList({});
  const { data: approvedShopListData } = UseGetApprovedShopList({});
  const { mutate: mutateApproveShop } = UsePostApproveRequest({
    options: {
      onSuccess: () => {
        console.log('Shop Approved successfully!');
      },
      onError: (err) => {
        console.error('Error creating user:', err);
      },
    },
  });
  const { mutate: mutateRejectShop } = UsePostRejectRequest({
    options: {
      onSuccess: () => {
        console.log('Shop Rejected successfully!');
      },
      onError: (err) => {
        console.error('Error creating user:', err);
      },
    },
  });

  const handleApproveButtonClick = async (shopId: number) => {
    mutateApproveShop({ shopId: shopId });
  };

  const handleRejectButtonClick = async (shopId: number) => {
    mutateRejectShop({ shopId: shopId });
  };

  return (
    <MobileLayout>
      <Flex direction="column" justify="start" padding="72px 21px">
        <HeightFitFlex justify="start" align="end" gap={10}>
          <Doori width={76} />
          <Text typo="Title3" margin="0 0 -1px">
            관리자
          </Text>
        </HeightFitFlex>

        <HeightFitFlex direction="column" align="start" margin="56px 0 28px">
          <Text typo="Caption1">입점 요청된 가게를 확인해주세요.</Text>
          <Text typo="Title2">들어온 입점 목록</Text>
        </HeightFitFlex>

        <HeightFitFlex direction="column" gap={8} padding="0 6px">
          {requestShopListData &&
            requestShopListData.map((shop) => (
              <>
                <ShopInfoBox
                  key={shop.shop.shopId}
                  shopName={shop.shop.shopName}
                  shopAddress={shop.shop.shopAddress}
                  businessRegistration={shop.shop.businessRegistrationNumber}
                  groomerLicense={shop.shop.groomerLicenseNumber}
                  designerName={shop.groomer.groomerName}
                  history={shop.groomer.groomerAge}
                  license={shop.groomer.license}
                />
                <HeightFitFlex gap={8} padding="0 14px">
                  <FlexBtn
                    flex="123"
                    bg={theme.palette.Gray20}
                    onClick={() => handleRejectButtonClick(shop.shop.shopId)}
                  >
                    <Text typo="Body3">입점 거절</Text>
                  </FlexBtn>
                  <FlexBtn
                    flex="173"
                    bg={theme.palette.Black}
                    onClick={() => handleApproveButtonClick(shop.shop.shopId)}
                  >
                    <Text typo="Body3" colorCode={theme.palette.White}>
                      입점 수락
                    </Text>
                  </FlexBtn>
                </HeightFitFlex>
              </>
            ))}
        </HeightFitFlex>

        <HeightFitFlex direction="column" align="start" margin="28px 0">
          <Text typo="Caption1">현재 입점되어있는 가게에요!</Text>
          <Text typo="Title2">입점 현황</Text>
        </HeightFitFlex>

        <HeightFitFlex direction="column" gap={8}>
          {approvedShopListData &&
            approvedShopListData.map((shop) => {
              return (
                <ShopInfoBox
                  key={shop.shop.shopId}
                  shopName={shop.shop.shopName}
                  shopAddress={shop.shop.shopAddress}
                  businessRegistration={shop.shop.businessRegistrationNumber}
                  groomerLicense={shop.shop.groomerLicenseNumber}
                  designerName={shop.groomer.groomerName}
                  history={shop.groomer.groomerAge}
                  license={shop.groomer.license}
                />
              );
            })}
        </HeightFitFlex>
      </Flex>
    </MobileLayout>
  );
};

export default Home;

const FlexBtn = styled(Button)<{ flex: string }>`
  border-radius: 8px;
  height: 47px;
  flex: ${({ flex }) => flex};
`;
