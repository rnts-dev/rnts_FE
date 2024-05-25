import ConfirmBtn from '@/entities/appointment/ui/confirmBtn/ConfirmBtn';
import Description from '@/entities/appointment/ui/description/Description';
import { AppointmentState } from '@/shared/store/atoms/appointment';
import PagePadding from '@/widgets/appointment/ui/pagePadding/PagePadding';
import CreateHeader from '@/widgets/createAppointment/ui/createHeader/CreateHeader';
import PlaceSettingButton from '@/widgets/createAppointment/ui/placeSettingButton/PlaceSettingButton';
import TimeInputContainer from '@/widgets/createAppointment/ui/timeInputContainer/TimeInputContainer';
import { useAtomValue } from 'jotai';
import { useNavigate } from 'react-router-dom';

const CreateAppointmentSchedule = () => {
  const navigate = useNavigate();
  const appointment = useAtomValue(AppointmentState);
  const isComplete = appointment.place && appointment.YYMMDD && appointment.HHMM;

  return (
    <PagePadding>
      <CreateHeader title="약속 시간" description="약속 시간을 선택하세요." />
      <TimeInputContainer />
      <Description title="약속 장소" description="모일 장소를 선택하세요." />
      <PlaceSettingButton onclick={() => navigate('/appointment/create/place')} />
      <ConfirmBtn isComplete={!!isComplete} onClick={() => navigate('/appointment/create/schedule')} title="완료" />
    </PagePadding>
  );
};

export default CreateAppointmentSchedule;
