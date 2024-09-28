import { MyAppointment, MyAppointmentFlag } from '@/shared/utils/types/appointment.types';

export function convertToDate(apTime: number[]): Date {
  if (apTime !== null) {
    const [year, month, day, hours, minutes] = apTime;
    return new Date(year, month - 1, day, hours, minutes);
  }

  return new Date();
}

// 타밍라인의 날짜 플래그의 text를 만들기 위한 mapping 함수
export const createFlagTextAppointment = (appointmentList: MyAppointment[]): MyAppointmentFlag[] => {
  // appointmentTime 기준으로 정렬
  appointmentList.sort((a, b) => new Date(a.appointmentTime).getTime() - new Date(b.appointmentTime).getTime());

  // flagText 및 flag를 추가한 새로운 리스트를 반환
  return appointmentList.map((item) => {
    // 9시간을 밀리초로 변환하여 더해줍니다. --> UTC일 경우에만 적용
    const adjustedTime = new Date(item.appointmentTime).getTime() + 9 * 60 * 60 * 1000;
    const milliSecond = new Date(adjustedTime).getTime() - new Date().getTime();
    const daysDifference = Math.floor(milliSecond / (1000 * 60 * 60 * 24));

    // flagText 설정
    const flagText = daysDifference >= 0 ? (daysDifference === 0 ? '오늘' : `${daysDifference}일 후`) : `${Math.abs(daysDifference)}일 전`;

    return {
      ...item, // MyAppointment의 기존 속성들 복사
      flag: true, // flag는 true로 고정
      flagText, // flagText는 계산된 값
    };
  });
};

// 타임라인의 플래그 여부를 확인 후 플래그를 생성하는 함수
export const createFlagAppointment = (appointmentList: MyAppointmentFlag[]): MyAppointmentFlag[] => {
  return appointmentList.map((item, index) => {
    const flag = index === 0 || appointmentList[index].flagText ? true : false;

    return {
      ...item,
      flag,
    };
  });
};
