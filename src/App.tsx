import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import MapSearch from '@/entities/map/ui/MapSearch';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import KakaoRedirectPage from './pages/auth/kakao/KakaoRedirectPage';
import LoginPage from './pages/auth/LoginPage';
import SelectTendencyPage from './pages/tendency/SelectTendencyPage';
import HomePage from './pages/HomePage';
import AppointmentsListPage from './pages/appointments/AppointmentsListPage';
import CreateAppointmentPage from './pages/appointments/CreateAppointmentPage';
import EditAppointmentPage from './pages/appointments/EditAppointmentPage';
import PenaltyListPage from './pages/penalty/PenaltyListPage';
import SendPenaltyPage from './pages/penalty/SendPenaltyPage';
import MyPage from './pages/MyPage';

const colors = {
  personal: '',
  diabled: '',
};

const theme = extendTheme({ colors });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="kakao-redirect" element={<KakaoRedirectPage />} />
          <Route path="map" element={<MapSearch />} />

          <Route path="tendency/select" element={<SelectTendencyPage />} />

          <Route path="appointment" element={<AppointmentsListPage />} />
          <Route path="appointment/create" element={<CreateAppointmentPage />} />
          <Route path="appointment/edit" element={<EditAppointmentPage />} />

          <Route path="penalty" element={<PenaltyListPage />} />
          <Route path="penalty/send" element={<SendPenaltyPage />} />

          <Route path="mypage" element={<MyPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
