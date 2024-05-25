import ConfirmButton from '@/shared/components/ConfirmButton.tsx';
import './placeSearchLayout.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const PlaceSearchLayout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      {children}

      <div className="bottom-button">
        <ConfirmButton onCancel={() => console.log('can')} onConfirm={() => console.log('confirm')} />
      </div>
    </div>
  );
};

export default PlaceSearchLayout;
