import fiCalendar from '@/assets/fiCalendar.svg';
import fiClock from '@/assets/fiClock.svg';
import RNTSBottomSlide from '@/shared/components/RNTSBottomSlide/RNTSBottomSlide';
import RNTSDatePicker from '@/shared/components/RNTSDatePicker/RNTSDatePicker';
import RNTSTimePicker from '@/shared/components/RNTSTimePicker/RNTSTimePicker';
import { AppointmentState } from '@/shared/store/atoms/appointment';
import { useDisclosure } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { useState } from 'react';
import './timeInputContainer.scss';

export const TimeInputContainer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [drawer, setDrawer] = useState('date');
  const [appointment] = useAtom(AppointmentState);

  return (
    <>
      <div className="appointment_create_time_input_container">
        <button
          onClick={() => {
            onOpen();
            setDrawer('date');
          }}
          className="appointment_create_picker">
          <img src={fiCalendar} alt="fi_calendar" />
          <p className={appointment.YYMMDD && 'select'}>{appointment.YYMMDD ? appointment.YYMMDD : '2024-05-20'}</p>
        </button>
        <button
          onClick={() => {
            onOpen();
            setDrawer('time');
          }}
          className="appointment_create_picker">
          <img src={fiClock} alt="fi_clock" />
          <p className={appointment.HHMM && 'select'}>{appointment.HHMM ? appointment.HHMM : '오전 10:30'}</p>
        </button>
      </div>
      {
        <RNTSBottomSlide isOpen={isOpen} onClose={onClose}>
          {drawer === 'date' ? (
            <div style={{ height: '500px' }}>
              <RNTSDatePicker onClose={onClose} />
            </div>
          ) : (
            <div style={{ height: '300px' }}>
              <RNTSTimePicker onClose={onClose} />
            </div>
          )}
        </RNTSBottomSlide>
      }
    </>
  );
};
