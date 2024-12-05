import { forwardRef, Suspense, useEffect } from 'react';

import { RelativeMobile } from '@duri/pages/Shop';
import { Button, Flex, MyLocation, theme } from '@duri-fe/ui';
import { useGeolocation } from '@duri-fe/utils';
import styled from '@emotion/styled';

let mapInstance: naver.maps.Map | undefined = undefined;

const loadScript = (src: string, callback: () => void) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src;
  script.onload = () => callback();
  document.head.appendChild(script);
};

export const MapInfo = forwardRef<HTMLDivElement>((_, ref) => {
  const location = useGeolocation(); // 위치 정보 가져오기
  const { loaded, coordinates } = location;
  const { naver } = window;

  const initMap = () => {
    if (!coordinates || !loaded) return;

    // 추가 옵션 설정
    const mapOptions = {
      zoomControl: false,
      center: new naver.maps.LatLng(coordinates.lat, coordinates.lng),
      zoom: 16,
    };

    // 지도 초기화 확인
    if (document.getElementById('map')) {
      mapInstance = new naver.maps.Map('map', mapOptions);
    }

    // Marker 생성
    const MARKER_URL = '/svg/CurLocation.svg';
    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(coordinates.lat, coordinates.lng),
      map: mapInstance,
      icon: MARKER_URL,
    });

    // Marker 클릭 시 지도 초기화
    naver.maps.Event.addListener(marker, 'click', () => {
      mapInstance?.setCenter(
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
      mapInstance.setCenter(
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
    </RelativeMobile>
  );
});

MapInfo.displayName = 'MapInfo';

const MapWrapper = styled(Flex)`
  height: calc(100vh - 92px);
`;

const LocationBtn = styled(Flex)`
  position: absolute;
  height: fit-content;
  max-width: 375px;
  bottom: 120px;
  z-index: 10;
`;
