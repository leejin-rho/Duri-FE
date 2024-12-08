import { useEffect, useRef, useState } from 'react';

import { MapInfo } from '@duri/components/shop';
import { ShopList } from '@duri/components/shop/ShopList';
import {
  Button,
  DuriNavbar,
  Flex,
  HardText,
  ListIcon,
  Location,
  Magnifier,
  MobileLayout,
  TextField,
  theme,
} from '@duri-fe/ui';
import { ShopInfoType, useGetNearByShopInfo } from '@duri-fe/utils';
import styled from '@emotion/styled';

const Shop = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  const [isMap, setIsMap] = useState<boolean>(true);
  const [nearbyShops, setNearbyShops] = useState<ShopInfoType[]>([]);

  const changeMapType = () => {
    setIsMap(!isMap);
  };

  const [filter, setFilter] = useState<'distance' | 'rating'>('distance');
  const handleFilterChange = (filter: 'distance' | 'rating') => {
    if (filter) {
      setFilter(filter);
    }
  };

  const { data } = useGetNearByShopInfo(
    // location.coordinates
    //   ? {
    //       // lat: location.coordinates.lat,
    //       // long: location.coordinates.lng,
    //       // radius: 500,
    //       lat: 37.5156,
    //       lon: 127.0451005,
    //       radius: 500,
    //     }
    //   :
    { lat: 37.5156, lon: 127.0451005, radius: 500 },
    filter,
  );

  useEffect(() => {
    if (data) {
      setNearbyShops(data);
    }
  }, [data]);

  return (
    <RelativeMobile>
      <OuterWrapper direction="column">
        <SearchWrapper>
          <TextField
            placeholder="경기 성남시 분당구 안양판교로 1192"
            height={46}
            right={
              <Magnifier
                width={24}
                height={24}
                color={theme.palette.Normal800}
              />
            }
            isNoBorder={true}
            shadow="0px 0px 4px 0px rgba(0, 0, 0, 0.10)"
            widthPer="100%"
          />
        </SearchWrapper>
        {isMap ? (
          <>
            <MapInfo ref={mapRef} />
          </>
        ) : (
          <ShopList
            nearbyShops={nearbyShops}
            filter={filter}
            onFilterChange={handleFilterChange}
          />
        )}
        <ListWrapper>
          <Button
            onClick={changeMapType}
            width="fit-content"
            height="36px"
            bg={theme.palette.White}
            padding="10px"
            shadow={isMap ? 'none' : '0px 0px 4px 0px rgba(0, 0, 0, 0.25)'}
          >
            {isMap ? (
              <ListIcon width={18} color={theme.palette.Gray600} />
            ) : (
              <Location width={18} color={theme.palette.Gray600} />
            )}
            <HardText
              typo="Label2"
              margin="0 0 0 4px"
              colorCode={theme.palette.Gray600}
            >
              {isMap ? '목록' : '지도'}
            </HardText>
          </Button>
        </ListWrapper>
      </OuterWrapper>
      <DuriNavbar />
    </RelativeMobile>
  );
};

export default Shop;

export const RelativeMobile = styled(MobileLayout)`
  align-items: center;
  position: relative;
`;

const SearchWrapper = styled(Flex)`
  position: absolute;
  max-width: 375px;
  top: 62px;
  z-index: 1;
  height: fit-content;
  padding: 0 20px;
`;

const ListWrapper = styled(Flex)`
  position: fixed;
  height: fit-content;
  bottom: 104px;
  z-index: 1;
`;

const OuterWrapper = styled(Flex)`
  overflow: hidden;
`;
