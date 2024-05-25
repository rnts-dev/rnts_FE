import Description from '@/entities/appointment/ui/description/Description';
import PagePadding from '@/widgets/appointment/ui/pagePadding/PagePadding';
import CreateHeader from '@/widgets/createAppointment/ui/createHeader/CreateHeader';
import PlaceButton from '@/widgets/createAppointment/ui/placeButton/PlaceButton';
import TimeInputContainer from '@/widgets/createAppointment/ui/timeInputContainer/TimeInputContainer';
import { useNavigate } from 'react-router-dom';

const CreateAppointmentSchedule = () => {
  const navigate = useNavigate();

  return (
    <PagePadding>
      <CreateHeader title="약속 시간" description="약속 시간을 선택하세요." />
      <TimeInputContainer />
      <Description title="약속 장소" description="모일 장소를 선택하세요." />
      <PlaceButton onclick={() => navigate('/appointment/create/place')} />
    </PagePadding>
  );
};

export default CreateAppointmentSchedule;
