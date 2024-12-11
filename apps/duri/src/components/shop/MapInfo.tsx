import { forwardRef, Suspense, useEffect, useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';

import { RelativeMobile } from '@duri/pages/Shop';
import { Button, Flex, MyLocation, Send, Text, theme } from '@duri-fe/ui';
import { ShopInfoType, useBottomSheet } from '@duri-fe/utils';
import styled from '@emotion/styled';

import { SendRequestQBox } from './SendRequesQBox';
import { ShopLine } from './ShopLine';

let mapInstance: naver.maps.Map | undefined = undefined;

const loadScript = (src: string, callback: () => void) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src;
  script.onload = () => callback();
  document.head.appendChild(script);
};

interface MapProps {
  nearbyShops: ShopInfoType[];
  location: { loaded: boolean; coordinates?: { lat: number; lng: number } };
}

export const MapInfo = forwardRef<HTMLDivElement, MapProps>(
  ({ nearbyShops, location }, ref) => {
    const { loaded, coordinates } = location;
    const { naver } = window;

    // 가게 정보 바텀시트
    const {
      openSheet: openShopInfoSheet,
      closeSheet: closeShopInfoSheet,
      bottomSheetProps: shopInfoSheetProps,
    } = useBottomSheet({
      maxHeight: 300,
      isMap: true,
    });

    // 요청서 전송용
    const {
      openSheet: openRequestSheet,
      closeSheet: closeRequestSheet,
      bottomSheetProps: requestSheetProps,
    } = useBottomSheet({
      maxHeight: 552,
    });

    const [selectedShop, setSelectedShop] = useState<ShopInfoType | null>(null);
    let markers: naver.maps.Marker[] = [];

    // 샵 마커를 만들기 위한 코드
    const SHOP_MARKER_URL = '/svg/ShopLocation.svg';
    const makeMarker = (
      map: naver.maps.Map | undefined,
      position: naver.maps.Coord | naver.maps.CoordLiteral,
      shop: ShopInfoType,
    ): naver.maps.Marker => {
      const marker = new naver.maps.Marker({
        map: map,
        position: position,
        icon: {
          url: SHOP_MARKER_URL,
          size: new naver.maps.Size(40, 40),
          anchor: new naver.maps.Point(13, 36),
        },
      });

      naver.maps.Event.addListener(marker, 'click', () => {
        map?.setZoom(17);
        map?.panTo(position);
        setSelectedShop(shop);
        openShopInfoSheet();
      });

      return marker;
    };

    // 맵 초기화
    const initMap = () => {
      if (!coordinates || !loaded) return;

      // 추가 옵션 설정
      const mapOptions = {
        zoomControl: false,
        center: new naver.maps.LatLng(coordinates.lat, coordinates.lng),
        zoom: 16,
        // mapDataControl: false,
        mapTypeControl: false,
        scaleControl: false,
        logoControlOptions: {
          position: naver.maps.Position.LEFT_TOP,
        },
        mapDataControlOptions: {
          position: naver.maps.Position.RIGHT_TOP,
        },
      };

      // 지도 초기화 확인
      if (document.getElementById('map')) {
        mapInstance = new naver.maps.Map('map', mapOptions);
      }

      // 현제 위치 마커 생성
      const MARKER_URL = '/svg/CurLocation.svg';
      const currentLocationMarker = new naver.maps.Marker({
        position: new naver.maps.LatLng(coordinates.lat, coordinates.lng),
        map: mapInstance,
        icon: MARKER_URL,
      });

      // 가게용 마커 만들기
      markers = nearbyShops.map((shop) =>
        makeMarker(
          mapInstance,
          new naver.maps.LatLng(shop.shopLat, shop.shopLon),
          shop, //가게 정보를 함께 넣어준다.
        ),
      );

      function updateMarkers(
        map: naver.maps.Map | undefined,
        markers: naver.maps.Marker[],
      ) {
        const mapBounds = map?.getBounds();

        markers.forEach((marker) => {
          const position = marker.getPosition();

          if (mapBounds && mapBounds.hasPoint(position)) {
            if (!marker.getMap() && map) marker.setMap(map);
          } else {
            if (marker.getMap()) marker.setMap(null);
          }
        });
      }

      naver.maps.Event.addListener(mapInstance, 'bounds_changed', () => {
        updateMarkers(mapInstance, markers);
      });

      // Marker 클릭 시 지도 초기화
      naver.maps.Event.addListener(currentLocationMarker, 'click', () => {
        mapInstance?.panTo(
          new naver.maps.LatLng(coordinates.lat, coordinates.lng),
        );
        mapInstance?.setZoom(16);
      });
    };

    const naverMapId = import.meta.env.VITE_NAVER_MAP_CLIENT_ID;
    useEffect(() => {
      // 스크립트 로딩 확인
      if (typeof naver === 'undefined') {
        loadScript(
          `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${naverMapId}&submodules=geocoder`,
          initMap,
        );
      } else {
        initMap();
      }
    }, [coordinates, loaded]);

    const moveToCurrentLocation = () => {
      if (mapInstance && coordinates) {
        mapInstance.panTo(
          new naver.maps.LatLng(coordinates.lat, coordinates.lng),
        );
        mapInstance.setZoom(16);
      }
    };

    return (
      <RelativeMobile>
        {/* 위치 정보(지도) */}
        <MapWrapper ref={ref} direction="column">
          <Suspense fallback={<div>Loading Map...</div>}>
            <Flex id="map" />
          </Suspense>
        </MapWrapper>
        <LocationBtn justify="flex-end" padding="0 13px">
          <Button
            onClick={moveToCurrentLocation}
            width="44px"
            height="44px"
            bg={theme.palette.White}
            borderRadius="99px"
            padding="0"
          >
            <MyLocation width={36} height={36} color={theme.palette.Gray400} />
          </Button>
        </LocationBtn>
        {selectedShop && (
          <BottomSheet {...shopInfoSheetProps}>
            <Flex direction="column" padding="4px 24px" gap={14}>
              <ShopLine
                key={selectedShop.shopId}
                id={selectedShop.shopId}
                title={selectedShop.shopName}
                score={selectedShop.shopRating}
                reviewNum={selectedShop.reviewCnt}
                distance={selectedShop.distance}
                address={selectedShop.shopAddress}
                phone={selectedShop.shopPhone}
                tags={selectedShop.tags}
                hasBtn={false}
                shopImg={selectedShop.shopImage}
              />
              <Button
                height="36px"
                borderRadius="8px"
                bg={theme.palette.Black}
                fontColor={theme.palette.White}
                padding="12px"
                onClick={() => {
                  openRequestSheet();
                  closeShopInfoSheet();
                }}
              >
                <Send width={18} height={17} color={theme.palette.White} />
                <Text margin="0 0 0 10px">입찰 넣기</Text>
              </Button>
            </Flex>
          </BottomSheet>
        )}
        <BottomSheet {...requestSheetProps}>
          <SendRequestQBox closeBottomSheet={closeRequestSheet} />
        </BottomSheet>
      </RelativeMobile>
    );
  },
);

MapInfo.displayName = 'MapInfo';

const MapWrapper = styled(Flex)`
  height: calc(100vh - 92px);
`;

const LocationBtn = styled(Flex)`
  position: absolute;
  height: fit-content;
  max-width: 375px;
  bottom: 120px;
  z-index: 2;
`;
