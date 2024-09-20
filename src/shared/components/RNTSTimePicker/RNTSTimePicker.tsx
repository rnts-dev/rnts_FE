import { AppointmentState } from '@/shared/store/atoms/appointment';
import { useAtom } from 'jotai';
import './RNTSTimePicker.scss';
import arrowUp from '@/assets/arrow-up.svg';
import arrowBottom from '@/assets/arrow-bottom.svg';
import * as S from './RNTSTimePicker.styled';
import ArrowBox from '../ArrowBox/ArrowBox';
import { useState } from 'react';

interface Props {
  onClose: () => void;
}

const RNTSTimePicker = ({ onClose }: Props) => {
  const [_, setAppointment] = useAtom(AppointmentState);
  const [amPmIndicator, setAmPmIndicator] = useState<'오전' | '오후'>('오전');
  const [hour, setHour] = useState(1);
  const [minute, setMinute] = useState(5);

  const handleChangeAmPm = (type: 'am' | 'pm') => {
    type === 'am' ? setAmPmIndicator('오전') : setAmPmIndicator('오후');
  };

  const onInputChangeHour = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) <= 12) {
      setHour(Number(e.target.value));
    }
  };

  const handleBlurHourInput = () => {
    if (hour === 0) {
      setHour(1);
    }
  };

  const handleChangeHour = (type: 'up' | 'down') => {
    if (type === 'up') {
      if (hour === 12) {
        setHour(1);
        return;
      }
      setHour((prev) => ++prev);
    } else {
      if (hour === 1) {
        setHour(12);
        return;
      }
      setHour((prev) => --prev);
    }
  };

  const onInputChangeMinute = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) <= 59) {
      setMinute(Number(e.target.value));
    }
  };

  const handleBlurMinuteInput = () => {
    if (minute < 0) {
      setMinute(0);
    }
  };

  const handleChangeMinute = (type: 'up' | 'down') => {
    if (type === 'up') {
      if (minute === 59) {
        if (hour === 12) return;
        setHour((prev) => ++prev);
        setMinute(0);
        return;
      }
      setMinute((prev) => ++prev);
    } else {
      if (minute === 0) {
        if (hour === 1) return;
        else {
          setHour((prev) => --prev);
          setMinute(59);
          return;
        }
      }
      setMinute((prev) => --prev);
    }
  };

  const handleBtnClick = () => {
    minute &&
      setAppointment((prev) => {
        return {
          ...prev,
          AmPm: amPmIndicator,
          HHMM: `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`,
        };
      });

    onClose();
  };

  return (
    <S.TimePickerWrap>
      <S.TimePickerContainer>
        <S.SelectContainer>
          <ArrowBox arrowImg={arrowUp} onClick={() => handleChangeAmPm('am')} />
          <p>{amPmIndicator}</p>
          <ArrowBox arrowImg={arrowBottom} onClick={() => handleChangeAmPm('pm')} />
        </S.SelectContainer>

        <S.TimeContainer>
          <S.SelectContainer>
            <ArrowBox arrowImg={arrowUp} onClick={() => handleChangeHour('up')} />
            <input type="text" value={hour} onChange={onInputChangeHour} onBlur={handleBlurHourInput} />
            <ArrowBox arrowImg={arrowBottom} onClick={() => handleChangeHour('down')} />
          </S.SelectContainer>

          <span>:</span>

          <S.SelectContainer>
            <ArrowBox arrowImg={arrowUp} onClick={() => handleChangeMinute('up')} />
            <input type="text" value={minute.toString().padStart(2, '0')} onChange={onInputChangeMinute} onBlur={handleBlurMinuteInput} />
            <ArrowBox arrowImg={arrowBottom} onClick={() => handleChangeMinute('down')} />
          </S.SelectContainer>
        </S.TimeContainer>
      </S.TimePickerContainer>

      <S.BtnContainer>
        <S.CancelBtn onClick={onClose}>닫기</S.CancelBtn>
        <S.ConfirmBtn onClick={handleBtnClick}>확인</S.ConfirmBtn>
      </S.BtnContainer>
    </S.TimePickerWrap>
  );
};

export default RNTSTimePicker;
