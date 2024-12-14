import { forwardRef, Suspense, useEffect } from 'react';

import { Flex } from '@duri-fe/ui';
import styled from '@emotion/styled';
import { Coordinates } from '@salon/types';

interface SalonMapProps {
  coordinates: Coordinates;
}

let mapInstance: naver.maps.Map | undefined = undefined;

const loadScript = (src: string, callback: () => void) => {
  if (document.querySelector(`script[src="${src}"]`)) {
    // 스크립트가 이미 로드되었으면 바로 callback 실행
    callback();
    return;
  }

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src;
  script.onload = () => callback();
  document.head.appendChild(script);
};

const SalonMap = forwardRef<HTMLDivElement, SalonMapProps>(
  ({ coordinates }, ref) => {
    const { naver } = window;

    const initMap = () => {
      if (!window.naver || !window.naver.maps) {
        console.error('Naver Maps API가 아직 로드되지 않았습니다.');
        return;
      }

      // 추가 옵션 설정
      const mapOptions = {
        zoomControl: false,
        center: new naver.maps.LatLng(coordinates.lat, coordinates.lon),
        zoom: 16,
      };

      // 지도 초기화 확인
      if (document.getElementById('map')) {
        mapInstance = new naver.maps.Map('map', mapOptions);
      }

      // Marker 생성
      const MARKER_URL = '/svg/location_shop.svg';
      new naver.maps.Marker({
        position: new naver.maps.LatLng(coordinates.lat, coordinates.lon),
        map: mapInstance,
        icon: MARKER_URL,
      });
    };

    const naverMapId = import.meta.env.VITE_NAVER_MAP_CLIENT_ID;
    useEffect(() => {
      const loadMap = async () => {
        // 스크립트 로딩 확인
        if (typeof naver === 'undefined') {
          await new Promise<void>((resolve) => {
            loadScript(
              `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${naverMapId}&submodules=geocoder`,
              resolve,
            );
          });
        }
        initMap();
      };
      loadMap();
    }, []);

    return (
      <MapWrapper ref={ref} direction="column">
        <Suspense fallback={<div>Loading Map...</div>}>
          <Flex id="map" />
        </Suspense>
      </MapWrapper>
    );
  },
);

SalonMap.displayName = 'SalonMap';

const MapWrapper = styled(Flex)`
  overflow: hidden;
  border-radius: 8px;
`;

export default SalonMap;
