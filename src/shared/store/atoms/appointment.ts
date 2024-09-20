import { atomWithStorage } from 'jotai/utils';

export const AppointmentState = atomWithStorage('appointment', { name: '', appointmentType: '식사', YYMMDD: '', AmPm: '오전', HHMM: '', place: '', latitude: '', longitude: '' });
