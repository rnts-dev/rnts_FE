import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const policyState = atomWithStorage('policyState', {
  isAccept: false,
});

export const setAccepct = atom(null, (get, set) => {
  const state = get(policyState);
  set(policyState, { ...state, isAccept: true });
});

export const setNonAccepct = atom(null, (get, set) => {
  const state = get(policyState);
  set(policyState, { ...state, isAccept: false });
});
