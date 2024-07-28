import './placeSearchLayout.scss';

interface LayoutProps {
  children: React.ReactNode;
}

export const PlaceSearchLayout = ({ children }: LayoutProps) => {
  return <div className="layout">{children}</div>;
};
