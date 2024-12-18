import { useCallback, useEffect, useState } from 'react';

import { LatLngType } from '@duri/assets/types/map';

export const useNaverMap = (initialCenter: LatLngType, initialZoom = 16) => {
  const [mapInstance, setMapInstance] = useState<naver.maps.Map | undefined>();

  // 스크립트 로더 함수
  const loadScript = useCallback((src: string, callback: () => void) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.onload = callback;
    document.head.appendChild(script);
  }, []);

  // 맵 초기화 함수
  const initializeMap = useCallback(
    (mapContainer: HTMLElement | null) => {
      if (!initialCenter) {
        return;
      }

      if (!mapContainer || !window.naver) return;

      const mapOptions = {
        center: new naver.maps.LatLng(initialCenter.lat, initialCenter.lng),
        zoom: initialZoom,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        logoControlOptions: { position: naver.maps.Position.LEFT_TOP },
        mapDataControlOptions: { position: naver.maps.Position.RIGHT_TOP },
      };

      const map = new naver.maps.Map(mapContainer, mapOptions);

      setMapInstance(map);
    },
    [initialCenter.lat, initialCenter.lng, initialZoom],
  );

  const refreshMap = useCallback(() => {
    const mapContainer = document.getElementById('map');
    if (mapContainer) {
      initializeMap(mapContainer);
    }
  }, [initializeMap]);

  useEffect(() => {
    const naverMapId = import.meta.env.VITE_NAVER_MAP_CLIENT_ID;
    const mapContainer = document.getElementById('map');

    if (typeof naver === 'undefined') {
      loadScript(
        `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${naverMapId}&submodules=geocoder`,
        () => initializeMap(mapContainer),
      );
    } else {
      initializeMap(mapContainer);
    }
  }, [loadScript, initializeMap]);

  return { mapInstance, refreshMap };
};
