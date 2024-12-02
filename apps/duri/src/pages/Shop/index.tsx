import { useEffect, useRef, useState } from 'react';

import { MapInfo } from '@duri/components/shop';
import { ShopList } from '@duri/components/shop/ShopList';
import {
  AbsoluteFlex,
  DuriNavbar,
  Flex,
  Magnifier,
  TextField,
} from '@duri-fe/ui';
import styled from '@emotion/styled';

const Shop = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [latitude, setLatitude] = useState<number>(37.49413412);
  const [longitude, setLongitude] = useState<number>(127.034306);

  const [isMap, setIsMap] = useState<boolean>(true);

  useEffect(() => {
    setLatitude(37.49413412);
    setLongitude(127.034306);
    setIsMap(true);
  }, []);

  return (
    <>
      <Flex direction="column">
        <SearchWrapper>
          <TextField
            placeholder="경기 성남시 분당구 안양판교로 1192"
            height={46}
            width={336}
            right={<Magnifier width={24} height={24} />}
            isNoBorder={true}
          />
        </SearchWrapper>
        {isMap ? (
          <MapInfo ref={mapRef} latitude={latitude} longitude={longitude} />
        ) : (
          <ShopList />
        )}
      </Flex>
      <DuriNavbar />
    </>
  );
};

export default Shop;

const SearchWrapper = styled(AbsoluteFlex)`
  padding-top: 30px;
  z-index: 99;
  height: fit-content;
`;
