import { testApi } from '@/shared/service/test';
import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const KakaoRedirectPage = () => {
  const [searchParams, _] = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    testApi('테스트중');
  }, []);

  return <div>...someThing</div>;
};

export default KakaoRedirectPage;
