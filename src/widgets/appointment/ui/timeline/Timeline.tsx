import AppointmentCard from '@/entities/appointment/ui/card/AppointmentCard';
import './timeline.scss';
import { Step, StepIndicator, StepSeparator, StepStatus, Stepper, useSteps } from '@chakra-ui/react';
import { Appointment } from '@/shared/utils/types/appointment.types';
import { createFlagTextAppointment, createFlagAppointment } from '../../model/mappingTimeline';

const mockData: Appointment[] = [
  {
    title: '밥 약속',
    profileImgList: [
      'https://images.unsplash.com/photo-1497316730643-415fac54a2af?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs7HxzKKvBIkjKHsnqkVp-9MXfpoxiNKx7v6x8ks1ToA&s',
      'https://play-lh.googleusercontent.com/jInS55DYPnTZq8GpylyLmK2L2cDmUoahVacfN_Js_TsOkBEoizKmAl5-p8iFeLiNjtE=w526-h296-rw',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpIk-yiDGSA2AMrykU31HrJamu1Xs9lV7MVgHcVHkD9g&s',
    ],
    place: '사당역 2호선 00식당',
    time: new Date(),
  },
  {
    title: '밥 약속',
    profileImgList: [
      'https://images.unsplash.com/photo-1497316730643-415fac54a2af?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs7HxzKKvBIkjKHsnqkVp-9MXfpoxiNKx7v6x8ks1ToA&s',
      'https://play-lh.googleusercontent.com/jInS55DYPnTZq8GpylyLmK2L2cDmUoahVacfN_Js_TsOkBEoizKmAl5-p8iFeLiNjtE=w526-h296-rw',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpIk-yiDGSA2AMrykU31HrJamu1Xs9lV7MVgHcVHkD9g&s',
    ],
    place: '사당역 2호선 00식당',
    time: new Date(new Date()),
  },
  {
    title: '밥 약속',
    profileImgList: [
      'https://images.unsplash.com/photo-1497316730643-415fac54a2af?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs7HxzKKvBIkjKHsnqkVp-9MXfpoxiNKx7v6x8ks1ToA&s',
      'https://play-lh.googleusercontent.com/jInS55DYPnTZq8GpylyLmK2L2cDmUoahVacfN_Js_TsOkBEoizKmAl5-p8iFeLiNjtE=w526-h296-rw',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpIk-yiDGSA2AMrykU31HrJamu1Xs9lV7MVgHcVHkD9g&s',
    ],
    place: '사당역 2호선 00식당',
    time: new Date(new Date().setMonth(new Date().getMonth() + 2)),
  },
];

function Circle() {
  return <div className="circle"></div>;
}

interface TimelineProps {
  isFlag?: boolean;
  isHome?: boolean;
}

function Timeline({ isFlag, isHome }: TimelineProps) {
  const { activeStep } = useSteps({
    index: 1,
    count: mockData.length,
  });

  createFlagTextAppointment(mockData);
  createFlagAppointment(mockData);

  return (
    <Stepper index={activeStep} orientation="vertical" height="400px" gap="0" className="chakra_stepper_container">
      {mockData.map((step, index) => (
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
            <AppointmentCard isCheckinBtn isShared title={step.title} profileImgList={step.profileImgList} place={step.place} time={step.time} />
          ) : (
            <AppointmentCard title={step.title} profileImgList={step.profileImgList} place={step.place} time={step.time} />
          )}

          <StepSeparator className="separator" />
        </Step>
      ))}
    </Stepper>
  );
}

export default Timeline;
