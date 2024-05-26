import ConfirmButton2 from '@/entities/appointment/ui/confirmBtn/ConfirmBtn2';
import Description from '@/entities/appointment/ui/description/Description';
import PlaceSearchResultList from '@/features/appointment/ui/placeSearchResultList.tsx/PlaceSearchResultList';
import Input from '@/shared/components/Input/Input';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { AppointmentState } from '@/shared/store/atoms/appointment';
import Layout from '@/widgets/createAppointment/ui/placeSearchLayout/PlaceSearchLayout';
import { useSetAtom } from 'jotai';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>();
  const [, setInput] = useState('');
  const [result, setResult] = useState<any[]>([]);
  const [, setDestinationLocation] = useState<ILocation>();
  const setAppointment = useSetAtom(AppointmentState);

  // const { location } = useGetLocation();

  const handleAppointmentPlace = () => {
    setAppointment((prev: any) => {
      return {
        ...prev,
        place: inputRef?.current?.value,
      };
    });
  };

  const searchPlaces = () => {
    var ps = new kakao.maps.services.Places();
    ps.keywordSearch(inputRef?.current?.value, placeSearchCallback);
  };

  function placeSearchCallback(data: any) {
    setResult(data);
  }

  function handleSelectDestination(addressNm: string) {
    const selectedPlace = result.filter((e) => e.address_name === addressNm);
    setAppointment((prev) => {
      return {
        ...prev,
        latitude: selectedPlace[0].y,
        longitude: selectedPlace[0].x,
      };
    });
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
      <Description title="도착지 설정" description="약속 장소를 입력해 주세요." />
      <Input inputRef={inputRef} placeholder="지번, 도로명, 건물명으로 검색" value={inputRef?.current?.value || ''} onChange={(e) => setInput(e.currentTarget.value)} />

      <PlaceSearchResultList result={result} handleSelectDestination={handleSelectDestination} />

      <ConfirmButton2
        onCancel={() => navigate('/appointment/create/schedule')}
        onConfirm={() => {
          handleAppointmentPlace();
          navigate('/appointment/create/schedule');
        }}
      />
    </Layout>
  );
};

export default CreateAppointmentPlace;
