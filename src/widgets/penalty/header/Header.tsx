import './header.scss';

interface HeaderProps {
  title: string;
  description: string;
  isProfileImg?: boolean;
}

export const Header = ({ isProfileImg, title, description }: HeaderProps) => {
  return (
    <div className="penalty_send_header">
      <div className="penalty_send_header_heading">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {isProfileImg && <div className="profile_img_container"></div>}
    </div>
  );
};
