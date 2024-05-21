import { Button, Flex } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import DatePicker from 'tui-date-picker';
import './tui-date-picker.scss';

interface Props {
  onSave: (date: Date) => void;
}

export default function RNTSDatePicker(props: Props) {
  const { onSave } = props;
  const datepickerRef = useRef<DatePicker | null>(null);

  useEffect(() => {
    console.log('init calendar !');
    const today = new Date();
    datepickerRef.current = new DatePicker('#datepicker', {
      date: today,
      selectableRanges: [[new Date(today.getFullYear() - 999, today.getMonth(), today.getDate()), today]],
      language: 'ko',
      autoClose: false,
      showAlways: true,
      calendar: {
        showToday: false,
      },
    });
    return () => {
      datepickerRef.current?.destroy();
    };
  }, []);

  const handleBtnClick = () => {
    const dateValue = datepickerRef.current?.getDate();
    console.log('dateValue : ', dateValue);
    dateValue && onSave(dateValue);
  };

  return (
    <>
      <div id="datepicker" />
      <Flex>
        <Button onClick={handleBtnClick}>닫기</Button>
        <Button onClick={handleBtnClick}>선택 완료</Button>
      </Flex>
    </>
  );
}
