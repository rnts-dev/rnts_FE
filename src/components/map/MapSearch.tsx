import useGetLocation from '@/models/map/useGetLocation';
import { Badge, Button, Flex, Highlight, Input, Select, Stack } from '@chakra-ui/react';
import { useState } from 'react';

interface ILocation {
  latitude: string | number;
  longitude: string | number;
}

declare global {
  interface Window {
    kakao: any;
  }
}

export function MapSearch() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<any[]>([]);
  const [destinationLocation, setDestinationLocation] = useState<ILocation>();
  const { location } = useGetLocation();

  const searchPlaces = () => {
    var ps = new kakao.maps.services.Places();
    ps.keywordSearch(input, placeSearchCallback);
  };

  function placeSearchCallback(data: any) {
    setResult(data);
  }

  function handleSelectDestination(addressNm: string) {
    const selectedPlace = result.filter((e) => e.address_name === addressNm);

    setDestinationLocation({ latitude: selectedPlace[0].y, longitude: selectedPlace[0].x });
  }

  return (
    <>
      <Flex>
        <Input size="md" onChange={(e) => setInput(e.target.value)} value={input} placeholder="주소를 입력해주세요 ex)강남역 or 서울특별시 역삼동" />
        <Button colorScheme="green" onClick={searchPlaces}>
          검색
        </Button>
      </Flex>

      {result?.length ? (
        <Stack spacing={3}>
          <Select placeholder="검색 결과" size="sm" onChange={(e) => handleSelectDestination(e.target.value)}>
            {result?.map((e: any) => <option>{e.address_name}</option>)}
          </Select>
        </Stack>
      ) : (
        ''
      )}

      {destinationLocation && (
        <>
          <Highlight query=" 현재 나의 위치" styles={{ px: '1', py: '1', bg: 'orange.100' }}>
            현재 나의 위치
          </Highlight>
          <p>
            <Badge>위도</Badge> {location.latitude}
          </p>

          <p>
            <Badge>경도</Badge>
            {location.longitude}
          </p>

          <Highlight query=" 도착지의 위경도 정보" styles={{ px: '1', py: '1', bg: 'orange.100' }}>
            도착지의 위경도 정보
          </Highlight>
          <p>
            <Badge>위도</Badge> {destinationLocation.latitude}
          </p>
          <p>
            <Badge>경도</Badge> {destinationLocation.longitude}
          </p>
        </>
      )}
    </>
  );
}
