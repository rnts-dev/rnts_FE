import { fetcher } from '@/shared/service/fetch';
import { useEffect, useState } from 'react';
const BASE_URL = import.meta.env.VITE_RNTS_PUBLIC_API;

export default function KakaoRedirectPage() {
  const [user, setUser] = useState('');

  useEffect(() => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get('code');

    // TODO : 위에서 얻은 인가코드를 백엔드의 카카로 로그인주소로 보냄.
    fetcher.get(`${BASE_URL}auth/kakao?code=${code}`).then((res) => {
      // ok respone 확인하고, 이후 작업 해야함(유저로그인시키기, 토큰 브라우저에 저장)
      localStorage.setItem('token', res.data.token);
      fetcher //서버에서 유저정보 요청하는 url
        .get(`${BASE_URL}userinfo`, {
          headers: {
            //헤더에 token을 담아서 전달
            Authorization: 'Bearer ' + res.data.token,
          },
        })
        // 서버에서 유효성 검사 - > 확인되면 유저 데이터 전달해주고 프론트에서는
        // TODO : 유저 데이터 스토어에 저장
        // TODO : 하고 홈화면 이동 시키기!
        .then((response) => {
          setUser(response.data);
          console.log(user);
        });
    });
  }, []);
  return <div>KakaoLogin Redirect 페이지</div>;
}
