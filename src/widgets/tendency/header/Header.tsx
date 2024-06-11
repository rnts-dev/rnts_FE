import './header.scss';
import chevronLeft from '@/assets/chevronLeft.svg';

export const Header = () => {
  return (
    <header className="tendency_header_container">
      <div className="tendency_header_back">
        <img src={chevronLeft} alt="chevron_left" />
      </div>
      <div className="tendency_header_description">
        <h2>나는 주로 어느 쪽?</h2>
        <p>
          나의 약속 습관 유형을 골라 보세요
          <br /> 마이페이지에서 언제든 변경 가능해요.
        </p>
      </div>
    </header>
  );
};
