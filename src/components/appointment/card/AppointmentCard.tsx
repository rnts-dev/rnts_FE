import fiClock from '@/assets/fiClock.svg';
import fiMapFin from '@/assets/fiMapFin.svg';
import fiMoreVertical from '@/assets/fiMoreVertical.svg';
import fiShare from '@/assets/fiShare.svg';
import { fetcher } from '@/shared/service/fetch';
import { checkinStep } from '@/shared/store/atoms/checkin';
import { modalState } from '@/shared/store/atoms/modal';
import { calculrateDistance } from '@/shared/utils/calculator';
import { formatDateForAppointmentCard } from '@/shared/utils/date';
import { convertToDate } from '@/models/appointment/mappingTimeline';
import { useMutation } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';
import { useState } from 'react';
import './appointmentCard.scss';
import useGetLocation from '@/models/map/useGetLocation';
import { CheckinModal } from '@/components/checkin';

interface AppoinmentCardProps {
  isShared?: boolean;
  isCheckinBtn?: boolean;
  title: string;
  profileImgList: string[];
  place: string;
  time: number[];
  uaid: number;
}

export const AppointmentCard = ({ isShared, isCheckinBtn, title, profileImgList, place, time, uaid }: AppoinmentCardProps) => {
  const { location } = useGetLocation();

  const onClickCheckin = async () => {
    const data: any = await fetcher.post(`/api/appointment/searchSingleAppointment/${uaid}`);
    console.log(data);
    const destination = calculrateDistance(+location.latitude, +location.longitude, data.data.latitude, data.data.longitude);

    if (destination * 1000 < 50) {
      await mutate(uaid);
    } else {
      alert('아직 체크인 할 수 없어요!\n현재 위치 또는 시간을 확인하세요.\n약속 시간 30분 전부터 체크인 가능해요.');
    }
  };

  const setModalOpen = useSetAtom(modalState);
  const setStep = useSetAtom(checkinStep);
  const [, setIsSuccess] = useState(false);

  const { mutate } = useMutation({
    mutationFn: (id: number) => {
      return fetcher.post(`/api/userappt/checkin/${id}`).then((res) => res.data);
    },
    onSuccess: async (data) => {
      if (data.checkInType === 'success') {
        await setIsSuccess(data.checkInType === 'success');
        await setModalOpen(true);
        // 노지각. 1등
        if (!data.late && data.first) {
          await setStep('init-checkin');
        }
        // 노지각. 노1등
        if (!data.late && !data.first) {
          await setStep('init-checkin-isLast');
        }
        // 전부지각
        if (data.late && data.first) {
          await setStep('all-late');
        }
        // 지각
        if (data.late && !data.first) {
          await setStep('init-checkin-isLast');
        }
      }
      if (data.checkInType === 'Already') {
        alert('이미 체크인 했어요');
      }
      if (data.checkInType === 'Disabled') {
        alert('약속 시간 30분 전부터 체크인 가능해요');
      }
      return data;
    },
  });

  return (
    <div className="appointment_card">
      <div className="top">
        <p className="title">{title}</p>
        <div className="appointment_card_option_container">
          {isShared && (
            <button>
              <img src={fiShare} alt="share_icon" />
            </button>
          )}
          <button>
            <img src={fiMoreVertical} alt="more_btn" />
          </button>
        </div>
      </div>
      <div className="profile_container">
        {profileImgList.map((item) => {
          return <img className="profile" src={item || ''} alt="" />;
        })}
      </div>
      <div className="schedule">
        <img src={fiMapFin} alt="dotImg" />
        <p>{place}</p>
      </div>
      <div className="schedule">
        <img src={fiClock} alt="dotImg" />
        <p>{String(formatDateForAppointmentCard(convertToDate(time)))}</p>
      </div>
      {isCheckinBtn && (
        <div className="appointment_card_checkin_btn_wrap">
          <button className="appointment_card_checkin_btn" onClick={onClickCheckin}>
            도착 체크인
          </button>
        </div>
      )}

      <CheckinModal id={uaid} />
    </div>
  );
};
