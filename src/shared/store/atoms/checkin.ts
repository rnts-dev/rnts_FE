import { atom } from 'jotai';

export const CheckinKeys = {
  // 노지각. 1등
  체크인진입: 'init-checkin',
  패널티정하기: 'make-penalty',

  // 노지각. 노1등
  패널티보러가기: 'init-checkin-isNormal',
  확인: 'view-penalty-completed',

  // 지각자
  내가받은패널티보기: 'init-checkin-isLast',
  패널티확인: 'my-penalty-completed',

  모두지각: 'all-late',
  반성문쓰기: 'write-regret',
  반성문확인: 'write-regret-completed',

  닫기: 'canceled',
} as const;

export type CheckinKeysUnion = (typeof CheckinKeys)[keyof typeof CheckinKeys];

export const checkinStep = atom<CheckinKeysUnion>('init-checkin');
