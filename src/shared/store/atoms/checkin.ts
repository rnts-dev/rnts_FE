import { atom } from 'jotai';

export const CheckinKeys = {
  체크인진입: 'init-checkin',
  패널티정하기: 'make-penalty',
  패널티보러가기: 'view-penalty',
  받은패널티보기: 'view-my-penalty',
  받은패널티: 'my-penalty',
  반성문쓰기: 'all-late',
  확인: 'view-penalty-completed',
  닫기: 'canceled',
} as const;

export type CheckinKeysUnion = (typeof CheckinKeys)[keyof typeof CheckinKeys];

export const checkinStep = atom<CheckinKeysUnion>('init-checkin');
