import { fetcher } from '@/shared/service/fetch';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
export default function KakaoRedirectPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  // const [user, setUser] = useState('');

  useEffect(() => {
    // const url = new URL(window.location.href);
    const code = searchParams.get('code');
    // TODO : 위에서 얻은 인가코드를 백엔드의 카카로 로그인주소로 보냄.

    fetcher.post(`/api/user/kakao/login?code=${code}`).then((res) => {
      localStorage.setItem('ACCESS_TOKEN', res.data);
      navigate('/');
      // fetcher //서버에서 유저정보 요청하는 url
      //   .get(`${BASE_URL}userinfo`, {
      //     headers: {
      //       //헤더에 token을 담아서 전달
      //       Authorization: 'Bearer ' + res.data.token,
      //     },
      //   })
      // 서버에서 유효성 검사 - > 확인되면 유저 데이터 전달해주고 프론트에서는
      // TODO : 유저 데이터 스토어에 저장
      // TODO : 하고 홈화면 이동 시키기!
      // .then((response) => {
      //   setUser(response.data);
      //   console.log(user);
      // });
    });
  }, []);
  return <div>KakaoLogin Redirect 페이지</div>;
}
