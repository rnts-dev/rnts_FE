import AppointmentCard from '@/entities/appointment/ui/card/AppointmentCard';
import { Appointment } from '@/shared/utils/types/appointment.types';
import { Step, StepIndicator, Stepper, StepSeparator, StepStatus, useSteps } from '@chakra-ui/react';
import { createFlagAppointment, createFlagTextAppointment } from '../../model/mappingTimeline';
import './timeline.scss';

function Circle() {
  return <div className="circle"></div>;
}

interface TimelineProps {
  isFlag?: boolean;
  isHome?: boolean;
  appointmentList: Appointment[];
}

function Timeline({ isFlag, isHome, appointmentList }: TimelineProps) {
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
            <StepStatus complete={<Circle />} incomplete={<Circle />} active={<Circle />} />
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

export default Timeline;
