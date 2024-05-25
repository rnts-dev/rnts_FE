import { atomWithStorage } from 'jotai/utils';

export const AppointmentState = atomWithStorage('appointment', { name: '', appointmentType: '식사', YYMMDD: '', HHMM: '', place: '', latitude: '', longitude: '' });
