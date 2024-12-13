import { useCallback, useState } from 'react';

import { LatLngType } from '@duri/assets/types/map';

export const useNaverMap = (initialCenter: LatLngType, initialZoom = 16) => {
  const [mapInstance, setMapInstance] = useState<naver.maps.Map | null>(null);

  const initializeMap = useCallback(
    (mapContainer: HTMLDivElement | null) => {
      if (!mapContainer || !window.naver) return;

      const mapOptions = {
        center: new naver.maps.LatLng(initialCenter.lat, initialCenter.lng),
        zoom: initialZoom,
      };

      const map = new naver.maps.Map(mapContainer, mapOptions);
      setMapInstance(map);
    },
    [initialCenter, initialZoom],
  );

  return { mapInstance, initializeMap };
};
