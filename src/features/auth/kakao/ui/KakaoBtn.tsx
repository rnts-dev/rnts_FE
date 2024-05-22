import { Link } from 'react-router-dom';
import kakaoLoginImage from '@/assets/kakaoLogin.png';
import './kakaoBtn.scss';

const KAKAKO_CLIENT_KEY = import.meta.env.VITE_KAKAO_CLIENT_KEY;
console.log(KAKAKO_CLIENT_KEY);
const KakaoBtn = () => {
  return (
    <Link to={`https://kauth.kakao.com/oauth/authorize?response_type=code&redirect_uri=http://localhost:8080/kakao-redirect&client_id=${KAKAKO_CLIENT_KEY}`}>
      <img className="container" src={kakaoLoginImage} />
    </Link>
  );
};

export default KakaoBtn;
