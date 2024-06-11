export const saveAccessToken = async (accessToken: string) => {
  // 서버로 인가코드 발송
  // 서버에서 받은 토큰 localStorage에 저장
  localStorage.setItem('accessToken', accessToken);
};
