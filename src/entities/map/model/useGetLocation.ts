import { useEffect, useState } from 'react';

interface ILocation {
  latitude: string | number;
  longitude: string | number;
}

export default function useGetLocation() {
  const [location, setLocation] = useState<ILocation>({ latitude: '', longitude: '' });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
  }, []);

  const successHandler = (response: GeolocationPosition) => {
    const { latitude, longitude } = response.coords;
    setLocation({ latitude, longitude });
  };

  const errorHandler = (error: GeolocationPositionError) => {
    console.log(error);
  };

  return { location };
}
