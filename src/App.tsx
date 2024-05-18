import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import MapSearch from '@/entities/map/ui/MapSearch';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import KakaoBtn from './features/auth/kakao/ui/KakaoBtn';
import KakaoRedirectPage from './pages/auth/kakao/KakaoRedirectPage';

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
          <Route path="/" element={<KakaoBtn />} />
          <Route path="/kakao-redirect" element={<KakaoRedirectPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/map" element={<MapSearch />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
