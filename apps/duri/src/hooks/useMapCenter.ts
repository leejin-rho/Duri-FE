import { useEffect, useState } from 'react';

import { LatLngType } from '@duri/assets/types/map';

export const useMapCenter = (
  initialCoordinates: LatLngType,
  mapInstance: naver.maps.Map | undefined,
) => {
  const [center, setCenter] = useState(initialCoordinates);

  useEffect(() => {
    if (!mapInstance) return;

    const updateCenter = () => {
      const newCenter = mapInstance.getCenter();
      setCenter({
        lat: newCenter.y,
        lng: newCenter.x,
      });
    };

    naver.maps.Event.addListener(mapInstance, 'dragend', updateCenter);
    naver.maps.Event.addListener(mapInstance, 'zoom_changed', updateCenter);

    return () => {
      naver.maps.Event.clearInstanceListeners(mapInstance);
    };
  }, [mapInstance]);

  return center;
};
