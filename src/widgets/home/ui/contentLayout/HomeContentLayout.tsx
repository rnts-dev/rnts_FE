import './homeContentLayout.scss';

interface HomeContentLayoutProps {
  children: React.ReactNode;
}

const HomeContentLayout = ({ children }: HomeContentLayoutProps) => {
  return <div className="home_content_layout">{children}</div>;
};

export default HomeContentLayout;
