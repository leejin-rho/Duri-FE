import { useCallback, useEffect, useState } from 'react';

import { LatLngType } from '@duri/assets/types/map';

export const useNaverMap = (initialCenter: LatLngType, initialZoom = 16) => {
  const [mapInstance, setMapInstance] = useState<naver.maps.Map | undefined>();

  const loadScript = useCallback((src: string, callback: () => void) => {
    const existingScript = document.querySelector(`script[src="${src}"]`);
    if (existingScript) {
      callback();
      return;
    }
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.onload = callback;
    document.head.appendChild(script);
  }, []);

  const initializeMap = useCallback(
    (mapContainer: HTMLElement | null) => {
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
    [initialCenter, initialZoom],
  );

  useEffect(() => {
    const naverMapId = import.meta.env.VITE_NAVER_MAP_CLIENT_ID;
    if (typeof naver === 'undefined') {
      loadScript(
        `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${naverMapId}&submodules=geocoder`,
        () => initializeMap(document.getElementById('map')),
      );
    } else {
      initializeMap(document.getElementById('map'));
    }
  }, [loadScript, initializeMap]);

  return { mapInstance };
};
