import { Appointment } from '@/shared/utils/types/appointment.types';

export function convertToDate(apTime: number[]): Date {
  if (apTime !== null) {
    const [year, month, day, hours, minutes] = apTime;
    return new Date(year, month - 1, day, hours, minutes);
  }

  return new Date();
}

// 타밍라인의 날짜 플래그의 text를 만들기 위한 mapping 함수
export const createFlagTextAppointment = (appointmentList: Appointment[]) => {
  appointmentList.sort((a, b) => convertToDate(a.apTime).getTime() - convertToDate(b.apTime).getTime());

  appointmentList.forEach((item) => {
    // 9시간을 밀리초로 변환하여 더해줍니다. --> UTC일 경우에만 적용
    const adjustedTime = new Date(convertToDate(item.apTime).getTime() + 9 * 60 * 60 * 1000);
    const milliSecond = adjustedTime.getTime() - new Date().getTime();
    const daysDifference = Math.floor(milliSecond / (1000 * 60 * 60 * 24));
    if (daysDifference >= 0) {
      item.flagText = daysDifference === 0 ? '오늘' : `${daysDifference}일 후`;
    } else {
      item.flagText = `${daysDifference * -1}일 전`;
    }
  });
};

// 타임라인의 플래그 여부를 확인 후 플래그를 생성하는 함수
export const createFlagAppointment = (appointmentList: Appointment[]) => {
  appointmentList.forEach((item, index) => {
    if (index === 0) {
      item.flag = true;
    } else if (appointmentList[index].flagText !== appointmentList[index - 1].flagText) {
      item.flag = true;
    }
  });

  return;
};
