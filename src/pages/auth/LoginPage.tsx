import KakaoBtn from '@/features/auth/kakao/ui/KakaoBtn';
import { testApi } from '@/shared/service/test';
import { Button } from '@chakra-ui/react';

const LoginPage = () => {
  return (
    <>
      <Button type="button" colorScheme="teal" size="sm" onClick={() => testApi('api 테스트 입니다')}>
        로그인 (서버 통신 테스트용. 눌러보세여)
      </Button>
      <KakaoBtn />
    </>
  );
};

export default LoginPage;
