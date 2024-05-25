import ConfirmBtn from '@/entities/appointment/ui/confirmBtn/ConfirmBtn';
import Description from '@/entities/appointment/ui/description/Description';
import { fetcher } from '@/shared/service/fetch';
import { AppointmentState } from '@/shared/store/atoms/appointment';
import { convertToISOString } from '@/shared/utils/date';
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
  const onClickConfirmBtn = async () => {
    const appointmentId = await fetcher
      .post('/api/appointment/', {
        title: appointment.name,
        appointmentType: appointment.appointmentType,
        time: convertToISOString(appointment.YYMMDD, appointment.HHMM),
        place: appointment.place,
        latitude: appointment.latitude,
        longitude: appointment.longitude,
      })
      .then((res: any) => res.data);

    await navigate(`/?id=${appointmentId}`);
  };

  return (
    <PagePadding>
      <CreateHeader title="약속 시간" description="약속 시간을 선택하세요." />
      <TimeInputContainer />
      <Description title="약속 장소" description="모일 장소를 선택하세요." />
      <PlaceSettingButton onclick={() => navigate('/appointment/create/place')} />
      <ConfirmBtn isComplete={!!isComplete} onClick={() => onClickConfirmBtn()} title="완료" />
    </PagePadding>
  );
};

export default CreateAppointmentSchedule;
