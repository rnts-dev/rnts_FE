import ConfirmBtn from '@/entities/appointment/ui/confirmBtn/ConfirmBtn';
import Input from '@/shared/components/Input/Input';
import { AppointmentState } from '@/shared/store/atoms/appointment';
import AppointmentTendencyList from '@/widgets/appointment/ui/appointmentTendencyList/AppointmentTendencyList';
import CreateHeader from '@/widgets/createAppointment/ui/createHeader/CreateHeader';
import PagePadding from '@/widgets/appointment/ui/pagePadding/PagePadding';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

const CreateAppointmentType = () => {
  const [appointment, setAppointment] = useAtom(AppointmentState);
  const navigate = useNavigate();

  const handleAppointmentName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAppointment((prev) => {
      return {
        ...prev,
        name: event.target.value,
      };
    });
  };

  const isComplete = appointment.name && appointment.tendency;

  return (
    <PagePadding>
      <CreateHeader title="약속 이름" description="약속 이름을 적어 주세요." />
      <Input value={appointment.name} placeholder="한글, 영문, 특수문자 포함 최대 8자 이내" onChange={handleAppointmentName} />
      <AppointmentTendencyList />
      <ConfirmBtn isComplete={!!isComplete} onClick={() => navigate('/appointment/create/schedule')} />
    </PagePadding>
  );
};

export default CreateAppointmentType;
