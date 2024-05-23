import { atom } from 'jotai';

export const CheckinKeys = {
  체크인진입: 'init-checkin',
  패널티정하기: 'make-penalty',

  패널티보러가기: 'view-penalty',
  받은패널티보기: 'view-my-penalty',
  확인: 'view-penalty-completed',

  받은패널티: 'my-penalty',

  모두지각: 'all-late',
  반성문쓰기: 'write-regret',
  반성문확인: 'write-regret-completed',

  닫기: 'canceled',
} as const;

export type CheckinKeysUnion = (typeof CheckinKeys)[keyof typeof CheckinKeys];

export const checkinStep = atom<CheckinKeysUnion>('init-checkin');
