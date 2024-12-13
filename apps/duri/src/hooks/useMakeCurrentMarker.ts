import { useEffect } from 'react';

import { LatLngType } from '@duri/assets/types/map';

const useMakeCurrentLocationMarker = (
  mapInstance: naver.maps.Map | undefined,
  coordinates: LatLngType,
) => {
  useEffect(() => {
    if (!mapInstance || !coordinates) return;

    // 현재 위치 마커 생성
    const MARKER_URL = '/svg/CurLocation.svg';

    const currentLocationMarker = new naver.maps.Marker({
      position: new naver.maps.LatLng(coordinates.lat, coordinates.lng),
      map: mapInstance,
      icon: MARKER_URL,
    });

    // 현재 위치 마커 클릭 시 지도 초기화
    naver.maps.Event.addListener(currentLocationMarker, 'click', () => {
      mapInstance.panTo(
        new naver.maps.LatLng(coordinates.lat, coordinates.lng),
      );
      mapInstance.setZoom(16);
    });

    return () => {
      currentLocationMarker.setMap(null);
    };
  }, [mapInstance, coordinates]);
};

export default useMakeCurrentLocationMarker;
