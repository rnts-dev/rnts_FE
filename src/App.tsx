import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import MapSearch from '@/entities/map/ui/MapSearch';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import KakaoRedirectPage from './pages/auth/kakao/KakaoRedirectPage';
import LoginPage from './pages/auth/LoginPage';
import SelectTendencyPage from './pages/tendency/SelectTendencyPage';
import HomePage from './pages/HomePage';
import AppointmentsListPage from './pages/appointments/AppointmentsListPage';
import PenaltyListPage from './pages/penalty/PenaltyListPage';
import SendPenaltyPage from './pages/penalty/SendPenaltyPage';
import MyPage from './pages/MyPage';
import CreateAppointmentType from './pages/appointments/create/CreateAppointmentType';
import CreateAppointmentSchedule from './pages/appointments/create/CreateAppointmentSchedule';
import CreateAppointmentPlace from './pages/appointments/create/CreateAppointmentPlace';
import EditAppointmentType from './pages/appointments/edit/EditAppointmentType';
import EditAppointmentSchedule from './pages/appointments/edit/EditAppointmentSchedule';

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
          <Route path="appointment/create/type" element={<CreateAppointmentType />} />
          <Route path="appointment/create/schedule" element={<CreateAppointmentSchedule />} />
          <Route path="appointment/create/place" element={<CreateAppointmentPlace />} />

          <Route path="appointment/edit/type" element={<EditAppointmentType />} />
          <Route path="appointment/edit/schedule" element={<EditAppointmentSchedule />} />

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
