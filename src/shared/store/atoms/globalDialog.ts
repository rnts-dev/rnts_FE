import { atom } from 'jotai';
import React from 'react';

export const globalDialogState = atom<React.ReactNode[]>([]);
