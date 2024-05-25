import Description from '@/entities/appointment/ui/description/Description';
import CreateHeader from '@/widgets/createAppointment/ui/createHeader/CreateHeader';
import PagePadding from '@/widgets/appointment/ui/pagePadding/PagePadding';
import TimeInputContainer from '@/widgets/createAppointment/ui/timeInputContainer/TimeInputContainer';

const CreateAppointmentSchedule = () => {
  return (
    <PagePadding>
      <CreateHeader title="약속 시간" description="약속 시간을 선택하세요." />
      <TimeInputContainer />
      <Description title="약속 장소" description="모일 장소를 선택하세요." />
    </PagePadding>
  );
};

export default CreateAppointmentSchedule;
