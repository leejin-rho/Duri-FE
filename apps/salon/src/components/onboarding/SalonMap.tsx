import { forwardRef, Suspense, useEffect } from 'react';

import { Flex } from '@duri-fe/ui';
import { Coordinates } from '@salon/types';

interface SalonMapProps {
  coordinates: Coordinates;
}

let mapInstance: naver.maps.Map | undefined = undefined;

const loadScript = (src: string, callback: () => void) => {
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
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(coordinates.lat, coordinates.lon),
        map: mapInstance,
        icon: MARKER_URL,
      });

      // Marker 클릭 시 지도 초기화
      naver.maps.Event.addListener(marker, 'click', () => {
        mapInstance?.setCenter(
          new naver.maps.LatLng(coordinates.lat, coordinates.lon),
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
    }, []);

    return (
      <Flex ref={ref} direction="column">
        <Suspense fallback={<div>Loading Map...</div>}>
          <Flex id="map" />
        </Suspense>
      </Flex>
    );
  },
);

SalonMap.displayName = 'SalonMap';

export default SalonMap;
