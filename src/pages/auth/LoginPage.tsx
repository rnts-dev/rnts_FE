import characterIllust from '@/assets/onboarding_illust.png';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './loginPage.scss';
import { KakaoBtn } from '@/components/auth';
import PrimaryShinBtn from '@/shared/components/PrimaryShinBtn/PrimaryShinBtn';

const LoginPage = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const id = searchParams.get('id');
    const appointment = searchParams.get('appointment');
    id && localStorage.setItem('id', id);
    appointment && localStorage.setItem('appointment', appointment);
  }, []);

  return (
    <div className="login_page_padding">
      <div className="login_page_content">
        <div className="login_page_content_character">
          <img src={characterIllust} alt="character_illust" />
        </div>
        <div>
          <h3 className="login_page_title">출발했어?!</h3>
          <p>
            약속에 늦으면 벌칙이 따라와요. <br />
            페널티 기반 지각 방지 서비스, 지금 “출발했어?!”
          </p>
        </div>
      </div>

      <div className="btn_container">
        <PrimaryShinBtn text="일반 로그인" onClick={() => console.log('/signup-email')} image="/src/assets/auth/email.svg" />
        <KakaoBtn />
      </div>
      <a href="/signup-email" className="move_signup">
        계정이 없다면? 회원 가입하기
      </a>
    </div>
  );
};

export default LoginPage;
