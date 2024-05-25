import { atomWithStorage } from 'jotai/utils';

export const AppointmentState = atomWithStorage('appointment', { name: '', tendency: '식사', YYMMDD: '', HHMM: '', place: '' });
