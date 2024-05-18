import { Link } from 'react-router-dom';
import kakaoLoginImage from '@/assets/kakaoLogin.png';
import './kakaoBtn.scss';

const KakaoBtn = () => {
  return (
    <Link to="https://kauth.kakao.com/oauth/authorize?response_type=code&redirect_uri=http://localhost:8080/kakao-redirect&client_id=3791f336642b43c859459e063130cb5a">
      <img className="container" src={kakaoLoginImage} />
    </Link>
  );
};

export default KakaoBtn;
