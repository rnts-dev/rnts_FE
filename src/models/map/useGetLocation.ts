import { calculrateDistance } from '@/shared/utils/calculator';
import { useEffect, useState } from 'react';

interface ILocation {
  latitude: string | number;
  longitude: string | number;
}

// TODO: test용 mockData 입니다. 도착지점의 위, 경도라고 생각해주시면 됩니다.
const lat1 = 37.49808633653005; //위도
const lng1 = 127.02800140627488; //경도

export default function useGetLocation() {
  const [location, setLocation] = useState<ILocation>({ latitude: '', longitude: '' });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
  }, []);

  const successHandler = (response: GeolocationPosition) => {
    const { latitude, longitude } = response.coords;
    setLocation({ latitude, longitude });
    calculrateDistance(latitude, longitude, lat1, lng1);
  };

  const errorHandler = (error: GeolocationPositionError) => {
    console.log(error);
  };

  return { location };
}
