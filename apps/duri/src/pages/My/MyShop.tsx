import { useNavigate } from 'react-router-dom';

import { ShopHorizontal } from '@duri/components/home/ShopHorizontal';
import {
  Button,
  DuriNavbar,
  Flex,
  Header,
  MobileLayout,
  Text,
  theme,
} from '@duri-fe/ui';
import { useGetRegularShopList } from '@duri-fe/utils';
import styled from '@emotion/styled';

// const defaultShopList = [
//   {
//     shopId: 1,
//     imageURL:
//       'https://s3-alpha-sig.figma.com/img/cf9d/5909/44caa81ccc63069ea56a68e6805ffdd1?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ml2pEJYeZtcy5yt-lcUXi2Fvk09FksS1iF70or-RKJcBef98WU2dAhCGsCTOu99Ixw-3ERARmIFnzQrs-71KGNZmW4N7fE8OU8S2x~SQD7lhuCLsN9hAVnVv~D7cC~qklj3xlRv1LVvHOk3hpk~-6EHFROymcV6pxwSYoLW3gnakI5u6GxNKJtl1ITP6k1gHE56byDZaSy2TIXQv6DuFuaJ~O-bY4dcnfMzUsfOP-b7Xaihtj4qds~ArNMbPK8bDXxkhKVcGijhbpgekJAhA9lhUIjAdgJHwCpwikow0CnfoEdjqS2PCHRtuZHzTnOBjho8YOayKHoeqcKJpnD59Dg__',
//     shopName: '댕댕샵',
//     rating: 4.3,
//     reviewCnt: 120,
//     visitCnt: 3,
//   },
//   {
//     shopId: 1,
//     imageURL: '',
//     shopName: '댕댕샵',
//     rating: 4.3,
//     reviewCnt: 120,
//     visitCnt: 5,
//   },
// ];

const MyShopPage = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate(-1);
  const moveToSearch = () => navigate('/shop');
  const { data: regularShopData } = useGetRegularShopList();
  return (
    <MobileLayout backgroundColor={theme.palette.Gray_White}>
      <Header
        backIcon
        title="단골가게"
        titleAlign="start"
        onClickBack={handleNavigate}
      />
      <FlexGrow direction="column" padding="0 20px" margin="0 0 94px 0">
        {regularShopData && regularShopData.homeShopList.length > 0 ? (
          <ShopHorizontal
            shopList={regularShopData.homeShopList}
            home={false}
          />
        ) : (
          <Flex direction="column" gap={12}>
            <Flex direction="column">
              <Text typo="Caption4" colorCode={theme.palette.Gray400}>
                아직 단골샵이 없어요!
              </Text>
              <Text typo="Caption4" colorCode={theme.palette.Gray400}>
                단골샵을 찾으러 가볼까요?
              </Text>
            </Flex>
            <Button
              width="135px"
              height="37px"
              typo="Label4"
              borderRadius="8px"
              bg={theme.palette.Black}
              fontColor={theme.palette.White}
              onClick={moveToSearch}
            >
              샵 둘러보기
            </Button>
          </Flex>
        )}
      </FlexGrow>
      <DuriNavbar />
    </MobileLayout>
  );
};

export default MyShopPage;

const FlexGrow = styled(Flex)`
  flex: 1;
`;
