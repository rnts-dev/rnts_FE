import { testApi } from '@/shared/service/test';
import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const KakaoRedirectPage = () => {
  const [searchParams, _] = useSearchParams();
  const code = searchParams.get('code');

  const test = useMutation({
    mutationFn: (test: string) => {
      return testApi(test);
    },
  });

  useEffect(() => {
    if (code) {
      // kakaoSocialLogin(code); 호출
      test.mutate('asdfs');
    }
  });

  return <div>...someThing</div>;
};

export default KakaoRedirectPage;
