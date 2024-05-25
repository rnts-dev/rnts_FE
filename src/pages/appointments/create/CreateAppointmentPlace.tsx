import Description from '@/entities/appointment/ui/description/Description';
import Layout from '@/widgets/createAppointment/ui/placeSearchLayout/PlaceSearchLayout';
import { Input } from '@chakra-ui/react';

const CreateAppointmentPlace = () => {
  return (
    <Layout>
      <Description title="도착지 설정" description="약속 시간을 선택하세요." />
      <Input placeholder="지번, 도로명, 건물명으로 검색" borderColor="#000" />
    </Layout>
  );
};

export default CreateAppointmentPlace;
