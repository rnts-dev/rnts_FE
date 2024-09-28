import { ConfirmBtn, Description } from '@/components/appointment';
import { createAppointment } from '@/mutation/appointment/createAppointment';
import { AppointmentState } from '@/shared/store/atoms/appointment';
import { convertToISOString } from '@/shared/utils/date';
import { PagePadding } from '@/widgets/appointment';
import { CreateHeader, PlaceSettingButton, TimeInputContainer } from '@/widgets/createAppointment';
import { useAtomValue } from 'jotai';
import { useNavigate } from 'react-router-dom';

const CreateAppointmentSchedule = () => {
  const navigate = useNavigate();
  const { mutate: createAppointmentMutate } = createAppointment();
  const appointment = useAtomValue(AppointmentState);
  const isComplete = appointment.place && appointment.YYMMDD && appointment.HHMM;

  const onClickConfirmBtn = () => {
    console.log(appointment.customAppointmentTypeId);
    createAppointmentMutate({
      title: appointment.name,
      // TODO: appintmentType 지현님 작업 완료되면 주석된 코드로 교체하기
      appointmentType: appointment.sendName,
      // appointmentType: 'HOBBY',
      customAppointmentTypeId: appointment.customAppointmentTypeId,
      appointmentTime: convertToISOString(appointment.YYMMDD, appointment.AmPm, appointment.HHMM),
      location: {
        place: appointment.place,
        latitude: Number(appointment.latitude),
        longitude: Number(appointment.longitude),
      },
    });
  };

  return (
    <PagePadding>
      <CreateHeader title="약속 시간" description="약속 시간을 선택하세요." />
      <TimeInputContainer />
      <Description title="약속 장소" description="모일 장소를 선택하세요." />
      <PlaceSettingButton onclick={() => navigate('/appointment/create/place')} />
      <ConfirmBtn isComplete={!!isComplete} onClick={onClickConfirmBtn} title="완료" />
    </PagePadding>
  );
};

export default CreateAppointmentSchedule;
