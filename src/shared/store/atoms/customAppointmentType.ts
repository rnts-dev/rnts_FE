import { atomWithStorage } from 'jotai/utils';

export const CustomAppointmentTypeState = atomWithStorage('CustomAppointmentType', { id: '', typeName: '', imageUrl: '' });
