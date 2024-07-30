import { useAtom } from 'jotai';
import * as S from './toastProvider.styled';
import { toastState } from '@/shared/store/atoms/toast';

interface Props {
  children: React.ReactNode;
  toastKey: string;
}

const ToastProvider = ({ children, toastKey }: Props) => {
  const [state] = useAtom(toastState);
  const isOpen = state.key === toastKey && state.isOpen;

  return <>{isOpen && <S.ToastWrap>{children}</S.ToastWrap>}</>;
};

export default ToastProvider;
