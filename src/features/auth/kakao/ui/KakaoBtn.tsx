import { Link } from 'react-router-dom';
import './kakaoBtn.scss';

const KAKAKO_CLIENT_KEY = import.meta.env.VITE_KAKAO_CLIENT_KEY;

const KakaoBtn = () => {
  return (
    <Link
      className="kakao_login_btn"
      to={`https://kauth.kakao.com/oauth/authorize?response_type=code&redirect_uri=https://kauth.kakao.com/oauth/authorize/login/oauth2/code/kakao&client_id=${KAKAKO_CLIENT_KEY}`}>
      카카오로 로그인하기
    </Link>
  );
};

export default KakaoBtn;
