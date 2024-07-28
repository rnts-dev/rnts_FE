import ioClass from '@/assets/ioClass.svg';
import ioDate from '@/assets/ioDate.svg';
import ioFamliy from '@/assets/ioFamliy.svg';
import ioHobby from '@/assets/iohobby.svg';
import ioRestaurant from '@/assets/ioRestaurant.svg';
import ioThunder from '@/assets/ioThunder.svg';

import { Appointment } from '@/shared/utils/types/appointment.types';
import { Step, StepIndicator, Stepper, StepSeparator, StepStatus, useSteps } from '@chakra-ui/react';

import './timeline.scss';
import { createFlagAppointment, createFlagTextAppointment } from '@/models/appointment/mappingTimeline';
import { AppointmentCard } from '@/components/appointment';

const appointmentTendencyData = [
  { src: ioRestaurant, title: '식사' },
  { src: ioHobby, title: '취미' },
  { src: ioThunder, title: '모임' },
  { src: ioClass, title: '스터디' },
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
  appointmentList: Appointment[];
}

export function Timeline({ isFlag, isHome, appointmentList }: TimelineProps) {
  const { activeStep } = useSteps({
    index: 1,
    count: appointmentList.length,
  });

  createFlagTextAppointment(appointmentList);
  createFlagAppointment(appointmentList);

  return (
    <Stepper index={activeStep} orientation="vertical" height="400px" gap="0" className="chakra_stepper_container">
      {appointmentList.map((step, index) => (
        <Step key={index}>
          {step.flag && isFlag && (
            <div className="flag">
              <p>{step.flagText}</p>
              <div className="flag_line"></div>
            </div>
          )}
          <StepIndicator className="indicator">
            <StepStatus complete={<Circle title={step.apType} />} incomplete={<Circle title={step.apType} />} active={<Circle title={step.apType} />} />
          </StepIndicator>
          {isHome ? (
            <AppointmentCard isCheckinBtn isShared title={step.apTitle} profileImgList={step.imageUrl} place={step.apPlace} time={step.apTime} uaid={step.uaid} />
          ) : (
            <AppointmentCard title={step.apTitle} profileImgList={step.imageUrl} place={step.apPlace} time={step.apTime} uaid={step.uaid} />
          )}

          <StepSeparator className="separator" />
        </Step>
      ))}
    </Stepper>
  );
}
