import './loginPage.scss';
import KakaoBtn from '@/features/auth/kakao/ui/KakaoBtn';
import characterIllust from '@/assets/onboarding_illust.png';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

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
          <p>일찍 오는 친구, 지각하는 친구 ㅏㅏㅏㅏ</p>
        </div>
      </div>
      <KakaoBtn />
    </div>
  );
};

export default LoginPage;
