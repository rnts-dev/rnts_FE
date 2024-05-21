import { testApi } from '@/shared/service/test';
import { Button } from '@chakra-ui/react';

const LoginPage = () => {
  return (
    <Button type="button" onClick={() => testApi('api 테스트 입니다')}>
      로그인
    </Button>
  );
};

export default LoginPage;
