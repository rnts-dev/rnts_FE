export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function formatDateForAppointmentCard(dateString: Date) {
  const date = new Date(dateString);
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate();
  const dayOfWeek = date.toLocaleString('default', { weekday: 'short' });
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? '오후' : '오전';
  const hourFormat = hours % 12 || 12; // 12시간 형식으로 변환

  return `${month} ${day}일 (${dayOfWeek}) ${ampm} ${hourFormat}시 ${minutes}분`;
}

export function convertToISOString(YYMMDD: string, HHMM: string) {
  const [_, time] = HHMM.split(' ');
  const [hours, minutes] = time.split(':');
  const [year, month, day] = YYMMDD.split('-');
  const date = new Date(`${year}-${month}-${day}T${hours}:${minutes}:00.000Z`);

  return date.toISOString();
}
