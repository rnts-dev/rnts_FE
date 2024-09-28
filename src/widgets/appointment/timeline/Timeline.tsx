import ioClass from '@/assets/ioClass.svg';
import ioDate from '@/assets/ioDate.svg';
import ioFamliy from '@/assets/ioFamliy.svg';
import ioHobby from '@/assets/iohobby.svg';
import ioRestaurant from '@/assets/ioRestaurant.svg';
import ioThunder from '@/assets/ioThunder.svg';
import { Step, StepIndicator, Stepper, StepSeparator, StepStatus, useSteps } from '@chakra-ui/react';
import './timeline.scss';
import { createFlagAppointment, createFlagTextAppointment } from '@/models/appointment/mappingTimeline';
import { AppointmentCard } from '@/components/appointment';
import { MyAppointment } from '@/shared/utils/types/appointment.types';

const appointmentTendencyData = [
  { src: ioRestaurant, title: 'MEAL' },
  { src: ioHobby, title: 'HOBBY' },
  { src: ioThunder, title: '모임' },
  { src: ioClass, title: 'STUDY' },
  { src: ioFamliy, title: '가족' },
  { src: ioDate, title: '데이트' },
];

export function Circle({ title }: { title: string }) {
  const item = appointmentTendencyData.find((item) => item.title === title);
  return (
    <div className="circle">
      <img src={item ? item.src : ''} alt="" />
    </div>
  );
}

interface TimelineProps {
  isFlag?: boolean;
  isHome?: boolean;
  appointmentList: MyAppointment[];
}

export function Timeline({ isFlag, isHome, appointmentList }: TimelineProps) {
  const { activeStep } = useSteps({
    index: 1,
    count: appointmentList.length,
  });

  const appointmentFlagTextList = createFlagTextAppointment(appointmentList);
  const appointmentFlagList = createFlagAppointment(appointmentFlagTextList);

  return (
    <Stepper index={activeStep} orientation="vertical" height="400px" gap="0" className="chakra_stepper_container">
      {appointmentFlagList.map((step, index) => (
        <Step key={index}>
          {step.flag && isFlag && (
            <div className="flag">
              <p>{step.flagText}</p>
              <div className="flag_line"></div>
            </div>
          )}
          <StepIndicator className="indicator">
            <StepStatus complete={<Circle title={step.appointmentType} />} incomplete={<Circle title={step.appointmentType} />} active={<Circle title={step.appointmentType} />} />
          </StepIndicator>
          {isHome ? (
            <AppointmentCard isCheckinBtn isShared title={step.title} place={step.place} time={step.appointmentTime} uaid={step.id} />
          ) : (
            <AppointmentCard title={step.title} place={step.place} time={step.appointmentTime} uaid={step.id} />
          )}

          <StepSeparator className="separator" />
        </Step>
      ))}
    </Stepper>
  );
}
