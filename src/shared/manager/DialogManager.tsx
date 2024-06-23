import { globalDialogState } from '@/shared/store/atoms/globalDialog';
import { useAtomValue } from 'jotai';
import React from 'react';

const DialogManger = () => {
  const globalDialogList = useAtomValue(globalDialogState);

  return globalDialogList.map((Component: React.ReactNode) => Component);
};

export default DialogManger;
