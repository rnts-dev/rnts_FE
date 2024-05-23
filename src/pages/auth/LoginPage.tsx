import './loginPage.scss';
import KakaoBtn from '@/features/auth/kakao/ui/KakaoBtn';
import { testApi } from '@/shared/service/test';
import { Button } from '@chakra-ui/react';

const LoginPage = () => {
  return (
    <div className="login_page_padding">
      <Button type="button" colorScheme="teal" size="sm" onClick={() => testApi('api 테스트 입니다')}>
        로그인 (서버 통신 테스트용. 눌러보세여)
      </Button>
      <div className="login_page_content">
        <div className="login_page_content_character">캐릭터 일러스트</div>
        <div>
          <h3 className="login_page_title">출발했어?!</h3>
          <p>뭐라고쓸지생각중생각중생각중</p>
        </div>
      </div>
      <KakaoBtn />
    </div>
  );
};

export default LoginPage;
