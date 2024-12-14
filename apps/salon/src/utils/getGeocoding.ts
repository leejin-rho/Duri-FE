import { Coordinates } from '@salon/types';
import axios from 'axios';

const NAVER_MAP_CLIENT_ID = import.meta.env.VITE_NAVER_MAP_CLIENT_ID;
const NAVER_MAP_CLIENT_KEY = import.meta.env.VITE_NAVER_MAP_CLIENT_KEY;

/** 도로명주소 -> 위도/경도 */
export const getGeocoding = async (query: string): Promise<Coordinates> => {
  const response = await axios.get('/naver-api/map-geocode/v2/geocode', {
    params: {
      query: query,
    },
    headers: {
      'x-ncp-apigw-api-key-id': NAVER_MAP_CLIENT_ID,
      'x-ncp-apigw-api-key': NAVER_MAP_CLIENT_KEY,
      Accept: 'application/json',
    },
  });
  const { y, x } = response.data.addresses[0];
  const lat = parseFloat(y);
  const lon = parseFloat(x);
  return { lat, lon };
};
