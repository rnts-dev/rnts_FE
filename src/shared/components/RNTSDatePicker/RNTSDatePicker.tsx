import { useEffect, useRef } from 'react';
import DatePicker from 'tui-date-picker';
import './tui-date-picker.scss';
import { AppointmentState } from '@/shared/store/atoms/appointment';
import { useAtom } from 'jotai';
import { formatDate } from '@/shared/utils/date';

interface Props {
  onClose: () => void;
}

export default function RNTSDatePicker(props: Props) {
  const { onClose } = props;
  const datepickerRef = useRef<DatePicker | null>(null);
  const [_, setAppointment] = useAtom(AppointmentState);

  useEffect(() => {
    const today = new Date();
    datepickerRef.current = new DatePicker('#datepicker', {
      date: today,
      selectableRanges: [[new Date(today.getFullYear() - 999, today.getMonth(), today.getDate()), new Date().setMonth(today.getMonth() + 999)]],
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
    if (dateValue) {
      setAppointment((prev) => {
        return {
          ...prev,
          YYMMDD: formatDate(String(dateValue)),
        };
      });

      onClose();
    }
  };

  return (
    <>
      <div id="datepicker" />
      <div className="date_picker_btn_container">
        <button className="date_picker_calcel_btn" onClick={onClose}>
          취소
        </button>
        <button className="date_picker_confirm_btn" onClick={handleBtnClick}>
          확인
        </button>
      </div>
    </>
  );
}
