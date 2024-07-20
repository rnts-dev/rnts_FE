import PrimaryShinBtn from '@/shared/components/PrimaryShinBtn/PrimaryShinBtn';
import * as S from './nicknameForm.styled';

interface Props {
  nicknameValue: string;
  nicknameValidate: any;
  error: any;
}

const NicknameForm = ({ nicknameValue, nicknameValidate, error }: Props) => {
  console.log(error);
  return (
    <S.Layout>
      <S.InputForm>
        <S.Input value={nicknameValue} placeholder="최소 2자 이상, 최대 8자 이내" type="text" {...nicknameValidate} />
      </S.InputForm>
      <S.BtnWrap>
        {!error && <PrimaryShinBtn text="저장" onClick={() => console.log('submit')} />}
        {error && <S.NotActivateBtn disabled>저장</S.NotActivateBtn>}
      </S.BtnWrap>
    </S.Layout>
  );
};

export default NicknameForm;
