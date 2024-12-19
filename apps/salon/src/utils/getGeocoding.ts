import { Coordinates } from '@salon/types';
import axios from 'axios';

const GOOGLE_MAP_API_KEY = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

/** 도로명주소 -> 위도/경도 */
export const getGeocoding = async (query: string): Promise<Coordinates> => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json`,
      {
        params: {
          address: query,
          key: GOOGLE_MAP_API_KEY,
        },
      },
    );

    if (response.data.status !== 'OK') {
      throw new Error('지오코딩 실패');
    }

    const { lat, lng } = response.data.results[0].geometry.location;
    return { lat, lon: lng };
  } catch (error) {
    console.error('지오코딩 에러:', error);
    throw new Error('주소를 검색할 수 없습니다.');
  }
};
