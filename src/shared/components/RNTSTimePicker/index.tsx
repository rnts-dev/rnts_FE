import { Button, Flex } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import TimePicker from 'tui-time-picker';
import './index.scss';

interface Props {
  onSave: (time: string) => void;
}

export default function RNTSTimePicker(props: Props) {
  const { onSave } = props;
  const timePickerRef = useRef<any>(null);

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
    console.log('dateValue : ', hour, minute);
    minute && onSave(`${hour} : ${minute}`);
  };

  return (
    <>
      <div id="timepicker" />
      <Flex>
        <Button onClick={handleBtnClick}>닫기</Button>
        <Button onClick={handleBtnClick}>선택 완료</Button>
      </Flex>
    </>
  );
}
