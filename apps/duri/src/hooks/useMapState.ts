import { useCallback, useState } from 'react';

import { LatLngType } from '@duri/assets/types/map';

export const useMapState = () => {
  const [savedState, setSavedState] = useState<
    | {
        center: LatLngType;
        zoom: number;
      }
    | undefined
  >();

  // isMap = false될때, 지도 상태 저장
  const saveState = useCallback((mapInstance: naver.maps.Map) => {
    const center = mapInstance.getCenter();
    const zoom = mapInstance.getZoom();
    setSavedState({
      center: { lat: center.y, lng: center.x },
      zoom,
    });
    console.log('지도 상태 저장:', { center, zoom });
  }, []);

  return { saveState, savedState };
};
