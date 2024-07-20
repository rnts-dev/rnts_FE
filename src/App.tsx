import PreviewPage from '@/pages/preview/PreviewPage';
import ConfirmManager from '@/shared/manager/confirm/ConfirmManager';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppointmentsListPage from './pages/appointments/AppointmentsListPage';
import CreateAppointmentPlace from './pages/appointments/create/CreateAppointmentPlace';
import CreateAppointmentSchedule from './pages/appointments/create/CreateAppointmentSchedule';
import CreateAppointmentType from './pages/appointments/create/CreateAppointmentType';
import EditAppointmentSchedule from './pages/appointments/edit/EditAppointmentSchedule';
import EditAppointmentType from './pages/appointments/edit/EditAppointmentType';
import KakaoRedirectPage from './pages/auth/kakao/KakaoRedirectPage';
import LoginPage from './pages/auth/LoginPage';
import HomePage from './pages/HomePage';
import MyPage from './pages/MyPage';
import NotFoundPage from './pages/NotFoundPage';
import PenaltyListPage from './pages/penalty/PenaltyListPage';
import SendPenaltyPage from './pages/penalty/SendPenaltyPage';
import SelectTendencyPage from './pages/tendency/SelectTendencyPage';
import { MapSearch } from './components/map';
import EmailSignup from './pages/auth/emailSignup/EmailSignup';

const colors = {
  personal: '',
  diabled: '',
};

const theme = extendTheme({ colors });

const navMeta = [
  { title: '대시보드', url: '/', page: <HomePage /> },
  { title: '이메일로 회원가입', url: '/signup-email', page: <EmailSignup /> },
  { title: '로그인', url: 'login', page: <LoginPage /> },
  { title: '카카오(re)', url: 'login/oauth2/code/kakao', page: <KakaoRedirectPage /> },
  { title: '지도', url: 'map', page: <MapSearch /> },
  { title: '유형', url: 'tendency/select', page: <SelectTendencyPage /> },
  { title: '약속', url: 'appointment', page: <AppointmentsListPage /> },
  { title: '약속 생성', url: 'appointment/create/type', page: <CreateAppointmentType /> },
  { title: '약속 생성 스케쥴', url: 'appointment/create/schedule', page: <CreateAppointmentSchedule /> },
  { title: '약속 생성 장소', url: 'appointment/create/place', page: <CreateAppointmentPlace /> },
  { title: '약속 편집', url: 'appointment/edit/type', page: <EditAppointmentType /> },
  { title: '약속 편집 스케쥴', url: 'appointment/edit/schedule', page: <EditAppointmentSchedule /> },
  { title: '페널티', url: 'penalty', page: <PenaltyListPage /> },
  { title: '페널티 보내기', url: 'penalty/send', page: <SendPenaltyPage /> },
  { title: 'UI 개발용 페이지', url: 'dev-preview', page: <PreviewPage /> },
  { title: '마이페이지', url: 'mypage', page: <MyPage /> },
  { title: 'NOT FOUND', url: '/*', page: <NotFoundPage /> },
];

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            {navMeta.map((menu) => (
              <Route key={menu.title} path={menu.url} element={menu.page} />
            ))}
          </Routes>
          <ConfirmManager />
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
