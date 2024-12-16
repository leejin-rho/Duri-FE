import { useEffect } from 'react';

import { ShopInfoType } from '@duri-fe/utils';

const useMakeShopMarkers = (
  mapInstance: naver.maps.Map | undefined,
  shops: ShopInfoType[],
  onShopSelect: (shop: ShopInfoType) => void,
  openShopInfoSheet: () => void,
) => {
  useEffect(() => {
    if (!mapInstance || shops.length === 0) return;

    // 샵 마커를 만들기 위한 코드
    const SHOP_MARKER_URL = '/svg/ShopLocation.svg';

    const markers = shops.map((shop) => {
      const marker = new naver.maps.Marker({
        map: mapInstance,
        position: new naver.maps.LatLng(shop.shopLat, shop.shopLon),
        icon: {
          url: SHOP_MARKER_URL,
          size: new naver.maps.Size(40, 40),
          anchor: new naver.maps.Point(20, 40),
        },
      });

      naver.maps.Event.addListener(marker, 'click', () => {
        mapInstance.panTo(marker.getPosition());
        mapInstance.setZoom(17);
        onShopSelect(shop);
        openShopInfoSheet();
      });

      return marker;
    });

    return () => {
      markers.forEach((marker) => marker.setMap(null));
    };
  }, [mapInstance, shops, onShopSelect]);
};

export default useMakeShopMarkers;
