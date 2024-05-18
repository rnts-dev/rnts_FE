import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import KakaoBtn from './features/auth/kakao/ui/KakaoBtn';
import KakaoRedirectPage from './pages/KakaoRedirectPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<KakaoBtn />} />
        <Route path="kakao-redirect" element={<KakaoRedirectPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
