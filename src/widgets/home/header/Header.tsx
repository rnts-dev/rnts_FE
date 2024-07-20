import './header.scss';
import logo from '@/assets/logo.svg';

export const Header = () => {
  return (
    <header className="home_header_container">
      <div className="img_wrap">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <img className="profile_img" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="profileImg" />
      </div>
    </header>
  );
};
