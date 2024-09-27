import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const CustomAppointmentTypeState = atomWithStorage('CustomAppointmentType', { id: '', typeName: '', imageUrl: '' });

export const CustomAppointmentChangeMode = atom<'EDIT' | 'DELETE' | undefined>(undefined);
