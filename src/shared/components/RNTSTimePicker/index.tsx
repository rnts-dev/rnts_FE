import { Button, Flex } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import TimePicker from 'tui-time-picker';
import './index.scss';
import { useAtom } from 'jotai';
import { AppointmentState } from '@/shared/store/atoms/appointment';

interface Props {
  onClose: () => void;
}

export default function RNTSTimePicker(props: Props) {
  const { onClose } = props;
  const timePickerRef = useRef<any>(null);
  const [_, setAppointment] = useAtom(AppointmentState);

  useEffect(() => {
    timePickerRef.current = new TimePicker('#timepicker', {
      initialHour: 15,
      initialMinute: 33,
      disabledHours: [1, 2, 13, 14],
      inputType: 'spinbox',
    });

    return () => {
      timePickerRef.current?.destroy();
    };
  }, []);

  const handleBtnClick = () => {
    const hour = timePickerRef.current?.getHour();
    const minute = timePickerRef.current?.getMinute();

    minute &&
      setAppointment((prev) => {
        return {
          ...prev,
          HHMM: `오전 ${hour}:${minute}`,
        };
      });
  };

  return (
    <>
      <div id="timepicker" />
      <Flex>
        <Button onClick={onClose}>닫기</Button>
        <Button onClick={handleBtnClick}>선택 완료</Button>
      </Flex>
    </>
  );
}
