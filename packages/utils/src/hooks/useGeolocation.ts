import { useEffect, useState } from 'react';

interface locationType {
  loaded: boolean;
  coordinates: { lat: number; lng: number };
  error?: { code: number; message: string };
}

export const useGeolocation = () => {
  const [location, setLocation] = useState<locationType>({
    loaded: false,
    coordinates: { lat: 0, lng: 0 },
  });

  // 위치 정보를 localStorage에서 불러오기
  useEffect(() => {
    const savedLocation = localStorage.getItem('location');
    if (savedLocation) {
      setLocation(JSON.parse(savedLocation));
    }
  }, []);

  // 위치 정보를 성공적으로 받아왔을 때
  const onSuccess = (location: {
    coords: { latitude: number; longitude: number };
  }) => {
    const newLocation = {
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    };
    setLocation(newLocation);
    // 위치 정보를 localStorage에 저장
    localStorage.setItem('location', JSON.stringify(newLocation));
  };

  // 위치 정보를 받아오는 데 실패했을 때
  const onError = (error: { code: number; message: string }) => {
    console.error(`ERROR(${error.code}): ${error.message}`);
    const errorLocation = {
      loaded: true,
      coordinates: { lat: 0, lng: 0 },
      error,
    };
    setLocation(errorLocation);
    // 오류 상태도 localStorage에 저장
    localStorage.setItem('location', JSON.stringify(errorLocation));
  };
  useEffect(() => {
    if (!('geolocation' in navigator)) {
      onError({
        code: 0,
        message: 'Geolocation not supported',
      });
      return;
    }

    // 위치 변경 감지 및 실시간 업데이트
    const watchId = navigator.geolocation.watchPosition(onSuccess, onError);

    // 컴포넌트가 언마운트되거나 위치 추적을 종료할 때 clean-up
    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return location;
};
