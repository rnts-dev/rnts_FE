import { atom } from 'jotai';

export const toastState = atom({
  key: '',
  isOpen: false,
  isClose: true,
});

export const setIsOpen = atom(null, (get, set, key: string) => {
  const state = get(toastState);
  set(toastState, { ...state, isOpen: true, isClose: false, key });
});

export const setIsClose = atom(null, (get, set) => {
  const state = get(toastState);
  set(toastState, { ...state, isOpen: false, isClose: true, key: '' });
});
