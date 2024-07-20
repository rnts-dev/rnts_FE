import { Link } from 'react-router-dom';
import './kakaoBtn.scss';

export const KakaoBtn = () => {
  return (
    <Link
      onClick={(e) => e.stopPropagation()}
      className="kakao_login_btn"
      to={`https://kauth.kakao.com/oauth/authorize?response_type=code&redirect_uri=https://rnts-fe.vercel.app/login/oauth2/code/kakao&client_id=3791f336642b43c859459e063130cb5a`}>
      카카오로 로그인하기
    </Link>
  );
};
