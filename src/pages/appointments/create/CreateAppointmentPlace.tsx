import ConfirmButton2 from '@/entities/appointment/ui/confirmBtn/ConfirmBtn2';
import Description from '@/entities/appointment/ui/description/Description';
import PlaceSearchResultList from '@/features/appointment/ui/placeSearchResultList.tsx/PlaceSearchResultList';
import Input from '@/shared/components/Input/Input';
import { useDebounce } from '@/shared/hooks/useDebounce';
import Layout from '@/widgets/createAppointment/ui/placeSearchLayout/PlaceSearchLayout';
import { useEffect, useRef, useState } from 'react';
interface ILocation {
  latitude: string | number;
  longitude: string | number;
}

declare global {
  interface Window {
    kakao: any;
  }
  const kakao: any;
}

const CreateAppointmentPlace = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<any[]>([]);
  const [, setDestinationLocation] = useState<ILocation>();
  const inputRef = useRef<HTMLInputElement>();
  // const { location } = useGetLocation();

  const searchPlaces = () => {
    var ps = new kakao.maps.services.Places();
    ps.keywordSearch(inputRef?.current?.value, placeSearchCallback);
  };

  function placeSearchCallback(data: any) {
    setResult(data);
  }

  function handleSelectDestination(addressNm: string) {
    const selectedPlace = result.filter((e) => e.address_name === addressNm);
    setDestinationLocation({ latitude: selectedPlace[0].y, longitude: selectedPlace[0].x });
  }

  const searchPlaceWithDebounce = useDebounce(inputRef?.current?.value, 500);

  useEffect(() => {
    if (searchPlaceWithDebounce) {
      searchPlaces();
    }
  }, [searchPlaceWithDebounce]);

  return (
    <Layout>
      <Description title="도착지 설정" description="약속 시간을 선택하세요." />
      <Input
        inputRef={inputRef}
        placeholder="지번, 도로명, 건물명으로 검색"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      />

      <PlaceSearchResultList result={result} handleSelectDestination={handleSelectDestination} />

      <ConfirmButton2
        onCancel={() => console.log('cancel')}
        onConfirm={() => {
          console.log('이동');
        }}
      />
    </Layout>
  );
};

export default CreateAppointmentPlace;
