import './placeSearchLayout.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const PlaceSearchLayout = ({ children }: LayoutProps) => {
  return <div className="layout">{children}</div>;
};

export default PlaceSearchLayout;
