import MapSearch from '@/entities/map/ui/MapSearch';
import AppointmentsListPage from '@/pages/appointments/AppointmentsListPage';
import CreateAppointmentPlace from '@/pages/appointments/create/CreateAppointmentPlace';
import CreateAppointmentSchedule from '@/pages/appointments/create/CreateAppointmentSchedule';
import CreateAppointmentType from '@/pages/appointments/create/CreateAppointmentType';
import EditAppointmentSchedule from '@/pages/appointments/edit/EditAppointmentSchedule';
import EditAppointmentType from '@/pages/appointments/edit/EditAppointmentType';
import KakaoRedirectPage from '@/pages/auth/kakao/KakaoRedirectPage';
import LoginPage from '@/pages/auth/LoginPage';
import HomePage from '@/pages/HomePage';
import MyPage from '@/pages/MyPage';
import NotFoundPage from '@/pages/NotFoundPage';
import PenaltyListPage from '@/pages/penalty/PenaltyListPage';
import SendPenaltyPage from '@/pages/penalty/SendPenaltyPage';
import PreviewPage from '@/pages/preview/PreviewPage';
import SelectTendencyPage from '@/pages/tendency/SelectTendencyPage';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const RNTSNavigation = () => {
  const navMeta = [
    { title: '대시보드', url: '/', page: <HomePage /> },
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

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton isActive={isOpen} as={Button}>
            네비게이션바
          </MenuButton>

          <MenuList>
            {navMeta.map((menu) => (
              <Link key={menu.title} to={menu.url}>
                <MenuItem>{menu.title}</MenuItem>
              </Link>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default RNTSNavigation;
