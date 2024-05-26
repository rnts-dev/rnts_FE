import characterIllust from '@/assets/onboarding_illust.png';
import KakaoBtn from '@/features/auth/kakao/ui/KakaoBtn';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './loginPage.scss';

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
      <KakaoBtn />
    </div>
  );
};

export default LoginPage;
