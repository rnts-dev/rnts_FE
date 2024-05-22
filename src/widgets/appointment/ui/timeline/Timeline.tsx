import AppointmentCard from '@/entities/appointment/ui/card/AppointmentCard';
import './timeline.scss';
import { Step, StepIndicator, StepSeparator, StepStatus, Stepper, useSteps } from '@chakra-ui/react';

const mockData = [
  { title: 'First', description: 'Contact Info', test: true, test2: '오늘' },
  { title: 'Second', description: 'Date & Time', test: false },
  { title: 'Third', description: 'Select Rooms', test: true, test2: '2달 뒤' },
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

  return (
    <Stepper index={activeStep} orientation="vertical" height="400px" gap="0" className="chakra_stepper_container">
      {mockData.map((step, index) => (
        <Step key={index}>
          {step.test && isFlag && (
            <div className="flag">
              <p>{step.test2}</p>
              <div className="flag_line"></div>
            </div>
          )}
          <StepIndicator className="indicator">
            <StepStatus complete={<Circle />} incomplete={<Circle />} active={<Circle />} />
          </StepIndicator>
          {isHome ? <AppointmentCard isCheckinBtn isShared /> : <AppointmentCard />}

          <StepSeparator className="separator" />
        </Step>
      ))}
    </Stepper>
  );
}

export default Timeline;
