import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import { MapInfo } from '@duri/components/shop';
import { ShopList } from '@duri/components/shop/ShopList';
import { useDebounce } from '@duri/hooks/useDebounce';
import { useMapCenter } from '@duri/hooks/useMapCenter';
import { useNaverMap } from '@duri/hooks/useNaverMap';
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
import {
  ShopInfoType,
  useGeolocation,
  useGetNearByShopInfo,
  useGetSearchShopResult,
} from '@duri-fe/utils';
import styled from '@emotion/styled';

interface SearchFormInterface {
  search: string;
}

const Shop = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  const [isMap, setIsMap] = useState<boolean>(true);

  const location = useGeolocation(); // 현재 위치 정보 가져오기

  const { mapInstance } = useNaverMap({
    lat: location.coordinates?.lat || 37.5031348,
    lng: location.coordinates?.lng || 127.0497028,
  });

  // 현재 중심 위치 정보 가져오기
  const mapCenter = useMapCenter(
    {
      lat: location.coordinates?.lat || 37.5031348,
      lng: location.coordinates?.lng || 127.0497028,
    },
    mapInstance,
  );

  // API가 너무 자주 호출되지 않도록 조정
  const debouncedCenter = useDebounce(mapCenter, 300);

  const [nearbyShops, setNearbyShops] = useState<ShopInfoType[]>([]);
  const [searchShops, setSearchShops] = useState<ShopInfoType[]>([]);
  const [shops, setShops] = useState<ShopInfoType[]>([]);

  const {
    getValues,
    register,
    formState: { errors },
  } = useForm<SearchFormInterface>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      search: '',
    },
  });

  const changeMapType = () => {
    setIsMap(!isMap);
  };

  const [filter, setFilter] = useState<'distance' | 'rating'>('distance');
  const handleFilterChange = (filter: 'distance' | 'rating') => {
    if (filter) {
      setFilter(filter);
    }
  };

  const { data, refetch } = useGetNearByShopInfo(
    location.coordinates
      ? {
          lat: debouncedCenter.lat,
          lon: debouncedCenter.lng,
          radius: 1000,
        }
      : { lat: 37.5031348, lon: 127.0497028, radius: 2000 },
    filter,
  );

  const { data: searchResultData, refetch: searchRefetch } =
    useGetSearchShopResult(
      location.coordinates
        ? {
            search: getValues('search'),
            lat: location.coordinates.lat,
            lon: location.coordinates.lng,
          }
        : { search: '강남', lat: 37.5031348, lon: 127.0497028 },
    );

  const handleSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchValue = getValues('search').trim();
    console.log('검색:', searchValue);
    if (searchValue) {
      try {
        const { data } = await searchRefetch();
        if (data) {
          setSearchShops(data);
        }
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    } else {
      refetch();
    }
  };

  useEffect(() => {
    refetch();
  }, [filter]);

  useEffect(() => {
    if (data) {
      setNearbyShops(data);
    }
  }, [data]);

  useEffect(() => {
    if (searchResultData) {
      setSearchShops(searchResultData);
    }
  }, [searchResultData]);

  useEffect(() => {
    // 검색 결과가 있으면 검색 결과를 표시, 없으면 주변 가게 표시
    if (searchShops.length > 0) {
      setShops(searchShops);
    } else {
      setShops(nearbyShops);
    }
  }, [searchShops, nearbyShops]);

  return (
    <RelativeMobile>
      <OuterWrapper direction="column">
        <SearchWrapper>
          <FormWrapper onSubmit={handleSearchSubmit}>
            <TextField
              {...register('search', {
                required: true,
                pattern: {
                  value: /^[a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ0-9\s]+$/,
                  message: '검색어는 한글, 영어, 숫자, 공백만 입력 가능합니다.',
                },
                maxLength: {
                  value: 50,
                  message: '검색어는 최대 50자까지 가능합니다.',
                },
              })}
              placeholder="펫 미용실 이름, 주소 검색"
              height={46}
              right={
                <button type="button">
                  <Magnifier
                    width={24}
                    height={24}
                    color={theme.palette.Normal800}
                  />
                </button>
              }
              helperText={
                errors.search
                  ? [{ type: 'error', text: errors.search.message || '' }]
                  : []
              }
              isNoBorder={true}
              shadow="0px 0px 4px 0px rgba(0, 0, 0, 0.10)"
              widthPer="100%"
              maxLength={36}
            />
          </FormWrapper>
        </SearchWrapper>
        {isMap ? (
          <>
            <MapInfo
              shops={shops}
              location={location}
              mapInstance={mapInstance}
              ref={mapRef}
            />
          </>
        ) : (
          <ShopList
            nearbyShops={shops}
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

const FormWrapper = styled.form`
  margin: 0;
  padding: 0;
  border: none;
  display: contents;
`;
