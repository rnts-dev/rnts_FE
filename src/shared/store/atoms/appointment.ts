import { atomWithStorage } from 'jotai/utils';

export const AppointmentState = atomWithStorage('appointment', {
  name: '',
  appointmentType: '',
  sendName: 'DEFAULT',
  customAppointmentTypeId: 0,
  YYMMDD: '',
  AmPm: '오전',
  HHMM: '',
  place: '',
  latitude: '',
  longitude: '',
});
