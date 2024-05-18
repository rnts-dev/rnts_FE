import { Link } from 'react-router-dom';
import kakaoLoginImage from '@/assets/kakaoLogin.png';
import './kakaoBtn.scss';
import { fetcher } from '@/shared/service/fetch';
import { useEffect } from 'react';

const KakaoBtn = () => {
  const test = async () => {
    fetcher.post('/api/test/', 'asdl');
  };

  // useEffect(() => {
  //   test();
  // }, []);

  return (
    <Link to="https://kauth.kakao.com/oauth/authorize?response_type=code&redirect_uri=http://localhost:3000/kakao/callback&client_id=0e789afb0122a1a5e770cc58fe2de55c">
      <img className="container" src={kakaoLoginImage} />
    </Link>
  );
};

export default KakaoBtn;
