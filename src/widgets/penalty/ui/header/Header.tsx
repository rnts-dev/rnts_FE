import './header.scss';

interface HeaderProps {
  isProfileImg?: boolean;
}

const Header = ({ isProfileImg }: HeaderProps) => {
  return (
    <div className="penalty_send_header">
      <div className="penalty_send_header_heading">
        <h1>패널티 보내기</h1>
        <p>지각자에게 매운맛을 보여주세요!</p>
      </div>
      {isProfileImg && <div className="profile_img_container"></div>}
    </div>
  );
};

export default Header;
