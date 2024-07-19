// import PrimaryShinBtn from '@/shared/components/PrimaryShinBtn/PrimaryShinBtn';
// import * as S from './signup.styled';
// import requiredSvg from '@/assets/required.svg';

// const SignupForm = () => {
//   // const [isEmailSend, setIsEmailSend] = useState(false);
//   // const { emailValue, passwordValue, confirmPasswordValue, emailValidate, passwordValidate, confirmPasswordValidate } = useSignupForm();
//   // const isInputValid = emailValue && passwordValue && confirmPasswordValue;

//   // const { mutate } = mutateSendEmail(setIsEmailSend);

//   return (
//     <S.Layout>
//       <S.InputContainer>
//         <S.Label>
//           이메일
//           <S.RequiredImg src={requiredSvg} alt="requiredImg" />
//         </S.Label>
//         <S.EmailContainer>
//           <S.Input placeholder="영문 또는 숫자로 이루어진 4~16자" {...emailValidate} />
//           <S.AuthEmailBtn onClick={() => mutate(emailValue)}>인증</S.AuthEmailBtn>
//         </S.EmailContainer>
//       </S.InputContainer>

//       <S.InputContainer>
//         <S.Label>
//           비밀번호
//           <S.RequiredImg src={requiredSvg} alt="requiredImg" />
//         </S.Label>
//         <S.Input placeholder="비밀번호를 입력해주세요" type="password" {...passwordValidate} />
//       </S.InputContainer>

//       <S.InputContainer>
//         <S.Label>
//           비밀번호 확인
//           <S.RequiredImg src={requiredSvg} alt="requiredImg" />
//         </S.Label>
//         <S.Input placeholder="비밀번호를 입력해주세요" type="password" {...confirmPasswordValidate} />
//       </S.InputContainer>
//       {isInputValid && <PrimaryShinBtn text="가입하기" onClick={() => console.log('signup')} />}
//       {!isInputValid && <S.NotActivateBtn>가입하기</S.NotActivateBtn>}
//     </S.Layout>
//   );
// };

// export default SignupForm;
